import { expressMiddleware } from '@apollo/server/express4';

export const middleware = ({ apolloServer }) => {
    return expressMiddleware(apolloServer);
}
