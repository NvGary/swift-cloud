import { generate, OGM } from "@neo4j/graphql-ogm";
import { readFileSync } from 'fs';
import * as neo4j from "neo4j-driver";
import * as path from "path";
import prependFile from 'prepend-file';

import type { ModelMap } from "../../src/graphql/types";
import { NEO4J } from '../../src/secrets';

const typeDefs = readFileSync('./src/graphql/schema.graphql', { encoding: 'utf-8' });
const driver = neo4j.driver(NEO4J.NEO4J_URI, neo4j.auth.basic(NEO4J.NEO4J_USERNAME, NEO4J.NEO4J_PASSWORD));

// Generic is applied on the OGM
const ogm = new OGM<ModelMap>({ typeDefs, driver });

async function main() {
    // Only generate types when you make a schema change
    const outFile = path.join("./src/graphql", "types.ts");

    await generate({
        ogm,
        outFile,
    });

    await prependFile(outFile, `// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// this file is auto-generated
// DO NOT edit contents directly as edits could be lost

`);

    console.log("Types Generated");

    process.exit(1);
}

void main();
