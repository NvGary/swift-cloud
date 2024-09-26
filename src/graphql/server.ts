import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { Neo4jGraphQL } from '@neo4j/graphql';
import { OGM } from "@neo4j/graphql-ogm";
import { readFileSync } from 'fs';
import type http from 'http';
import neo4j from 'neo4j-driver';

import { NEO4J } from '../secrets';
import monthlyPlaysForSongResolver from './resolvers/monthlyPlaysForSong';
import { ModelMap } from './types';

export async function init({ httpServer }: { httpServer: http.Server }) {
    // graphql
    const typeDefs = readFileSync('./src/graphql/schema.graphql', { encoding: 'utf-8' });

    // Init neo4j driver
    const driver = neo4j.driver(NEO4J.NEO4J_URI, neo4j.auth.basic(NEO4J.NEO4J_USERNAME, NEO4J.NEO4J_PASSWORD));
    const ogm = new OGM<ModelMap>({ typeDefs, driver });
    await ogm.init();

    const resolvers = {
        Query: {
            monthlyPlaysForSong: monthlyPlaysForSongResolver(ogm)
        },
    };
    const neoSchema = new Neo4jGraphQL({ typeDefs, driver, resolvers });
    const schema = await neoSchema.getSchema();

    // Init Apollo Server
    return new ApolloServer({
        schema,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });
}
