import type { DocNode } from "https://deno.land/x/deno_doc@0.38.0/lib/types.d.ts";
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
    name: string;
    description?: string;
    properties?: Record<string, ShowcaseProperty & Linkable>;
    extends?: Record<string, ShowcaseType & Linkable>;
}

interface ShowcaseBaseType {
    name: string;
    description?: string;
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
    name: string;
    description?: string;
    parameters: Record<string, ShowcaseParameter>;
    returnType: ShowcaseType & Linkable;
}

interface ShowcaseConstructor {
    name: string;
    description?: string;
    parameters: string[];
}

// classes are types and are linkable aren't they??
interface ShowcaseClass {
    name: string;
    description?: string;
    extends?: ShowcaseClass & Linkable;
    methods: Record<string, ShowcaseFunction & Linkable>;
    properties: Record<string, ShowcaseProperty & Linkable>;
    con: ShowcaseConstructor;
}

interface ShowcaseEnumMember {
    name: string;
    value: string;
}

// enums are types too!
interface ShowcaseEnum {
    name: string;
    description?: string;
    members: Record<string, ShowcaseEnumMember & Linkable>;
}

interface ShowcaseVariable {
    name: string;
    description?: string;
    isConstant: boolean;
    body: string;
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

function handleNode(node: DocNode): Showcase & Declarable | undefined {
    if (node.declarationKind !== 'export' || node.name === 'default' || node.kind === 'import') {
        return;
    }

    switch (node.kind) {
        case "variable": {
            const result: ShowcaseVariable & Declarable = {
                name: node.name,
                description: node.jsDoc?.doc,
                body: node.variableDef.tsType?.repr ?? "%MISSING",
                isConstant: node.variableDef.kind === "const",
                expression: `${node.variableDef.kind} ${node.name}: ${node.variableDef.tsType?.repr!}`,
            };

            return result;
        }
        case "interface": {
            const result: ShowcaseInterface & Declarable = {
                name: node.name,
                description: node.jsDoc?.doc,
                properties: Object.fromEntries(node.interfaceDef.properties.map((property) => {
                    const o: ShowcaseProperty = {
                        name: property.name,
                        type: {
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
                name: node.name,
                description: node.jsDoc?.doc,
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
                        name: method.name,
                        returnType: {
                            name: method.functionDef.returnType?.repr ?? "%MISSING",
                        },
                        parameters: Object.fromEntries(method.functionDef.typeParams.map((typeParam) => {
                            const o: ShowcaseParameter = {
                                name: typeParam.name,
                                isOptional: typeParam.default != null,
                                type: {
                                    name: typeParam.constraint?.repr ?? "%MISSING",
                                },
                            };

                            return [typeParam.name, o];
                        })),
                    };

                    return [method.name, o];
                })),
                expression: node.classDef.extends?.length
                    ? `${node.kind} ${node.name} ${node.classDef.extends}`
                    : `${node.kind} ${node.name}`,
            };

            return result;
        }
        case "function": {
            const result: ShowcaseFunction & Declarable = {
                name: node.name,
                description: node.jsDoc?.doc,
                returnType: {
                    name: node.functionDef.returnType?.repr ?? "%MISSING",
                },
                parameters: Object.fromEntries(node.functionDef.typeParams.map((typeParam) => {
                    const o: ShowcaseParameter = {
                        name: typeParam.name,
                        type: {
                            name: typeParam.constraint?.repr ?? "%MISSING",
                        },
                        default: typeParam.default?.repr,
                        isOptional: typeParam.default != null,
                    };

                    return [typeParam.name, o];
                })),
                expression: `${node.kind} ${node.name} ${node.functionDef.params.map((p) => p.tsType?.repr).join(",")}`,
            };

            return result;
        }
    }
}

if (import.meta.main) {
    console.log(Deno.cwd());
    const url = Deno.args[0].startsWith("http") ? Deno.args[0] : `file://${Deno.cwd()}/${Deno.args[0]}`;

    for (const node of await doc(url)) {
        console.log(handleNode(node));
    }
}
