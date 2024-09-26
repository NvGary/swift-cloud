import { OGM, generate } from "@neo4j/graphql-ogm";
import * as neo4j from "neo4j-driver";
import * as path from "path";
import { NEO4J } from '../../src/secrets';
import { readFileSync } from 'fs';
import { ModelMap } from "../../src/graphql/types";

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

    console.log("Types Generated");

    process.exit(1);
}

main();
