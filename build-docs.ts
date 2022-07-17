import * as fs from "https://deno.land/std@0.148.0/fs/mod.ts";
import type { DocNode, Location } from "https://deno.land/x/deno_doc@0.38.0/lib/types.d.ts";
import { doc } from "https://deno.land/x/deno_doc@0.38.0/mod.ts";

type Kinds = DocNode["kind"];

type PossibleKinds<S extends Kinds> =
    /** const VERSION: string */
    | `${"var" | "const" | "let"} ${string}: ${string}`
    /** type RawJSONData = Record<string, string> */
    /** type Animal = Dog | Cat */
    | `${S} ${string} = ${string}`
    /** enum Errors */
    /** class Book */
    | `${S} ${string}`
    /** class Dog extends Animal */
    /** interface Person extends Human, Alive */
    | `${S} ${string} ${string} ${string}`
    /** function fib(number) */
    | `${S} ${string} ${string}(${string})`;

interface Declarable<S extends Kinds = Kinds> {
    expression: PossibleKinds<S>;
}

// deno-lint-ignore no-empty-interface
interface Linkable {
    // TODO: linkable
    // link: string;
}

interface ShowcaseInterface {
    kind: 'interface';
    name: string;
    description?: string;
    properties?: Record<string, ShowcaseProperty & Linkable>;
    extends?: Record<string, ShowcaseType & Linkable>;
    url?: string;
    rawURL?: string;
}

interface ShowcaseBaseType {
    kind?: string;
    name: string;
    description?: string;
    url?: string;
    rawURL?: string;
}

interface ShowcaseTypeWithBody extends ShowcaseBaseType {
    body: string;
}

interface ShowcaseParameter {
    name: string;
    description?: string;
    isOptional: boolean;
    default?: string;
    type: ShowcaseType & Linkable;
}

interface ShowcaseProperty {
    name: string;
    description?: string;
    type: ShowcaseType & Linkable;
    isReadonly: boolean;
    isOptional: boolean;
}

interface ShowcaseFunction {
    kind: 'function';
    name: string;
    description?: string;
    parameters: Record<string, ShowcaseParameter>;
    returnType: ShowcaseType & Linkable;
    url?: string;
    rawURL?: string;
}

interface ShowcaseConstructor {
    name: string;
    description?: string;
    parameters: string[];
}

// classes are types and are linkable aren't they??
interface ShowcaseClass {
    kind: 'class'
    name: string;
    description?: string;
    extends?: ShowcaseClass & Linkable;
    methods: Record<string, ShowcaseFunction & Linkable>;
    properties: Record<string, ShowcaseProperty & Linkable>;
    con: ShowcaseConstructor;
    url?: string;
    rawURL?: string;
}

interface ShowcaseEnumMember {
    name: string;
    value: string;
}

// enums are types too!
interface ShowcaseEnum {
    kind: 'enum'
    name: string;
    description?: string;
    members: Record<string, ShowcaseEnumMember & Linkable>;
    url?: string;
    rawURL?: string;
}

interface ShowcaseVariable {
    kind: 'variable';
    name: string;
    description?: string;
    isConstant: boolean;
    body: string;
    url?: string;
    rawURL?: string;
    literal?: {
        kind?: string;
        value?: string;
    };
}

type ShowcaseType =
    | ShowcaseBaseType
    | ShowcaseClass
    | ShowcaseInterface;

type Showcase =
    | ShowcaseClass
    | ShowcaseType
    | ShowcaseFunction
    | ShowcaseInterface
    | ShowcaseEnum;

const branchURL = 'https://github.com/oasisjs/biscuit/tree/main';
const rawBranchURL = 'https://raw.githubusercontent.com/oasisjs/biscuit/main';

function getLocationURL(location: Location, options: 'raw' | 'main' = 'main'): string {
    let url: string;
    if (options === 'raw') {
        url = rawBranchURL
    } else {
        url = branchURL
    }

    const filename = location.filename;
    const start = filename.indexOf('/packages/');
    const componentPath = filename.slice(start, filename.length);
    const lineAndCol = `#L${location.line}:${location.col}`;

    return url + componentPath + lineAndCol;
}

