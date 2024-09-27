import type { ApolloServer } from '@apollo/server';

import { buildList } from '.';
import {middleware as graphqlHandler} from './graphql';

jest.mock('./graphql', () => ({
    middleware: jest.fn(),
}));

describe('middlewares', () => {
    it('returns a graphql midleware value', () => {
        const middlewares = buildList({ apolloServer: {} as ApolloServer});

        expect(middlewares).toContain(jest.mocked(graphqlHandler).mock.results[0].value);
    });

    afterEach(() => {
        jest.mocked(graphqlHandler).mockClear();
    });
});
