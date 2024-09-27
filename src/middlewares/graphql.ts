import type { ApolloServer, BaseContext } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import type { Request } from 'express';

const getTokenForRequest = (req: Request): Promise<Request["headers"]["authorization"]> => Promise.resolve(req.headers.authorization);

export const middleware = ({ apolloServer }: { apolloServer: ApolloServer<BaseContext> }) => {
    return expressMiddleware(apolloServer, {
        context: async ({ req }) => ({
            token: await getTokenForRequest(req),
        }),
    });
}