function handleNode(node: DocNode): Showcase & Declarable | undefined {
    if (node.declarationKind !== 'export' || node.name === 'default' || node.kind === 'import') {
        return;
    }

    switch (node.kind) {
        case "variable": {
            let literal;
            if (node.variableDef.tsType?.kind === 'literal') {
                literal = {
                    kind: node.variableDef?.tsType?.literal?.kind,
                    value: node.variableDef.tsType?.repr,
                }
            } else if (node.variableDef.tsType?.kind === 'typeRef') {
                literal = {
                    kind: node.variableDef?.tsType?.typeRef?.typeName,
                    value: node.variableDef.tsType?.repr,
                }
            }
            const result: ShowcaseVariable & Declarable = {
                kind: 'variable',
                name: node.name,
                description: node.jsDoc?.doc,
                body: node.variableDef.tsType?.repr ?? "%MISSING",
                isConstant: node.variableDef.kind === "const",
                expression: `${node.variableDef.kind} ${node.name}: ${literal ? literal.kind : node.variableDef?.tsType?.repr}`,
                url: getLocationURL(node.location),
                rawURL: getLocationURL(node.location, 'raw'),
                literal: literal
            };

            return result;
        }
        case "interface": {
            const result: ShowcaseInterface & Declarable = {
                kind: 'interface',
                name: node.name,
                description: node.jsDoc?.doc,
                url: getLocationURL(node.location),
                rawURL: getLocationURL(node.location, 'raw'),
                properties: Object.fromEntries(node.interfaceDef.properties.map((property) => {
                    const o: ShowcaseProperty = {
                        name: property.name,
                        type: {
                            kind: property.tsType?.kind,
                            name: property.tsType?.repr ?? "%MISSING", // TODO: handle types better
                        },
                        description: property.jsDoc?.doc,
                        isOptional: !!property.optional,
                        isReadonly: !!property.readonly,
                    };

                    return [property.name, o];
                })),
                expression: node.interfaceDef.extends.length > 0
                    ? `${node.kind} ${node.name} ${node.interfaceDef.extends.join(", ")}`
                    : `${node.kind} ${node.name}`,
            };

            return result;
        }
        case "class": {
            const result: ShowcaseClass & Declarable = {
                kind: 'class',
                name: node.name,
                description: node.jsDoc?.doc,
                url: getLocationURL(node.location),
                rawURL: getLocationURL(node.location, 'raw'),
                // TODO: bug
                con: {
                    name: node.classDef.constructors[0]?.name ?? "constructor",
                    description: node.classDef.constructors[0]?.jsDoc?.doc,
                    parameters: node.classDef.constructors[0]?.params.map((param) => param.tsType?.repr ?? "%MISSING") ?? [],
                },
                properties: Object.fromEntries(node.classDef.properties.map((property) => {
                    const o: ShowcaseProperty = {
                        name: property.name,
                        type: {
                            kind: property.tsType?.kind,
                            name: property.tsType?.repr ?? "%MISSING", // TODO: handle types better
                        },
                        description: property.jsDoc?.doc,
                        isOptional: !!property.optional,
                        isReadonly: !!property.readonly,
                    };

                    return [property.name, o];
                })),
                methods: Object.fromEntries(node.classDef.methods.map((method) => {
                    const o: ShowcaseFunction = {
                        kind: 'function',
                        name: method.name,
                        returnType: {
                            kind: method.functionDef?.returnType?.kind,
                            name: method.functionDef.returnType?.repr ?? "%MISSING",
                        },
                        parameters: Object.fromEntries(method.functionDef.typeParams.map((typeParam) => {
                            const o: ShowcaseParameter = {
                                name: typeParam.name,
                                isOptional: typeParam.default != null,
                                type: {
                                    kind: typeParam.constraint?.kind,
                                    name: typeParam.constraint?.repr ?? "%MISSING",
                                },
                            };

                            return [typeParam.name, o];
                        })),
                    };

                    return [method.name, o];
                })),
                expression: node.classDef.extends?.length
                    ? `${node.kind} ${node.name}(${node.classDef?.constructors[0]?.params.map(k => k.tsType?.repr).join(', ')}) extends ${node.classDef.extends}`
                    : `${node.kind} ${node.name}(${node.classDef?.constructors[0]?.params.map(k => k.tsType?.repr).join(', ')})`,
            };

            return result;
        }
        case "function": {
            const result: ShowcaseFunction & Declarable = {
                kind: 'function',
                name: node.name,
                description: node.jsDoc?.doc,
                url: getLocationURL(node.location),
                rawURL: getLocationURL(node.location, 'raw'),
                returnType: {
                    kind: node.functionDef?.returnType?.kind,
                    name: node.functionDef.returnType?.repr ?? "%MISSING",
                },
                parameters: Object.fromEntries(node.functionDef.typeParams.map((typeParam) => {
                    const o: ShowcaseParameter = {
                        name: typeParam.name,
                        type: {
                            kind: typeParam.constraint?.kind,
                            name: typeParam.constraint?.repr ?? "%MISSING",
                        },
                        default: typeParam.default?.repr,
                        isOptional: typeParam.default != null,
                    };

                    return [typeParam.name, o];
                })),
                expression: `${node.kind} ${node.name}(${node.functionDef.params.map((p) => p.tsType?.repr).join(", ")})`,
            };

            return result;
        }

        case 'enum': {
            const result: ShowcaseEnum & Declarable = {
                kind: 'enum',
                name: node.name,
                description: node.jsDoc?.doc,
                url: getLocationURL(node.location),
                rawURL: getLocationURL(node.location, 'raw'),
                members: Object.fromEntries(node.enumDef.members.map((member) => {
                    const o: ShowcaseEnumMember = {
                        name: member.name,
                        value: member?.init?.repr ?? "%MISSING",
                    };

                    return [member.name, o];
                })),
                expression: `enum ${node.name}`
            };

            return result;
        }
    }
}

