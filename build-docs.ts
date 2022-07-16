/**
 * Deno command:
 *         | deno run --allow-all build-docs.ts
*/

// Node imports
import { ensureFile } from 'https://deno.land/std@0.148.0/fs/mod.ts';
import { join } from "https://deno.land/std@0.148.0/path/mod.ts";

// Path with the docs.json file generated with `deno doc --json mod.ts > docs.json`
const docsPath = join(__dirname + './docs.json');
const mainBranchURL = 'https://github.com/oasisjs/biscuit/tree/main';

/** JSON Start */
interface DocumentationObject {
    kind: string;
    name: string;
    location: Location;
    declarationKind: string;
}

interface Location {
    filename: string;
    line: number;
    col: number;
}

interface VariableObject extends DocumentationObject {
    kind: 'variable';
    variableDef: VariableDef;
}

interface VariableDef {
    tsType: tsType;
    kind: string;
}

interface tsType {
    repr: string;
    kind: string;
    keyword: string;
}
/** JSON end */

// Interface to represent a processed DocumentationObject 
interface DocumentationComponent {
    // Parsed expression. Ex: class Foo(bar: string, baz: ComplexType)
    expression: string;
    // variable, enum, class, interface, etc.
    kind: string;
    // The name of the type/class. Ex: Foo
    name: string;
    // Main branch url.
    url: string;
}

/**
 * Returns a new javascript object with the docs.json file.
*/
function getDocs(): DocumentationObject[] {
    if (!ensureFile(docsPath)) {
        throw new Error('The docs.json file does not exist. Use: deno doc --json mod.ts > docs.json');
    }

    const res = Deno.readFileSync(docsPath)
    const decoder = new TextDecoder('utf-8');
    return JSON.parse(decoder.decode(res).trim().replaceAll(/[^A-Za-z0-9\"\:\{\}\[\]\.\,\/\\\_\-]/g, ''));
}

/**
 * Get the file location at the main branch of the repository.
*/
function getLocationURL(location: Location): string {
    const filename = location.filename;
    const start = filename.indexOf('/packages/');
    const componentPath = filename.slice(start, filename.length);
    const lineAndCol = `#L${location.line}:${location.col}`;

    return mainBranchURL + componentPath + lineAndCol;
}

function loadComponent(docElement: DocumentationObject): DocumentationComponent | null {
    if (
        docElement.declarationKind != 'export' ||
        docElement.name == "default" ||
        docElement.kind == 'import'
    ) {
        return null;
    }

    const url = getLocationURL(docElement.location);
    //const exp = parseDocumentationToExpression(docElement);
    return {
        expression: "",
        kind: docElement.kind,
        name: docElement.name,
        url: url
    };
}

/**
 * Parse the doc element to get the expression.
*/
function parseDocumentationToExpression(docElement: DocumentationObject): string {
    let parsed: string = '';

    if (docElement.kind === 'variable') {
        const varobj = docElement as VariableObject;
        // TODO: parse
    }

    return parsed;
}

/**
 * 
 * @param {any[]} docs - The docs.json file
 * @returns {{expression: string, kind: string, name: string, url: string}[]}
*/
function loadAllComponents(docs: DocumentationObject[]): DocumentationComponent[] {
    const arr: DocumentationComponent[] = [];

    docs.forEach(element => {
        const comp = loadComponent(element);
        
        if (comp) {
            arr.push(comp);
        }
    })

    return arr;
}

try {
    const docs = getDocs();
    const load = loadAllComponents(docs);

    console.log(load)
} catch(err) {
    throw new Error(err);
}