import { OGM } from "@neo4j/graphql-ogm";

import { ModelMap, MonthlyPlaysForSongParams, SongAllPlaysConnection } from "../types";

const selectionSet = `
    {
        versions {
            name
        }
        allPlaysConnection {
            edges {
                properties {
                    totalPlays
                }
            }
        }
    }
`;

export default (ogm: OGM<ModelMap>) => async (_, args: { params: MonthlyPlaysForSongParams }) => {
    const songs = await ogm.model("Song").find({ where: { title: `${args.params.title}` }, selectionSet});
    const songPlays = songs.map(
        song => song.allPlaysConnection.edges.reduce(
            (
                (acc, edge: SongAllPlaysConnection["edges"][number]) => acc += Number(edge.properties.totalPlays)),
            0
        ));

    return {
        title: args.params.title,
        versionCount: songs.length,
        totalPlays: songPlays.reduce((acc, cur) => acc + cur, 0),
        playBreakdown: songs.map((song, index) => ({
            version: song.versions.map((v => v.name)),
            playCount: songPlays[index]
        }))
    }
}