async function loadDocs(): Promise<(Showcase & Declarable)[]> {
    const url = Deno.args[0].startsWith("http") ? Deno.args[0] : `file://${Deno.cwd()}/${Deno.args[0]}`;

    const arr: (Showcase & Declarable)[] = [];
    for (const node of await doc(url)) {
        const res = handleNode(node);
        if (res) {
            arr.push(res);
        }
    }

    return arr;
}

async function makeDocumentation(): Promise<void> {
    const docs = await loadDocs();

    const variables = docs.filter((doc) => doc.kind === 'variable');
    const interfaces = docs.filter((doc) => doc.kind === 'interface');
    const classes = docs.filter((doc) => doc.kind === 'class');
    const functions = docs.filter((doc) => doc.kind === 'function');
    const enums = docs.filter((doc) => doc.kind === 'enum');

    // Ensuring the documentation folder exists
    fs.ensureDirSync('./docs');

    // Writing the documentation file
    let data = '';

    Deno.writeTextFileSync('./docs/VARIABLES.md', makeReferences(variables, 'Variables'));
    
    data = makeIndexes(classes, 'Classes') + makeReferences(classes);
    Deno.writeTextFileSync('./docs/CLASSES.md', data);

    data = makeIndexes(interfaces, 'Interfaces') + makeReferences(interfaces);
    Deno.writeTextFileSync('./docs/INTERFACES.md', data);

    data = makeIndexes(functions, 'Functions') + makeReferences(functions);
    Deno.writeTextFileSync('./docs/FUNCTIONS.md', data);

    data = makeIndexes(enums, 'Enums') + makeReferences(enums);
    Deno.writeTextFileSync('./docs/ENUMS.md', data);
}

function makeReferences(docs: (Showcase & Declarable)[], title = ''): string {
    let data = '';
    if (title != '') {
        data = `# ${title}\n\n`
    }

    data += docs.map(v => {
        let result = `## [${v.expression}](${v.url})\n`;
        if (v.description) {
            result += `\`\`\`\n${v.description}\n\`\`\``;
        }

        return result
    }).join('\n');

    return data
}

function makeIndexes(docs: (Showcase & Declarable)[], title = ''): string {
    let data = '';
    if (title != '') {
        data = `# ${title}\n\n`
    }

    data += docs.map(v => {
        return `  - [${v.expression}](#${v.expression.trim().toLowerCase().replaceAll(/[\:\,\(\)\-]/g, '').replaceAll(' ', '-')})\n`;
    }).join('\n');

    return data
}

makeDocumentation();