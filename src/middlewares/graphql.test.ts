import type { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

import { middleware } from './graphql';

jest.mock('@apollo/server/express4', () => ({
    expressMiddleware: jest.fn(),
}));

describe('middleware graphql', () => {
    describe('creation returns a middleware appropriate function', () => {
        it('returns an expressMiddleware value', () => {
            const fn = middleware({ apolloServer: {} as ApolloServer});

            expect(fn).toBe(jest.mocked(expressMiddleware).mock.results[0].value);
        });
    });

    afterEach(() => {
        jest.mocked(expressMiddleware).mockClear();
    });
});

