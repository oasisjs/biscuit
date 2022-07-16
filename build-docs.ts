/**
 * Deno command:
 *         | deno run --allow-all build-docs.ts
*/

// Imports
import { doc } from 'https://deno.land/x/deno_doc@0.38.0/mod.ts';

interface DocNodeProcessed {
    kind: string;
    name: string;
    url: string;
    rawURL: string;
    expression: string;
}

interface Location {
    filename: string;
    line: number;
    col: number;
}

const branchURL = 'https://github.com/oasisjs/biscuit/tree/main';
const rawBranchURL = 'https://raw.githubusercontent.com/oasisjs/biscuit/main';

/**
 * Returns a new javascript object with the docs.json file.
*/
function getDocs() {
    return doc(rawBranchURL + '/mod.ts');
}

/**
 * Get the file location at the main branch of the repository.
*/
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

// TODO: finish this
async function makeDocumentation() {
    const docs = await loadDocs();
    console.log(docs);
}

async function loadDocs(): Promise<DocNodeProcessed[]> {
    const docs = await getDocs();
    const arr: DocNodeProcessed[] = [];

    for (const node of docs) {
        if (node.declarationKind !== 'export' || node.name === 'default' || node.kind === 'import') {
            continue;
        }

        let element = '';

        switch (node.kind) {
            case 'variable':
                if (node.variableDef?.tsType === null) {
                    continue;
                }

                if (node?.variableDef) {
                    if (node?.variableDef?.kind) {
                        element += `${node?.variableDef?.kind} ${node.name}`;
                    }
                    
                    if (node?.variableDef.tsType) {
                        if (node?.variableDef?.tsType?.kind === 'literal') {
                            element += `: ${node?.variableDef?.tsType?.literal?.kind}`;
                        } else if (node?.variableDef?.tsType?.kind === 'typeRef') {
                            element += `: ${node?.variableDef?.tsType?.typeRef?.typeName}`;
                        } else {
                            element += `: ${node?.variableDef?.tsType?.repr}`;
                        }
                    }
                }

                arr.push({
                    kind: 'variable',
                    name: node.name,
                    url: getLocationURL(node.location),
                    rawURL: getLocationURL(node.location, 'raw'), 
                    expression: element,
                });
            break;
            case 'enum':
                element = `enum ${node.name}`;

                arr.push({
                    kind: 'enum',
                    name: node.name,
                    url: getLocationURL(node.location),
                    rawURL: getLocationURL(node.location, 'raw'), 
                    expression: element,
                });
            break;

            // TODO: classes, functions, interfaces.
        }
    }

    return arr;
}

makeDocumentation();