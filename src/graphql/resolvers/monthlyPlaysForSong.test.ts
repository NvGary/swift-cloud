import { OGM } from "@neo4j/graphql-ogm";

import type { ModelMap } from "../types";
import monthlyPlaysForSong from './monthlyPlaysForSong';

jest.mock('@neo4j/graphql-ogm', () => ({
    OGM: jest.fn(() => ({
        model: jest.fn(() => ({
            find: findSongs
        }))
    })),
}));

const findSongs = jest.fn();
const ogm = new OGM<ModelMap>({ typeDefs: "" });

const createSong = (versions: string[], [edgeCount1, edgeCount2]: number[]) => ({
    versions: versions.map(name => ({ name })),
    allPlaysConnection: {
        edges: [{ properties: { totalPlays: edgeCount1 }},
            { properties: { totalPlays: edgeCount2 }}
        ]}
    });

describe('resolver monthlyPlaysForSong creation', () => {
    it('creates a resolver function', () => {
        const resolver = monthlyPlaysForSong(ogm);
        expect(resolver).toBeInstanceOf(Function);
    });
});

describe('resolver monthlyPlaysForSong execution', () => {
    it('returns an object adhering to predefined structure', async () => {
        findSongs.mockResolvedValueOnce([createSong(['Live'], [1, 2]), createSong(['Cover'], [10, 20])]);

        const resolver = monthlyPlaysForSong(ogm);
        const data = resolver({}, { params: { title: 'blah' }});
        await expect(data).resolves.toEqual({
            title: 'blah',
            versionCount: 2,
            totalPlays: 33,
            playBreakdown: [
                { version: ['Live'], playCount: 3 },
                { version: ['Cover'], playCount: 30 }
            ]
        });
    });
});
