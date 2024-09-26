import { OGM } from "@neo4j/graphql-ogm";
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { Neo4jGraphQL } from '@neo4j/graphql';
import neo4j from 'neo4j-driver';
import { readFileSync } from 'fs';
import { NEO4J } from '../secrets';
import { ModelMap } from './types';
import monthlyPlaysForSongResolver from './resolvers/monthlyPlaysForSong';

export async function init({ httpServer }) {
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
