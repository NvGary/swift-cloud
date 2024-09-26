import type { ApolloServer, BaseContext } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

export const middleware = ({ apolloServer }: { apolloServer: ApolloServer<BaseContext> }) => {
    return expressMiddleware(apolloServer);
}
