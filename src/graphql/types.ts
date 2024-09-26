// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// this file is auto-generated
// DO NOT edit contents directly as edits could be lost

import type { SelectionSetNode, DocumentNode } from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: { input: string; output: string };
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: { input: boolean; output: boolean };
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: { input: number; output: number };
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: { input: number; output: number };
  /** A BigInt value up to 64 bits in size, which can be a number or a string if used inline, or a string only if used as a variable. Always returned as a string. */
  BigInt: { input: any; output: any };
};

export type Query = {
  __typename?: "Query";
  monthlyPlaysForSong?: Maybe<MonthlyPlaysForSongResponse>;
  albums: Array<Album>;
  albumsConnection: AlbumsConnection;
  albumsAggregate: AlbumAggregateSelection;
  editions: Array<Edition>;
  editionsConnection: EditionsConnection;
  editionsAggregate: EditionAggregateSelection;
  people: Array<Person>;
  peopleConnection: PeopleConnection;
  peopleAggregate: PersonAggregateSelection;
  plays: Array<Play>;
  playsConnection: PlaysConnection;
  playsAggregate: PlayAggregateSelection;
  songs: Array<Song>;
  songsConnection: SongsConnection;
  songsAggregate: SongAggregateSelection;
  users: Array<User>;
  usersConnection: UsersConnection;
  usersAggregate: UserAggregateSelection;
  versions: Array<Version>;
  versionsConnection: VersionsConnection;
  versionsAggregate: VersionAggregateSelection;
  years: Array<Year>;
  yearsConnection: YearsConnection;
  yearsAggregate: YearAggregateSelection;
  playBreakdowns: Array<PlayBreakdown>;
  playBreakdownsConnection: PlayBreakdownsConnection;
  playBreakdownsAggregate: PlayBreakdownAggregateSelection;
  monthlyPlaysForSongResponses: Array<MonthlyPlaysForSongResponse>;
  monthlyPlaysForSongResponsesConnection: MonthlyPlaysForSongResponsesConnection;
  monthlyPlaysForSongResponsesAggregate: MonthlyPlaysForSongResponseAggregateSelection;
};

export type QueryMonthlyPlaysForSongArgs = {
  params?: InputMaybe<MonthlyPlaysForSongParams>;
};

export type QueryAlbumsArgs = {
  where?: InputMaybe<AlbumWhere>;
  options?: InputMaybe<AlbumOptions>;
};

export type QueryAlbumsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<AlbumWhere>;
  sort?: InputMaybe<Array<InputMaybe<AlbumSort>>>;
};

export type QueryAlbumsAggregateArgs = {
  where?: InputMaybe<AlbumWhere>;
};

export type QueryEditionsArgs = {
  where?: InputMaybe<EditionWhere>;
  options?: InputMaybe<EditionOptions>;
};

export type QueryEditionsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<EditionWhere>;
  sort?: InputMaybe<Array<InputMaybe<EditionSort>>>;
};

export type QueryEditionsAggregateArgs = {
  where?: InputMaybe<EditionWhere>;
};

export type QueryPeopleArgs = {
  where?: InputMaybe<PersonWhere>;
  options?: InputMaybe<PersonOptions>;
};

export type QueryPeopleConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<PersonWhere>;
  sort?: InputMaybe<Array<InputMaybe<PersonSort>>>;
};

export type QueryPeopleAggregateArgs = {
  where?: InputMaybe<PersonWhere>;
};

export type QueryPlaysArgs = {
  where?: InputMaybe<PlayWhere>;
  options?: InputMaybe<PlayOptions>;
};

export type QueryPlaysConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<PlayWhere>;
  sort?: InputMaybe<Array<InputMaybe<PlaySort>>>;
};

export type QueryPlaysAggregateArgs = {
  where?: InputMaybe<PlayWhere>;
};

export type QuerySongsArgs = {
  where?: InputMaybe<SongWhere>;
  options?: InputMaybe<SongOptions>;
};

export type QuerySongsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<SongWhere>;
  sort?: InputMaybe<Array<InputMaybe<SongSort>>>;
};

export type QuerySongsAggregateArgs = {
  where?: InputMaybe<SongWhere>;
};

export type QueryUsersArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
};

export type QueryUsersConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<UserWhere>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
};

export type QueryUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>;
};

export type QueryVersionsArgs = {
  where?: InputMaybe<VersionWhere>;
  options?: InputMaybe<VersionOptions>;
};

export type QueryVersionsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<VersionWhere>;
  sort?: InputMaybe<Array<InputMaybe<VersionSort>>>;
};

export type QueryVersionsAggregateArgs = {
  where?: InputMaybe<VersionWhere>;
};

export type QueryYearsArgs = {
  where?: InputMaybe<YearWhere>;
  options?: InputMaybe<YearOptions>;
};

export type QueryYearsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<YearWhere>;
  sort?: InputMaybe<Array<InputMaybe<YearSort>>>;
};

export type QueryYearsAggregateArgs = {
  where?: InputMaybe<YearWhere>;
};

export type QueryPlayBreakdownsArgs = {
  where?: InputMaybe<PlayBreakdownWhere>;
  options?: InputMaybe<PlayBreakdownOptions>;
};

export type QueryPlayBreakdownsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<PlayBreakdownWhere>;
  sort?: InputMaybe<Array<InputMaybe<PlayBreakdownSort>>>;
};

export type QueryPlayBreakdownsAggregateArgs = {
  where?: InputMaybe<PlayBreakdownWhere>;
};

export type QueryMonthlyPlaysForSongResponsesArgs = {
  where?: InputMaybe<MonthlyPlaysForSongResponseWhere>;
  options?: InputMaybe<MonthlyPlaysForSongResponseOptions>;
};

export type QueryMonthlyPlaysForSongResponsesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<MonthlyPlaysForSongResponseWhere>;
  sort?: InputMaybe<Array<InputMaybe<MonthlyPlaysForSongResponseSort>>>;
};

export type QueryMonthlyPlaysForSongResponsesAggregateArgs = {
  where?: InputMaybe<MonthlyPlaysForSongResponseWhere>;
};

export type Mutation = {
  __typename?: "Mutation";
  createAlbums: CreateAlbumsMutationResponse;
  deleteAlbums: DeleteInfo;
  updateAlbums: UpdateAlbumsMutationResponse;
  createEditions: CreateEditionsMutationResponse;
  deleteEditions: DeleteInfo;
  updateEditions: UpdateEditionsMutationResponse;
  createPeople: CreatePeopleMutationResponse;
  deletePeople: DeleteInfo;
  updatePeople: UpdatePeopleMutationResponse;
  createPlays: CreatePlaysMutationResponse;
  deletePlays: DeleteInfo;
  updatePlays: UpdatePlaysMutationResponse;
  createSongs: CreateSongsMutationResponse;
  deleteSongs: DeleteInfo;
  updateSongs: UpdateSongsMutationResponse;
  createUsers: CreateUsersMutationResponse;
  deleteUsers: DeleteInfo;
  updateUsers: UpdateUsersMutationResponse;
  createVersions: CreateVersionsMutationResponse;
  deleteVersions: DeleteInfo;
  updateVersions: UpdateVersionsMutationResponse;
  createYears: CreateYearsMutationResponse;
  deleteYears: DeleteInfo;
  updateYears: UpdateYearsMutationResponse;
  createPlayBreakdowns: CreatePlayBreakdownsMutationResponse;
  deletePlayBreakdowns: DeleteInfo;
  updatePlayBreakdowns: UpdatePlayBreakdownsMutationResponse;
  createMonthlyPlaysForSongResponses: CreateMonthlyPlaysForSongResponsesMutationResponse;
  deleteMonthlyPlaysForSongResponses: DeleteInfo;
  updateMonthlyPlaysForSongResponses: UpdateMonthlyPlaysForSongResponsesMutationResponse;
};

export type MutationCreateAlbumsArgs = {
  input: Array<AlbumCreateInput>;
};

export type MutationDeleteAlbumsArgs = {
  where?: InputMaybe<AlbumWhere>;
  delete?: InputMaybe<AlbumDeleteInput>;
};

export type MutationUpdateAlbumsArgs = {
  where?: InputMaybe<AlbumWhere>;
  update?: InputMaybe<AlbumUpdateInput>;
  connect?: InputMaybe<AlbumConnectInput>;
  disconnect?: InputMaybe<AlbumDisconnectInput>;
  create?: InputMaybe<AlbumRelationInput>;
  delete?: InputMaybe<AlbumDeleteInput>;
};

export type MutationCreateEditionsArgs = {
  input: Array<EditionCreateInput>;
};

export type MutationDeleteEditionsArgs = {
  where?: InputMaybe<EditionWhere>;
};

export type MutationUpdateEditionsArgs = {
  where?: InputMaybe<EditionWhere>;
  update?: InputMaybe<EditionUpdateInput>;
};

export type MutationCreatePeopleArgs = {
  input: Array<PersonCreateInput>;
};

export type MutationDeletePeopleArgs = {
  where?: InputMaybe<PersonWhere>;
  delete?: InputMaybe<PersonDeleteInput>;
};

export type MutationUpdatePeopleArgs = {
  where?: InputMaybe<PersonWhere>;
  update?: InputMaybe<PersonUpdateInput>;
  connect?: InputMaybe<PersonConnectInput>;
  disconnect?: InputMaybe<PersonDisconnectInput>;
  create?: InputMaybe<PersonRelationInput>;
  delete?: InputMaybe<PersonDeleteInput>;
};

export type MutationCreatePlaysArgs = {
  input: Array<PlayCreateInput>;
};

export type MutationDeletePlaysArgs = {
  where?: InputMaybe<PlayWhere>;
  delete?: InputMaybe<PlayDeleteInput>;
};

export type MutationUpdatePlaysArgs = {
  where?: InputMaybe<PlayWhere>;
  update?: InputMaybe<PlayUpdateInput>;
  connect?: InputMaybe<PlayConnectInput>;
  disconnect?: InputMaybe<PlayDisconnectInput>;
  create?: InputMaybe<PlayRelationInput>;
  delete?: InputMaybe<PlayDeleteInput>;
};

export type MutationCreateSongsArgs = {
  input: Array<SongCreateInput>;
};

export type MutationDeleteSongsArgs = {
  where?: InputMaybe<SongWhere>;
  delete?: InputMaybe<SongDeleteInput>;
};

export type MutationUpdateSongsArgs = {
  where?: InputMaybe<SongWhere>;
  update?: InputMaybe<SongUpdateInput>;
  connect?: InputMaybe<SongConnectInput>;
  disconnect?: InputMaybe<SongDisconnectInput>;
  create?: InputMaybe<SongRelationInput>;
  delete?: InputMaybe<SongDeleteInput>;
};

export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};

export type MutationDeleteUsersArgs = {
  where?: InputMaybe<UserWhere>;
};

export type MutationUpdateUsersArgs = {
  where?: InputMaybe<UserWhere>;
  update?: InputMaybe<UserUpdateInput>;
};

export type MutationCreateVersionsArgs = {
  input: Array<VersionCreateInput>;
};

export type MutationDeleteVersionsArgs = {
  where?: InputMaybe<VersionWhere>;
  delete?: InputMaybe<VersionDeleteInput>;
};

export type MutationUpdateVersionsArgs = {
  where?: InputMaybe<VersionWhere>;
  update?: InputMaybe<VersionUpdateInput>;
  connect?: InputMaybe<VersionConnectInput>;
  disconnect?: InputMaybe<VersionDisconnectInput>;
  create?: InputMaybe<VersionRelationInput>;
  delete?: InputMaybe<VersionDeleteInput>;
};

export type MutationCreateYearsArgs = {
  input: Array<YearCreateInput>;
};

export type MutationDeleteYearsArgs = {
  where?: InputMaybe<YearWhere>;
  delete?: InputMaybe<YearDeleteInput>;
};

export type MutationUpdateYearsArgs = {
  where?: InputMaybe<YearWhere>;
  update?: InputMaybe<YearUpdateInput>;
  connect?: InputMaybe<YearConnectInput>;
  disconnect?: InputMaybe<YearDisconnectInput>;
  create?: InputMaybe<YearRelationInput>;
  delete?: InputMaybe<YearDeleteInput>;
};

export type MutationCreatePlayBreakdownsArgs = {
  input: Array<PlayBreakdownCreateInput>;
};

export type MutationDeletePlayBreakdownsArgs = {
  where?: InputMaybe<PlayBreakdownWhere>;
};

export type MutationUpdatePlayBreakdownsArgs = {
  where?: InputMaybe<PlayBreakdownWhere>;
  update?: InputMaybe<PlayBreakdownUpdateInput>;
};

export type MutationCreateMonthlyPlaysForSongResponsesArgs = {
  input: Array<MonthlyPlaysForSongResponseCreateInput>;
};

export type MutationDeleteMonthlyPlaysForSongResponsesArgs = {
  where?: InputMaybe<MonthlyPlaysForSongResponseWhere>;
};

export type MutationUpdateMonthlyPlaysForSongResponsesArgs = {
  where?: InputMaybe<MonthlyPlaysForSongResponseWhere>;
  update?: InputMaybe<MonthlyPlaysForSongResponseUpdateInput>;
};

export enum EditionType {
  Platinum = "Platinum",
  Deluxe = "Deluxe",
  Physical = "Physical",
  Soundtrack = "Soundtrack",
}

/** An enum for sorting in either ascending or descending order. */
export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = "ASC",
  /** Sort by field values in descending order. */
  Desc = "DESC",
}

export enum VersionType {
  Album = "Album",
  Cover = "Cover",
  Live = "Live",
  Piano = "Piano",
  Remix = "Remix",
  Single = "Single",
}

export type Album = {
  __typename?: "Album";
  AlbumId: Scalars["BigInt"]["output"];
  title: Scalars["String"]["output"];
  tracksAggregate?: Maybe<AlbumSongTracksAggregationSelection>;
  tracks: Array<Song>;
  tracksConnection: AlbumTracksConnection;
  editionsAggregate?: Maybe<AlbumEditionEditionsAggregationSelection>;
  editions: Array<Edition>;
  editionsConnection: AlbumEditionsConnection;
};

export type AlbumTracksAggregateArgs = {
  where?: InputMaybe<SongWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AlbumTracksArgs = {
  where?: InputMaybe<SongWhere>;
  options?: InputMaybe<SongOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AlbumTracksConnectionArgs = {
  where?: InputMaybe<AlbumTracksConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<AlbumTracksConnectionSort>>;
};

export type AlbumEditionsAggregateArgs = {
  where?: InputMaybe<EditionWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AlbumEditionsArgs = {
  where?: InputMaybe<EditionWhere>;
  options?: InputMaybe<EditionOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AlbumEditionsConnectionArgs = {
  where?: InputMaybe<AlbumEditionsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<AlbumEditionsConnectionSort>>;
};

export type AlbumAggregateSelection = {
  __typename?: "AlbumAggregateSelection";
  count: Scalars["Int"]["output"];
  AlbumId: BigIntAggregateSelection;
  title: StringAggregateSelection;
};

export type AlbumEdge = {
  __typename?: "AlbumEdge";
  cursor: Scalars["String"]["output"];
  node: Album;
};

export type AlbumEditionEditionsAggregationSelection = {
  __typename?: "AlbumEditionEditionsAggregationSelection";
  count: Scalars["Int"]["output"];
};

export type AlbumEditionsConnection = {
  __typename?: "AlbumEditionsConnection";
  edges: Array<AlbumEditionsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type AlbumEditionsRelationship = {
  __typename?: "AlbumEditionsRelationship";
  cursor: Scalars["String"]["output"];
  node: Edition;
};

export type AlbumsConnection = {
  __typename?: "AlbumsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<AlbumEdge>;
};

export type AlbumSongTracksAggregationSelection = {
  __typename?: "AlbumSongTracksAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<AlbumSongTracksNodeAggregateSelection>;
};

export type AlbumSongTracksNodeAggregateSelection = {
  __typename?: "AlbumSongTracksNodeAggregateSelection";
  SongId: BigIntAggregateSelection;
  title: StringAggregateSelection;
};

export type AlbumTracksConnection = {
  __typename?: "AlbumTracksConnection";
  edges: Array<AlbumTracksRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type AlbumTracksRelationship = {
  __typename?: "AlbumTracksRelationship";
  cursor: Scalars["String"]["output"];
  node: Song;
};

export type BigIntAggregateSelection = {
  __typename?: "BigIntAggregateSelection";
  max?: Maybe<Scalars["BigInt"]["output"]>;
  min?: Maybe<Scalars["BigInt"]["output"]>;
  average?: Maybe<Scalars["BigInt"]["output"]>;
  sum?: Maybe<Scalars["BigInt"]["output"]>;
};

export type CreateAlbumsMutationResponse = {
  __typename?: "CreateAlbumsMutationResponse";
  info: CreateInfo;
  albums: Array<Album>;
};

export type CreateEditionsMutationResponse = {
  __typename?: "CreateEditionsMutationResponse";
  info: CreateInfo;
  editions: Array<Edition>;
};

/** Information about the number of nodes and relationships created during a create mutation */
export type CreateInfo = {
  __typename?: "CreateInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesCreated: Scalars["Int"]["output"];
  relationshipsCreated: Scalars["Int"]["output"];
};

export type CreateMonthlyPlaysForSongResponsesMutationResponse = {
  __typename?: "CreateMonthlyPlaysForSongResponsesMutationResponse";
  info: CreateInfo;
  monthlyPlaysForSongResponses: Array<MonthlyPlaysForSongResponse>;
};

export type CreatePeopleMutationResponse = {
  __typename?: "CreatePeopleMutationResponse";
  info: CreateInfo;
  people: Array<Person>;
};

export type CreatePlayBreakdownsMutationResponse = {
  __typename?: "CreatePlayBreakdownsMutationResponse";
  info: CreateInfo;
  playBreakdowns: Array<PlayBreakdown>;
};

export type CreatePlaysMutationResponse = {
  __typename?: "CreatePlaysMutationResponse";
  info: CreateInfo;
  plays: Array<Play>;
};

export type CreateSongsMutationResponse = {
  __typename?: "CreateSongsMutationResponse";
  info: CreateInfo;
  songs: Array<Song>;
};

export type CreateUsersMutationResponse = {
  __typename?: "CreateUsersMutationResponse";
  info: CreateInfo;
  users: Array<User>;
};

export type CreateVersionsMutationResponse = {
  __typename?: "CreateVersionsMutationResponse";
  info: CreateInfo;
  versions: Array<Version>;
};

export type CreateYearsMutationResponse = {
  __typename?: "CreateYearsMutationResponse";
  info: CreateInfo;
  years: Array<Year>;
};

/** Information about the number of nodes and relationships deleted during a delete mutation */
export type DeleteInfo = {
  __typename?: "DeleteInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesDeleted: Scalars["Int"]["output"];
  relationshipsDeleted: Scalars["Int"]["output"];
};

export type Edition = {
  __typename?: "Edition";
  name: EditionType;
};

export type EditionAggregateSelection = {
  __typename?: "EditionAggregateSelection";
  count: Scalars["Int"]["output"];
};

export type EditionEdge = {
  __typename?: "EditionEdge";
  cursor: Scalars["String"]["output"];
  node: Edition;
};

export type EditionsConnection = {
  __typename?: "EditionsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<EditionEdge>;
};

export type MonthlyPlaysForSongResponse = {
  __typename?: "MonthlyPlaysForSongResponse";
  title: Scalars["String"]["output"];
  versionCount: Scalars["BigInt"]["output"];
  totalPlays: Scalars["BigInt"]["output"];
  playBreakdown: Array<PlayBreakdown>;
};

export type MonthlyPlaysForSongResponseAggregateSelection = {
  __typename?: "MonthlyPlaysForSongResponseAggregateSelection";
  count: Scalars["Int"]["output"];
  title: StringAggregateSelection;
  versionCount: BigIntAggregateSelection;
  totalPlays: BigIntAggregateSelection;
};

export type MonthlyPlaysForSongResponseEdge = {
  __typename?: "MonthlyPlaysForSongResponseEdge";
  cursor: Scalars["String"]["output"];
  node: MonthlyPlaysForSongResponse;
};

export type MonthlyPlaysForSongResponsesConnection = {
  __typename?: "MonthlyPlaysForSongResponsesConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<MonthlyPlaysForSongResponseEdge>;
};

/**
 * The edge properties for the following fields:
 * * Play.song
 * * Song.allPlays
 */
export type MonthlyPlaysProperties = {
  __typename?: "MonthlyPlaysProperties";
  totalPlays: Scalars["BigInt"]["output"];
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: "PageInfo";
  hasNextPage: Scalars["Boolean"]["output"];
  hasPreviousPage: Scalars["Boolean"]["output"];
  startCursor?: Maybe<Scalars["String"]["output"]>;
  endCursor?: Maybe<Scalars["String"]["output"]>;
};

export type PeopleConnection = {
  __typename?: "PeopleConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<PersonEdge>;
};

export type Person = {
  __typename?: "Person";
  name: Scalars["String"]["output"];
  singsAggregate?: Maybe<PersonSongSingsAggregationSelection>;
  sings: Array<Song>;
  singsConnection: PersonSingsConnection;
  featuredInAggregate?: Maybe<PersonSongFeaturedInAggregationSelection>;
  featuredIn: Array<Song>;
  featuredInConnection: PersonFeaturedInConnection;
  composedAggregate?: Maybe<PersonSongComposedAggregationSelection>;
  composed: Array<Song>;
  composedConnection: PersonComposedConnection;
};

export type PersonSingsAggregateArgs = {
  where?: InputMaybe<SongWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PersonSingsArgs = {
  where?: InputMaybe<SongWhere>;
  options?: InputMaybe<SongOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PersonSingsConnectionArgs = {
  where?: InputMaybe<PersonSingsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<PersonSingsConnectionSort>>;
};

export type PersonFeaturedInAggregateArgs = {
  where?: InputMaybe<SongWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PersonFeaturedInArgs = {
  where?: InputMaybe<SongWhere>;
  options?: InputMaybe<SongOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PersonFeaturedInConnectionArgs = {
  where?: InputMaybe<PersonFeaturedInConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<PersonFeaturedInConnectionSort>>;
};

export type PersonComposedAggregateArgs = {
  where?: InputMaybe<SongWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PersonComposedArgs = {
  where?: InputMaybe<SongWhere>;
  options?: InputMaybe<SongOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PersonComposedConnectionArgs = {
  where?: InputMaybe<PersonComposedConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<PersonComposedConnectionSort>>;
};

export type PersonAggregateSelection = {
  __typename?: "PersonAggregateSelection";
  count: Scalars["Int"]["output"];
  name: StringAggregateSelection;
};

export type PersonComposedConnection = {
  __typename?: "PersonComposedConnection";
  edges: Array<PersonComposedRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type PersonComposedRelationship = {
  __typename?: "PersonComposedRelationship";
  cursor: Scalars["String"]["output"];
  node: Song;
};

export type PersonEdge = {
  __typename?: "PersonEdge";
  cursor: Scalars["String"]["output"];
  node: Person;
};

export type PersonFeaturedInConnection = {
  __typename?: "PersonFeaturedInConnection";
  edges: Array<PersonFeaturedInRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type PersonFeaturedInRelationship = {
  __typename?: "PersonFeaturedInRelationship";
  cursor: Scalars["String"]["output"];
  node: Song;
};

export type PersonSingsConnection = {
  __typename?: "PersonSingsConnection";
  edges: Array<PersonSingsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type PersonSingsRelationship = {
  __typename?: "PersonSingsRelationship";
  cursor: Scalars["String"]["output"];
  node: Song;
};

export type PersonSongComposedAggregationSelection = {
  __typename?: "PersonSongComposedAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<PersonSongComposedNodeAggregateSelection>;
};

export type PersonSongComposedNodeAggregateSelection = {
  __typename?: "PersonSongComposedNodeAggregateSelection";
  SongId: BigIntAggregateSelection;
  title: StringAggregateSelection;
};

export type PersonSongFeaturedInAggregationSelection = {
  __typename?: "PersonSongFeaturedInAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<PersonSongFeaturedInNodeAggregateSelection>;
};

export type PersonSongFeaturedInNodeAggregateSelection = {
  __typename?: "PersonSongFeaturedInNodeAggregateSelection";
  SongId: BigIntAggregateSelection;
  title: StringAggregateSelection;
};

export type PersonSongSingsAggregationSelection = {
  __typename?: "PersonSongSingsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<PersonSongSingsNodeAggregateSelection>;
};

export type PersonSongSingsNodeAggregateSelection = {
  __typename?: "PersonSongSingsNodeAggregateSelection";
  SongId: BigIntAggregateSelection;
  title: StringAggregateSelection;
};

export type Play = {
  __typename?: "Play";
  month: Scalars["String"]["output"];
  songAggregate?: Maybe<PlaySongSongAggregationSelection>;
  song: Array<Song>;
  songConnection: PlaySongConnection;
};

export type PlaySongAggregateArgs = {
  where?: InputMaybe<SongWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PlaySongArgs = {
  where?: InputMaybe<SongWhere>;
  options?: InputMaybe<SongOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PlaySongConnectionArgs = {
  where?: InputMaybe<PlaySongConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<PlaySongConnectionSort>>;
};

export type PlayAggregateSelection = {
  __typename?: "PlayAggregateSelection";
  count: Scalars["Int"]["output"];
  month: StringAggregateSelection;
};

export type PlayBreakdown = {
  __typename?: "PlayBreakdown";
  version: Array<VersionType>;
  playCount: Scalars["BigInt"]["output"];
};

export type PlayBreakdownAggregateSelection = {
  __typename?: "PlayBreakdownAggregateSelection";
  count: Scalars["Int"]["output"];
  playCount: BigIntAggregateSelection;
};

export type PlayBreakdownEdge = {
  __typename?: "PlayBreakdownEdge";
  cursor: Scalars["String"]["output"];
  node: PlayBreakdown;
};

export type PlayBreakdownsConnection = {
  __typename?: "PlayBreakdownsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<PlayBreakdownEdge>;
};

export type PlayEdge = {
  __typename?: "PlayEdge";
  cursor: Scalars["String"]["output"];
  node: Play;
};

export type PlaysConnection = {
  __typename?: "PlaysConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<PlayEdge>;
};

export type PlaySongConnection = {
  __typename?: "PlaySongConnection";
  edges: Array<PlaySongRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type PlaySongRelationship = {
  __typename?: "PlaySongRelationship";
  cursor: Scalars["String"]["output"];
  node: Song;
  properties: MonthlyPlaysProperties;
};

export type PlaySongSongAggregationSelection = {
  __typename?: "PlaySongSongAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<PlaySongSongNodeAggregateSelection>;
  edge?: Maybe<PlaySongSongEdgeAggregateSelection>;
};

export type PlaySongSongEdgeAggregateSelection = {
  __typename?: "PlaySongSongEdgeAggregateSelection";
  totalPlays: BigIntAggregateSelection;
};

export type PlaySongSongNodeAggregateSelection = {
  __typename?: "PlaySongSongNodeAggregateSelection";
  SongId: BigIntAggregateSelection;
  title: StringAggregateSelection;
};

export type Song = {
  __typename?: "Song";
  SongId: Scalars["BigInt"]["output"];
  title: Scalars["String"]["output"];
  monthlyPlays: Scalars["BigInt"]["output"];
  albumAggregate?: Maybe<SongAlbumAlbumAggregationSelection>;
  album: Array<Album>;
  albumConnection: SongAlbumConnection;
  featuresAggregate?: Maybe<SongPersonFeaturesAggregationSelection>;
  features: Array<Person>;
  featuresConnection: SongFeaturesConnection;
  versionsAggregate?: Maybe<SongVersionVersionsAggregationSelection>;
  versions: Array<Version>;
  versionsConnection: SongVersionsConnection;
  composedByAggregate?: Maybe<SongPersonComposedByAggregationSelection>;
  composedBy: Array<Person>;
  composedByConnection: SongComposedByConnection;
  allPlaysAggregate?: Maybe<SongPlayAllPlaysAggregationSelection>;
  allPlays: Array<Play>;
  allPlaysConnection: SongAllPlaysConnection;
  singersAggregate?: Maybe<SongPersonSingersAggregationSelection>;
  singers: Array<Person>;
  singersConnection: SongSingersConnection;
  yearReleasedAggregate?: Maybe<SongYearYearReleasedAggregationSelection>;
  yearReleased: Array<Year>;
  yearReleasedConnection: SongYearReleasedConnection;
};

export type SongAlbumAggregateArgs = {
  where?: InputMaybe<AlbumWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SongAlbumArgs = {
  where?: InputMaybe<AlbumWhere>;
  options?: InputMaybe<AlbumOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SongAlbumConnectionArgs = {
  where?: InputMaybe<SongAlbumConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<SongAlbumConnectionSort>>;
};

export type SongFeaturesAggregateArgs = {
  where?: InputMaybe<PersonWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SongFeaturesArgs = {
  where?: InputMaybe<PersonWhere>;
  options?: InputMaybe<PersonOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SongFeaturesConnectionArgs = {
  where?: InputMaybe<SongFeaturesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<SongFeaturesConnectionSort>>;
};

export type SongVersionsAggregateArgs = {
  where?: InputMaybe<VersionWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SongVersionsArgs = {
  where?: InputMaybe<VersionWhere>;
  options?: InputMaybe<VersionOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SongVersionsConnectionArgs = {
  where?: InputMaybe<SongVersionsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<SongVersionsConnectionSort>>;
};

export type SongComposedByAggregateArgs = {
  where?: InputMaybe<PersonWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SongComposedByArgs = {
  where?: InputMaybe<PersonWhere>;
  options?: InputMaybe<PersonOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SongComposedByConnectionArgs = {
  where?: InputMaybe<SongComposedByConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<SongComposedByConnectionSort>>;
};

export type SongAllPlaysAggregateArgs = {
  where?: InputMaybe<PlayWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SongAllPlaysArgs = {
  where?: InputMaybe<PlayWhere>;
  options?: InputMaybe<PlayOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SongAllPlaysConnectionArgs = {
  where?: InputMaybe<SongAllPlaysConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<SongAllPlaysConnectionSort>>;
};

export type SongSingersAggregateArgs = {
  where?: InputMaybe<PersonWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SongSingersArgs = {
  where?: InputMaybe<PersonWhere>;
  options?: InputMaybe<PersonOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SongSingersConnectionArgs = {
  where?: InputMaybe<SongSingersConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<SongSingersConnectionSort>>;
};

export type SongYearReleasedAggregateArgs = {
  where?: InputMaybe<YearWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SongYearReleasedArgs = {
  where?: InputMaybe<YearWhere>;
  options?: InputMaybe<YearOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SongYearReleasedConnectionArgs = {
  where?: InputMaybe<SongYearReleasedConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<SongYearReleasedConnectionSort>>;
};

export type SongAggregateSelection = {
  __typename?: "SongAggregateSelection";
  count: Scalars["Int"]["output"];
  SongId: BigIntAggregateSelection;
  title: StringAggregateSelection;
};

export type SongAlbumAlbumAggregationSelection = {
  __typename?: "SongAlbumAlbumAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<SongAlbumAlbumNodeAggregateSelection>;
};

export type SongAlbumAlbumNodeAggregateSelection = {
  __typename?: "SongAlbumAlbumNodeAggregateSelection";
  AlbumId: BigIntAggregateSelection;
  title: StringAggregateSelection;
};

export type SongAlbumConnection = {
  __typename?: "SongAlbumConnection";
  edges: Array<SongAlbumRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type SongAlbumRelationship = {
  __typename?: "SongAlbumRelationship";
  cursor: Scalars["String"]["output"];
  node: Album;
};

export type SongAllPlaysConnection = {
  __typename?: "SongAllPlaysConnection";
  edges: Array<SongAllPlaysRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type SongAllPlaysRelationship = {
  __typename?: "SongAllPlaysRelationship";
  cursor: Scalars["String"]["output"];
  node: Play;
  properties: MonthlyPlaysProperties;
};

export type SongComposedByConnection = {
  __typename?: "SongComposedByConnection";
  edges: Array<SongComposedByRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type SongComposedByRelationship = {
  __typename?: "SongComposedByRelationship";
  cursor: Scalars["String"]["output"];
  node: Person;
};

export type SongEdge = {
  __typename?: "SongEdge";
  cursor: Scalars["String"]["output"];
  node: Song;
};

export type SongFeaturesConnection = {
  __typename?: "SongFeaturesConnection";
  edges: Array<SongFeaturesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type SongFeaturesRelationship = {
  __typename?: "SongFeaturesRelationship";
  cursor: Scalars["String"]["output"];
  node: Person;
};

export type SongPersonComposedByAggregationSelection = {
  __typename?: "SongPersonComposedByAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<SongPersonComposedByNodeAggregateSelection>;
};

export type SongPersonComposedByNodeAggregateSelection = {
  __typename?: "SongPersonComposedByNodeAggregateSelection";
  name: StringAggregateSelection;
};

export type SongPersonFeaturesAggregationSelection = {
  __typename?: "SongPersonFeaturesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<SongPersonFeaturesNodeAggregateSelection>;
};

export type SongPersonFeaturesNodeAggregateSelection = {
  __typename?: "SongPersonFeaturesNodeAggregateSelection";
  name: StringAggregateSelection;
};

export type SongPersonSingersAggregationSelection = {
  __typename?: "SongPersonSingersAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<SongPersonSingersNodeAggregateSelection>;
};

export type SongPersonSingersNodeAggregateSelection = {
  __typename?: "SongPersonSingersNodeAggregateSelection";
  name: StringAggregateSelection;
};

export type SongPlayAllPlaysAggregationSelection = {
  __typename?: "SongPlayAllPlaysAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<SongPlayAllPlaysNodeAggregateSelection>;
  edge?: Maybe<SongPlayAllPlaysEdgeAggregateSelection>;
};

export type SongPlayAllPlaysEdgeAggregateSelection = {
  __typename?: "SongPlayAllPlaysEdgeAggregateSelection";
  totalPlays: BigIntAggregateSelection;
};

export type SongPlayAllPlaysNodeAggregateSelection = {
  __typename?: "SongPlayAllPlaysNodeAggregateSelection";
  month: StringAggregateSelection;
};

export type SongsConnection = {
  __typename?: "SongsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<SongEdge>;
};

export type SongSingersConnection = {
  __typename?: "SongSingersConnection";
  edges: Array<SongSingersRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type SongSingersRelationship = {
  __typename?: "SongSingersRelationship";
  cursor: Scalars["String"]["output"];
  node: Person;
};

export type SongVersionsConnection = {
  __typename?: "SongVersionsConnection";
  edges: Array<SongVersionsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type SongVersionsRelationship = {
  __typename?: "SongVersionsRelationship";
  cursor: Scalars["String"]["output"];
  node: Version;
};

export type SongVersionVersionsAggregationSelection = {
  __typename?: "SongVersionVersionsAggregationSelection";
  count: Scalars["Int"]["output"];
};

export type SongYearReleasedConnection = {
  __typename?: "SongYearReleasedConnection";
  edges: Array<SongYearReleasedRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type SongYearReleasedRelationship = {
  __typename?: "SongYearReleasedRelationship";
  cursor: Scalars["String"]["output"];
  node: Year;
};

export type SongYearYearReleasedAggregationSelection = {
  __typename?: "SongYearYearReleasedAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<SongYearYearReleasedNodeAggregateSelection>;
};

export type SongYearYearReleasedNodeAggregateSelection = {
  __typename?: "SongYearYearReleasedNodeAggregateSelection";
  year: BigIntAggregateSelection;
};

export type StringAggregateSelection = {
  __typename?: "StringAggregateSelection";
  shortest?: Maybe<Scalars["String"]["output"]>;
  longest?: Maybe<Scalars["String"]["output"]>;
};

export type UpdateAlbumsMutationResponse = {
  __typename?: "UpdateAlbumsMutationResponse";
  info: UpdateInfo;
  albums: Array<Album>;
};

export type UpdateEditionsMutationResponse = {
  __typename?: "UpdateEditionsMutationResponse";
  info: UpdateInfo;
  editions: Array<Edition>;
};

/** Information about the number of nodes and relationships created and deleted during an update mutation */
export type UpdateInfo = {
  __typename?: "UpdateInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesCreated: Scalars["Int"]["output"];
  nodesDeleted: Scalars["Int"]["output"];
  relationshipsCreated: Scalars["Int"]["output"];
  relationshipsDeleted: Scalars["Int"]["output"];
};

export type UpdateMonthlyPlaysForSongResponsesMutationResponse = {
  __typename?: "UpdateMonthlyPlaysForSongResponsesMutationResponse";
  info: UpdateInfo;
  monthlyPlaysForSongResponses: Array<MonthlyPlaysForSongResponse>;
};

export type UpdatePeopleMutationResponse = {
  __typename?: "UpdatePeopleMutationResponse";
  info: UpdateInfo;
  people: Array<Person>;
};

export type UpdatePlayBreakdownsMutationResponse = {
  __typename?: "UpdatePlayBreakdownsMutationResponse";
  info: UpdateInfo;
  playBreakdowns: Array<PlayBreakdown>;
};

export type UpdatePlaysMutationResponse = {
  __typename?: "UpdatePlaysMutationResponse";
  info: UpdateInfo;
  plays: Array<Play>;
};

export type UpdateSongsMutationResponse = {
  __typename?: "UpdateSongsMutationResponse";
  info: UpdateInfo;
  songs: Array<Song>;
};

export type UpdateUsersMutationResponse = {
  __typename?: "UpdateUsersMutationResponse";
  info: UpdateInfo;
  users: Array<User>;
};

export type UpdateVersionsMutationResponse = {
  __typename?: "UpdateVersionsMutationResponse";
  info: UpdateInfo;
  versions: Array<Version>;
};

export type UpdateYearsMutationResponse = {
  __typename?: "UpdateYearsMutationResponse";
  info: UpdateInfo;
  years: Array<Year>;
};

export type User = {
  __typename?: "User";
  username: Scalars["String"]["output"];
};

export type UserAggregateSelection = {
  __typename?: "UserAggregateSelection";
  count: Scalars["Int"]["output"];
  username: StringAggregateSelection;
};

export type UserEdge = {
  __typename?: "UserEdge";
  cursor: Scalars["String"]["output"];
  node: User;
};

export type UsersConnection = {
  __typename?: "UsersConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<UserEdge>;
};

export type Version = {
  __typename?: "Version";
  name: VersionType;
  songsAggregate?: Maybe<VersionSongSongsAggregationSelection>;
  songs: Array<Song>;
  songsConnection: VersionSongsConnection;
};

export type VersionSongsAggregateArgs = {
  where?: InputMaybe<SongWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type VersionSongsArgs = {
  where?: InputMaybe<SongWhere>;
  options?: InputMaybe<SongOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type VersionSongsConnectionArgs = {
  where?: InputMaybe<VersionSongsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<VersionSongsConnectionSort>>;
};

export type VersionAggregateSelection = {
  __typename?: "VersionAggregateSelection";
  count: Scalars["Int"]["output"];
};

export type VersionEdge = {
  __typename?: "VersionEdge";
  cursor: Scalars["String"]["output"];
  node: Version;
};

export type VersionsConnection = {
  __typename?: "VersionsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<VersionEdge>;
};

export type VersionSongsConnection = {
  __typename?: "VersionSongsConnection";
  edges: Array<VersionSongsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type VersionSongSongsAggregationSelection = {
  __typename?: "VersionSongSongsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<VersionSongSongsNodeAggregateSelection>;
};

export type VersionSongSongsNodeAggregateSelection = {
  __typename?: "VersionSongSongsNodeAggregateSelection";
  SongId: BigIntAggregateSelection;
  title: StringAggregateSelection;
};

export type VersionSongsRelationship = {
  __typename?: "VersionSongsRelationship";
  cursor: Scalars["String"]["output"];
  node: Song;
};

export type Year = {
  __typename?: "Year";
  year: Scalars["BigInt"]["output"];
  songsAggregate?: Maybe<YearSongSongsAggregationSelection>;
  songs: Array<Song>;
  songsConnection: YearSongsConnection;
};

export type YearSongsAggregateArgs = {
  where?: InputMaybe<SongWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type YearSongsArgs = {
  where?: InputMaybe<SongWhere>;
  options?: InputMaybe<SongOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type YearSongsConnectionArgs = {
  where?: InputMaybe<YearSongsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<YearSongsConnectionSort>>;
};

export type YearAggregateSelection = {
  __typename?: "YearAggregateSelection";
  count: Scalars["Int"]["output"];
  year: BigIntAggregateSelection;
};

export type YearEdge = {
  __typename?: "YearEdge";
  cursor: Scalars["String"]["output"];
  node: Year;
};

export type YearsConnection = {
  __typename?: "YearsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<YearEdge>;
};

export type YearSongsConnection = {
  __typename?: "YearSongsConnection";
  edges: Array<YearSongsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type YearSongSongsAggregationSelection = {
  __typename?: "YearSongSongsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<YearSongSongsNodeAggregateSelection>;
};

export type YearSongSongsNodeAggregateSelection = {
  __typename?: "YearSongSongsNodeAggregateSelection";
  SongId: BigIntAggregateSelection;
  title: StringAggregateSelection;
};

export type YearSongsRelationship = {
  __typename?: "YearSongsRelationship";
  cursor: Scalars["String"]["output"];
  node: Song;
};

export type AlbumConnectInput = {
  tracks?: InputMaybe<Array<AlbumTracksConnectFieldInput>>;
  editions?: InputMaybe<Array<AlbumEditionsConnectFieldInput>>;
};

export type AlbumConnectWhere = {
  node: AlbumWhere;
};

export type AlbumCreateInput = {
  AlbumId: Scalars["BigInt"]["input"];
  title: Scalars["String"]["input"];
  tracks?: InputMaybe<AlbumTracksFieldInput>;
  editions?: InputMaybe<AlbumEditionsFieldInput>;
};

export type AlbumDeleteInput = {
  tracks?: InputMaybe<Array<AlbumTracksDeleteFieldInput>>;
  editions?: InputMaybe<Array<AlbumEditionsDeleteFieldInput>>;
};

export type AlbumDisconnectInput = {
  tracks?: InputMaybe<Array<AlbumTracksDisconnectFieldInput>>;
  editions?: InputMaybe<Array<AlbumEditionsDisconnectFieldInput>>;
};

export type AlbumEditionsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<AlbumEditionsAggregateInput>>;
  OR?: InputMaybe<Array<AlbumEditionsAggregateInput>>;
  NOT?: InputMaybe<AlbumEditionsAggregateInput>;
};

export type AlbumEditionsConnectFieldInput = {
  where?: InputMaybe<EditionConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type AlbumEditionsConnectionSort = {
  node?: InputMaybe<EditionSort>;
};

export type AlbumEditionsConnectionWhere = {
  AND?: InputMaybe<Array<AlbumEditionsConnectionWhere>>;
  OR?: InputMaybe<Array<AlbumEditionsConnectionWhere>>;
  NOT?: InputMaybe<AlbumEditionsConnectionWhere>;
  node?: InputMaybe<EditionWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<EditionWhere>;
};

export type AlbumEditionsCreateFieldInput = {
  node: EditionCreateInput;
};

export type AlbumEditionsDeleteFieldInput = {
  where?: InputMaybe<AlbumEditionsConnectionWhere>;
};

export type AlbumEditionsDisconnectFieldInput = {
  where?: InputMaybe<AlbumEditionsConnectionWhere>;
};

export type AlbumEditionsFieldInput = {
  connect?: InputMaybe<Array<AlbumEditionsConnectFieldInput>>;
  create?: InputMaybe<Array<AlbumEditionsCreateFieldInput>>;
};

export type AlbumEditionsUpdateConnectionInput = {
  node?: InputMaybe<EditionUpdateInput>;
};

export type AlbumEditionsUpdateFieldInput = {
  where?: InputMaybe<AlbumEditionsConnectionWhere>;
  connect?: InputMaybe<Array<AlbumEditionsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<AlbumEditionsDisconnectFieldInput>>;
  create?: InputMaybe<Array<AlbumEditionsCreateFieldInput>>;
  update?: InputMaybe<AlbumEditionsUpdateConnectionInput>;
  delete?: InputMaybe<Array<AlbumEditionsDeleteFieldInput>>;
};

export type AlbumOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more AlbumSort objects to sort Albums by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<AlbumSort>>;
};

export type AlbumRelationInput = {
  tracks?: InputMaybe<Array<AlbumTracksCreateFieldInput>>;
  editions?: InputMaybe<Array<AlbumEditionsCreateFieldInput>>;
};

/** Fields to sort Albums by. The order in which sorts are applied is not guaranteed when specifying many fields in one AlbumSort object. */
export type AlbumSort = {
  AlbumId?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
};

export type AlbumTracksAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<AlbumTracksAggregateInput>>;
  OR?: InputMaybe<Array<AlbumTracksAggregateInput>>;
  NOT?: InputMaybe<AlbumTracksAggregateInput>;
  node?: InputMaybe<AlbumTracksNodeAggregationWhereInput>;
};

export type AlbumTracksConnectFieldInput = {
  where?: InputMaybe<SongConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<SongConnectInput>>;
};

export type AlbumTracksConnectionSort = {
  node?: InputMaybe<SongSort>;
};

export type AlbumTracksConnectionWhere = {
  AND?: InputMaybe<Array<AlbumTracksConnectionWhere>>;
  OR?: InputMaybe<Array<AlbumTracksConnectionWhere>>;
  NOT?: InputMaybe<AlbumTracksConnectionWhere>;
  node?: InputMaybe<SongWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<SongWhere>;
};

export type AlbumTracksCreateFieldInput = {
  node: SongCreateInput;
};

export type AlbumTracksDeleteFieldInput = {
  where?: InputMaybe<AlbumTracksConnectionWhere>;
  delete?: InputMaybe<SongDeleteInput>;
};

export type AlbumTracksDisconnectFieldInput = {
  where?: InputMaybe<AlbumTracksConnectionWhere>;
  disconnect?: InputMaybe<SongDisconnectInput>;
};

export type AlbumTracksFieldInput = {
  connect?: InputMaybe<Array<AlbumTracksConnectFieldInput>>;
  create?: InputMaybe<Array<AlbumTracksCreateFieldInput>>;
};

export type AlbumTracksNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AlbumTracksNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<AlbumTracksNodeAggregationWhereInput>>;
  NOT?: InputMaybe<AlbumTracksNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  SongId_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MIN_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MAX_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_SUM_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_AVERAGE_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  SongId_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MIN_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MAX_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_SUM_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_AVERAGE_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  SongId_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MIN_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MAX_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_SUM_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_AVERAGE_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  SongId_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MIN_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MAX_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_SUM_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_AVERAGE_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  SongId_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MIN_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MAX_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_SUM_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_AVERAGE_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AlbumTracksUpdateConnectionInput = {
  node?: InputMaybe<SongUpdateInput>;
};

export type AlbumTracksUpdateFieldInput = {
  where?: InputMaybe<AlbumTracksConnectionWhere>;
  connect?: InputMaybe<Array<AlbumTracksConnectFieldInput>>;
  disconnect?: InputMaybe<Array<AlbumTracksDisconnectFieldInput>>;
  create?: InputMaybe<Array<AlbumTracksCreateFieldInput>>;
  update?: InputMaybe<AlbumTracksUpdateConnectionInput>;
  delete?: InputMaybe<Array<AlbumTracksDeleteFieldInput>>;
};

export type AlbumUpdateInput = {
  AlbumId?: InputMaybe<Scalars["BigInt"]["input"]>;
  AlbumId_INCREMENT?: InputMaybe<Scalars["BigInt"]["input"]>;
  AlbumId_DECREMENT?: InputMaybe<Scalars["BigInt"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  tracks?: InputMaybe<Array<AlbumTracksUpdateFieldInput>>;
  editions?: InputMaybe<Array<AlbumEditionsUpdateFieldInput>>;
};

export type AlbumWhere = {
  AlbumId?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  AlbumId_NOT?: InputMaybe<Scalars["BigInt"]["input"]>;
  AlbumId_IN?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  AlbumId_NOT_IN?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  AlbumId_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  AlbumId_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  AlbumId_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  AlbumId_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT?: InputMaybe<Scalars["String"]["input"]>;
  title_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  title_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  title_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  title_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<AlbumWhere>>;
  AND?: InputMaybe<Array<AlbumWhere>>;
  NOT?: InputMaybe<AlbumWhere>;
  /** @deprecated Use `tracks_SOME` instead. */
  tracks?: InputMaybe<SongWhere>;
  /** @deprecated Use `tracks_NONE` instead. */
  tracks_NOT?: InputMaybe<SongWhere>;
  /** Return Albums where all of the related Songs match this filter */
  tracks_ALL?: InputMaybe<SongWhere>;
  /** Return Albums where none of the related Songs match this filter */
  tracks_NONE?: InputMaybe<SongWhere>;
  /** Return Albums where one of the related Songs match this filter */
  tracks_SINGLE?: InputMaybe<SongWhere>;
  /** Return Albums where some of the related Songs match this filter */
  tracks_SOME?: InputMaybe<SongWhere>;
  /** @deprecated Use `tracksConnection_SOME` instead. */
  tracksConnection?: InputMaybe<AlbumTracksConnectionWhere>;
  /** @deprecated Use `tracksConnection_NONE` instead. */
  tracksConnection_NOT?: InputMaybe<AlbumTracksConnectionWhere>;
  /** Return Albums where all of the related AlbumTracksConnections match this filter */
  tracksConnection_ALL?: InputMaybe<AlbumTracksConnectionWhere>;
  /** Return Albums where none of the related AlbumTracksConnections match this filter */
  tracksConnection_NONE?: InputMaybe<AlbumTracksConnectionWhere>;
  /** Return Albums where one of the related AlbumTracksConnections match this filter */
  tracksConnection_SINGLE?: InputMaybe<AlbumTracksConnectionWhere>;
  /** Return Albums where some of the related AlbumTracksConnections match this filter */
  tracksConnection_SOME?: InputMaybe<AlbumTracksConnectionWhere>;
  tracksAggregate?: InputMaybe<AlbumTracksAggregateInput>;
  /** @deprecated Use `editions_SOME` instead. */
  editions?: InputMaybe<EditionWhere>;
  /** @deprecated Use `editions_NONE` instead. */
  editions_NOT?: InputMaybe<EditionWhere>;
  /** Return Albums where all of the related Editions match this filter */
  editions_ALL?: InputMaybe<EditionWhere>;
  /** Return Albums where none of the related Editions match this filter */
  editions_NONE?: InputMaybe<EditionWhere>;
  /** Return Albums where one of the related Editions match this filter */
  editions_SINGLE?: InputMaybe<EditionWhere>;
  /** Return Albums where some of the related Editions match this filter */
  editions_SOME?: InputMaybe<EditionWhere>;
  /** @deprecated Use `editionsConnection_SOME` instead. */
  editionsConnection?: InputMaybe<AlbumEditionsConnectionWhere>;
  /** @deprecated Use `editionsConnection_NONE` instead. */
  editionsConnection_NOT?: InputMaybe<AlbumEditionsConnectionWhere>;
  /** Return Albums where all of the related AlbumEditionsConnections match this filter */
  editionsConnection_ALL?: InputMaybe<AlbumEditionsConnectionWhere>;
  /** Return Albums where none of the related AlbumEditionsConnections match this filter */
  editionsConnection_NONE?: InputMaybe<AlbumEditionsConnectionWhere>;
  /** Return Albums where one of the related AlbumEditionsConnections match this filter */
  editionsConnection_SINGLE?: InputMaybe<AlbumEditionsConnectionWhere>;
  /** Return Albums where some of the related AlbumEditionsConnections match this filter */
  editionsConnection_SOME?: InputMaybe<AlbumEditionsConnectionWhere>;
  editionsAggregate?: InputMaybe<AlbumEditionsAggregateInput>;
};

export type EditionConnectWhere = {
  node: EditionWhere;
};

export type EditionCreateInput = {
  name: EditionType;
};

export type EditionOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more EditionSort objects to sort Editions by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<EditionSort>>;
};

/** Fields to sort Editions by. The order in which sorts are applied is not guaranteed when specifying many fields in one EditionSort object. */
export type EditionSort = {
  name?: InputMaybe<SortDirection>;
};

export type EditionUpdateInput = {
  name?: InputMaybe<EditionType>;
};

export type EditionWhere = {
  name?: InputMaybe<EditionType>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<EditionType>;
  name_IN?: InputMaybe<Array<EditionType>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<EditionType>>;
  OR?: InputMaybe<Array<EditionWhere>>;
  AND?: InputMaybe<Array<EditionWhere>>;
  NOT?: InputMaybe<EditionWhere>;
};

export type MonthlyPlaysForSongParams = {
  title: Scalars["String"]["input"];
};

export type MonthlyPlaysForSongResponseCreateInput = {
  title: Scalars["String"]["input"];
  versionCount: Scalars["BigInt"]["input"];
  totalPlays: Scalars["BigInt"]["input"];
};

export type MonthlyPlaysForSongResponseOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more MonthlyPlaysForSongResponseSort objects to sort MonthlyPlaysForSongResponses by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<MonthlyPlaysForSongResponseSort>>;
};

/** Fields to sort MonthlyPlaysForSongResponses by. The order in which sorts are applied is not guaranteed when specifying many fields in one MonthlyPlaysForSongResponseSort object. */
export type MonthlyPlaysForSongResponseSort = {
  title?: InputMaybe<SortDirection>;
  versionCount?: InputMaybe<SortDirection>;
  totalPlays?: InputMaybe<SortDirection>;
};

export type MonthlyPlaysForSongResponseUpdateInput = {
  title?: InputMaybe<Scalars["String"]["input"]>;
  versionCount?: InputMaybe<Scalars["BigInt"]["input"]>;
  versionCount_INCREMENT?: InputMaybe<Scalars["BigInt"]["input"]>;
  versionCount_DECREMENT?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalPlays?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalPlays_INCREMENT?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalPlays_DECREMENT?: InputMaybe<Scalars["BigInt"]["input"]>;
};

export type MonthlyPlaysForSongResponseWhere = {
  title?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT?: InputMaybe<Scalars["String"]["input"]>;
  title_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  title_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  title_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  title_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  versionCount?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  versionCount_NOT?: InputMaybe<Scalars["BigInt"]["input"]>;
  versionCount_IN?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  versionCount_NOT_IN?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  versionCount_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  versionCount_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  versionCount_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  versionCount_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalPlays?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  totalPlays_NOT?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalPlays_IN?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  totalPlays_NOT_IN?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  totalPlays_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalPlays_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalPlays_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalPlays_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  OR?: InputMaybe<Array<MonthlyPlaysForSongResponseWhere>>;
  AND?: InputMaybe<Array<MonthlyPlaysForSongResponseWhere>>;
  NOT?: InputMaybe<MonthlyPlaysForSongResponseWhere>;
};

export type MonthlyPlaysPropertiesAggregationWhereInput = {
  AND?: InputMaybe<Array<MonthlyPlaysPropertiesAggregationWhereInput>>;
  OR?: InputMaybe<Array<MonthlyPlaysPropertiesAggregationWhereInput>>;
  NOT?: InputMaybe<MonthlyPlaysPropertiesAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  totalPlays_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalPlays_MIN_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalPlays_MAX_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalPlays_SUM_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalPlays_AVERAGE_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  totalPlays_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalPlays_MIN_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalPlays_MAX_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalPlays_SUM_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalPlays_AVERAGE_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  totalPlays_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalPlays_MIN_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalPlays_MAX_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalPlays_SUM_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalPlays_AVERAGE_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  totalPlays_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalPlays_MIN_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalPlays_MAX_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalPlays_SUM_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalPlays_AVERAGE_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  totalPlays_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalPlays_MIN_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalPlays_MAX_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalPlays_SUM_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalPlays_AVERAGE_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
};

export type MonthlyPlaysPropertiesCreateInput = {
  totalPlays: Scalars["BigInt"]["input"];
};

export type MonthlyPlaysPropertiesSort = {
  totalPlays?: InputMaybe<SortDirection>;
};

export type MonthlyPlaysPropertiesUpdateInput = {
  totalPlays?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalPlays_INCREMENT?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalPlays_DECREMENT?: InputMaybe<Scalars["BigInt"]["input"]>;
};

export type MonthlyPlaysPropertiesWhere = {
  totalPlays?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  totalPlays_NOT?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalPlays_IN?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  totalPlays_NOT_IN?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  totalPlays_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalPlays_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalPlays_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalPlays_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  OR?: InputMaybe<Array<MonthlyPlaysPropertiesWhere>>;
  AND?: InputMaybe<Array<MonthlyPlaysPropertiesWhere>>;
  NOT?: InputMaybe<MonthlyPlaysPropertiesWhere>;
};

export type PersonComposedAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<PersonComposedAggregateInput>>;
  OR?: InputMaybe<Array<PersonComposedAggregateInput>>;
  NOT?: InputMaybe<PersonComposedAggregateInput>;
  node?: InputMaybe<PersonComposedNodeAggregationWhereInput>;
};

export type PersonComposedConnectFieldInput = {
  where?: InputMaybe<SongConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<SongConnectInput>>;
};

export type PersonComposedConnectionSort = {
  node?: InputMaybe<SongSort>;
};

export type PersonComposedConnectionWhere = {
  AND?: InputMaybe<Array<PersonComposedConnectionWhere>>;
  OR?: InputMaybe<Array<PersonComposedConnectionWhere>>;
  NOT?: InputMaybe<PersonComposedConnectionWhere>;
  node?: InputMaybe<SongWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<SongWhere>;
};

export type PersonComposedCreateFieldInput = {
  node: SongCreateInput;
};

export type PersonComposedDeleteFieldInput = {
  where?: InputMaybe<PersonComposedConnectionWhere>;
  delete?: InputMaybe<SongDeleteInput>;
};

export type PersonComposedDisconnectFieldInput = {
  where?: InputMaybe<PersonComposedConnectionWhere>;
  disconnect?: InputMaybe<SongDisconnectInput>;
};

export type PersonComposedFieldInput = {
  connect?: InputMaybe<Array<PersonComposedConnectFieldInput>>;
  create?: InputMaybe<Array<PersonComposedCreateFieldInput>>;
};

export type PersonComposedNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PersonComposedNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PersonComposedNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PersonComposedNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  SongId_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MIN_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MAX_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_SUM_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_AVERAGE_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  SongId_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MIN_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MAX_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_SUM_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_AVERAGE_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  SongId_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MIN_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MAX_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_SUM_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_AVERAGE_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  SongId_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MIN_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MAX_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_SUM_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_AVERAGE_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  SongId_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MIN_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MAX_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_SUM_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_AVERAGE_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PersonComposedUpdateConnectionInput = {
  node?: InputMaybe<SongUpdateInput>;
};

export type PersonComposedUpdateFieldInput = {
  where?: InputMaybe<PersonComposedConnectionWhere>;
  connect?: InputMaybe<Array<PersonComposedConnectFieldInput>>;
  disconnect?: InputMaybe<Array<PersonComposedDisconnectFieldInput>>;
  create?: InputMaybe<Array<PersonComposedCreateFieldInput>>;
  update?: InputMaybe<PersonComposedUpdateConnectionInput>;
  delete?: InputMaybe<Array<PersonComposedDeleteFieldInput>>;
};

export type PersonConnectInput = {
  sings?: InputMaybe<Array<PersonSingsConnectFieldInput>>;
  featuredIn?: InputMaybe<Array<PersonFeaturedInConnectFieldInput>>;
  composed?: InputMaybe<Array<PersonComposedConnectFieldInput>>;
};

export type PersonConnectWhere = {
  node: PersonWhere;
};

export type PersonCreateInput = {
  name: Scalars["String"]["input"];
  sings?: InputMaybe<PersonSingsFieldInput>;
  featuredIn?: InputMaybe<PersonFeaturedInFieldInput>;
  composed?: InputMaybe<PersonComposedFieldInput>;
};

export type PersonDeleteInput = {
  sings?: InputMaybe<Array<PersonSingsDeleteFieldInput>>;
  featuredIn?: InputMaybe<Array<PersonFeaturedInDeleteFieldInput>>;
  composed?: InputMaybe<Array<PersonComposedDeleteFieldInput>>;
};

export type PersonDisconnectInput = {
  sings?: InputMaybe<Array<PersonSingsDisconnectFieldInput>>;
  featuredIn?: InputMaybe<Array<PersonFeaturedInDisconnectFieldInput>>;
  composed?: InputMaybe<Array<PersonComposedDisconnectFieldInput>>;
};

export type PersonFeaturedInAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<PersonFeaturedInAggregateInput>>;
  OR?: InputMaybe<Array<PersonFeaturedInAggregateInput>>;
  NOT?: InputMaybe<PersonFeaturedInAggregateInput>;
  node?: InputMaybe<PersonFeaturedInNodeAggregationWhereInput>;
};

export type PersonFeaturedInConnectFieldInput = {
  where?: InputMaybe<SongConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<SongConnectInput>>;
};

export type PersonFeaturedInConnectionSort = {
  node?: InputMaybe<SongSort>;
};

export type PersonFeaturedInConnectionWhere = {
  AND?: InputMaybe<Array<PersonFeaturedInConnectionWhere>>;
  OR?: InputMaybe<Array<PersonFeaturedInConnectionWhere>>;
  NOT?: InputMaybe<PersonFeaturedInConnectionWhere>;
  node?: InputMaybe<SongWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<SongWhere>;
};

export type PersonFeaturedInCreateFieldInput = {
  node: SongCreateInput;
};

export type PersonFeaturedInDeleteFieldInput = {
  where?: InputMaybe<PersonFeaturedInConnectionWhere>;
  delete?: InputMaybe<SongDeleteInput>;
};

export type PersonFeaturedInDisconnectFieldInput = {
  where?: InputMaybe<PersonFeaturedInConnectionWhere>;
  disconnect?: InputMaybe<SongDisconnectInput>;
};

export type PersonFeaturedInFieldInput = {
  connect?: InputMaybe<Array<PersonFeaturedInConnectFieldInput>>;
  create?: InputMaybe<Array<PersonFeaturedInCreateFieldInput>>;
};

export type PersonFeaturedInNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PersonFeaturedInNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PersonFeaturedInNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PersonFeaturedInNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  SongId_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MIN_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MAX_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_SUM_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_AVERAGE_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  SongId_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MIN_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MAX_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_SUM_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_AVERAGE_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  SongId_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MIN_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MAX_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_SUM_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_AVERAGE_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  SongId_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MIN_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MAX_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_SUM_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_AVERAGE_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  SongId_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MIN_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MAX_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_SUM_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_AVERAGE_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PersonFeaturedInUpdateConnectionInput = {
  node?: InputMaybe<SongUpdateInput>;
};

export type PersonFeaturedInUpdateFieldInput = {
  where?: InputMaybe<PersonFeaturedInConnectionWhere>;
  connect?: InputMaybe<Array<PersonFeaturedInConnectFieldInput>>;
  disconnect?: InputMaybe<Array<PersonFeaturedInDisconnectFieldInput>>;
  create?: InputMaybe<Array<PersonFeaturedInCreateFieldInput>>;
  update?: InputMaybe<PersonFeaturedInUpdateConnectionInput>;
  delete?: InputMaybe<Array<PersonFeaturedInDeleteFieldInput>>;
};

export type PersonOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more PersonSort objects to sort People by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<PersonSort>>;
};

export type PersonRelationInput = {
  sings?: InputMaybe<Array<PersonSingsCreateFieldInput>>;
  featuredIn?: InputMaybe<Array<PersonFeaturedInCreateFieldInput>>;
  composed?: InputMaybe<Array<PersonComposedCreateFieldInput>>;
};

export type PersonSingsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<PersonSingsAggregateInput>>;
  OR?: InputMaybe<Array<PersonSingsAggregateInput>>;
  NOT?: InputMaybe<PersonSingsAggregateInput>;
  node?: InputMaybe<PersonSingsNodeAggregationWhereInput>;
};

export type PersonSingsConnectFieldInput = {
  where?: InputMaybe<SongConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<SongConnectInput>>;
};

export type PersonSingsConnectionSort = {
  node?: InputMaybe<SongSort>;
};

export type PersonSingsConnectionWhere = {
  AND?: InputMaybe<Array<PersonSingsConnectionWhere>>;
  OR?: InputMaybe<Array<PersonSingsConnectionWhere>>;
  NOT?: InputMaybe<PersonSingsConnectionWhere>;
  node?: InputMaybe<SongWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<SongWhere>;
};

export type PersonSingsCreateFieldInput = {
  node: SongCreateInput;
};

export type PersonSingsDeleteFieldInput = {
  where?: InputMaybe<PersonSingsConnectionWhere>;
  delete?: InputMaybe<SongDeleteInput>;
};

export type PersonSingsDisconnectFieldInput = {
  where?: InputMaybe<PersonSingsConnectionWhere>;
  disconnect?: InputMaybe<SongDisconnectInput>;
};

export type PersonSingsFieldInput = {
  connect?: InputMaybe<Array<PersonSingsConnectFieldInput>>;
  create?: InputMaybe<Array<PersonSingsCreateFieldInput>>;
};

export type PersonSingsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PersonSingsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PersonSingsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PersonSingsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  SongId_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MIN_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MAX_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_SUM_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_AVERAGE_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  SongId_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MIN_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MAX_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_SUM_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_AVERAGE_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  SongId_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MIN_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MAX_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_SUM_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_AVERAGE_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  SongId_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MIN_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MAX_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_SUM_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_AVERAGE_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  SongId_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MIN_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MAX_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_SUM_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_AVERAGE_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PersonSingsUpdateConnectionInput = {
  node?: InputMaybe<SongUpdateInput>;
};

export type PersonSingsUpdateFieldInput = {
  where?: InputMaybe<PersonSingsConnectionWhere>;
  connect?: InputMaybe<Array<PersonSingsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<PersonSingsDisconnectFieldInput>>;
  create?: InputMaybe<Array<PersonSingsCreateFieldInput>>;
  update?: InputMaybe<PersonSingsUpdateConnectionInput>;
  delete?: InputMaybe<Array<PersonSingsDeleteFieldInput>>;
};

/** Fields to sort People by. The order in which sorts are applied is not guaranteed when specifying many fields in one PersonSort object. */
export type PersonSort = {
  name?: InputMaybe<SortDirection>;
};

export type PersonUpdateInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  sings?: InputMaybe<Array<PersonSingsUpdateFieldInput>>;
  featuredIn?: InputMaybe<Array<PersonFeaturedInUpdateFieldInput>>;
  composed?: InputMaybe<Array<PersonComposedUpdateFieldInput>>;
};

export type PersonWhere = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]["input"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<PersonWhere>>;
  AND?: InputMaybe<Array<PersonWhere>>;
  NOT?: InputMaybe<PersonWhere>;
  /** @deprecated Use `sings_SOME` instead. */
  sings?: InputMaybe<SongWhere>;
  /** @deprecated Use `sings_NONE` instead. */
  sings_NOT?: InputMaybe<SongWhere>;
  /** Return People where all of the related Songs match this filter */
  sings_ALL?: InputMaybe<SongWhere>;
  /** Return People where none of the related Songs match this filter */
  sings_NONE?: InputMaybe<SongWhere>;
  /** Return People where one of the related Songs match this filter */
  sings_SINGLE?: InputMaybe<SongWhere>;
  /** Return People where some of the related Songs match this filter */
  sings_SOME?: InputMaybe<SongWhere>;
  /** @deprecated Use `singsConnection_SOME` instead. */
  singsConnection?: InputMaybe<PersonSingsConnectionWhere>;
  /** @deprecated Use `singsConnection_NONE` instead. */
  singsConnection_NOT?: InputMaybe<PersonSingsConnectionWhere>;
  /** Return People where all of the related PersonSingsConnections match this filter */
  singsConnection_ALL?: InputMaybe<PersonSingsConnectionWhere>;
  /** Return People where none of the related PersonSingsConnections match this filter */
  singsConnection_NONE?: InputMaybe<PersonSingsConnectionWhere>;
  /** Return People where one of the related PersonSingsConnections match this filter */
  singsConnection_SINGLE?: InputMaybe<PersonSingsConnectionWhere>;
  /** Return People where some of the related PersonSingsConnections match this filter */
  singsConnection_SOME?: InputMaybe<PersonSingsConnectionWhere>;
  singsAggregate?: InputMaybe<PersonSingsAggregateInput>;
  /** @deprecated Use `featuredIn_SOME` instead. */
  featuredIn?: InputMaybe<SongWhere>;
  /** @deprecated Use `featuredIn_NONE` instead. */
  featuredIn_NOT?: InputMaybe<SongWhere>;
  /** Return People where all of the related Songs match this filter */
  featuredIn_ALL?: InputMaybe<SongWhere>;
  /** Return People where none of the related Songs match this filter */
  featuredIn_NONE?: InputMaybe<SongWhere>;
  /** Return People where one of the related Songs match this filter */
  featuredIn_SINGLE?: InputMaybe<SongWhere>;
  /** Return People where some of the related Songs match this filter */
  featuredIn_SOME?: InputMaybe<SongWhere>;
  /** @deprecated Use `featuredInConnection_SOME` instead. */
  featuredInConnection?: InputMaybe<PersonFeaturedInConnectionWhere>;
  /** @deprecated Use `featuredInConnection_NONE` instead. */
  featuredInConnection_NOT?: InputMaybe<PersonFeaturedInConnectionWhere>;
  /** Return People where all of the related PersonFeaturedInConnections match this filter */
  featuredInConnection_ALL?: InputMaybe<PersonFeaturedInConnectionWhere>;
  /** Return People where none of the related PersonFeaturedInConnections match this filter */
  featuredInConnection_NONE?: InputMaybe<PersonFeaturedInConnectionWhere>;
  /** Return People where one of the related PersonFeaturedInConnections match this filter */
  featuredInConnection_SINGLE?: InputMaybe<PersonFeaturedInConnectionWhere>;
  /** Return People where some of the related PersonFeaturedInConnections match this filter */
  featuredInConnection_SOME?: InputMaybe<PersonFeaturedInConnectionWhere>;
  featuredInAggregate?: InputMaybe<PersonFeaturedInAggregateInput>;
  /** @deprecated Use `composed_SOME` instead. */
  composed?: InputMaybe<SongWhere>;
  /** @deprecated Use `composed_NONE` instead. */
  composed_NOT?: InputMaybe<SongWhere>;
  /** Return People where all of the related Songs match this filter */
  composed_ALL?: InputMaybe<SongWhere>;
  /** Return People where none of the related Songs match this filter */
  composed_NONE?: InputMaybe<SongWhere>;
  /** Return People where one of the related Songs match this filter */
  composed_SINGLE?: InputMaybe<SongWhere>;
  /** Return People where some of the related Songs match this filter */
  composed_SOME?: InputMaybe<SongWhere>;
  /** @deprecated Use `composedConnection_SOME` instead. */
  composedConnection?: InputMaybe<PersonComposedConnectionWhere>;
  /** @deprecated Use `composedConnection_NONE` instead. */
  composedConnection_NOT?: InputMaybe<PersonComposedConnectionWhere>;
  /** Return People where all of the related PersonComposedConnections match this filter */
  composedConnection_ALL?: InputMaybe<PersonComposedConnectionWhere>;
  /** Return People where none of the related PersonComposedConnections match this filter */
  composedConnection_NONE?: InputMaybe<PersonComposedConnectionWhere>;
  /** Return People where one of the related PersonComposedConnections match this filter */
  composedConnection_SINGLE?: InputMaybe<PersonComposedConnectionWhere>;
  /** Return People where some of the related PersonComposedConnections match this filter */
  composedConnection_SOME?: InputMaybe<PersonComposedConnectionWhere>;
  composedAggregate?: InputMaybe<PersonComposedAggregateInput>;
};

export type PlayBreakdownCreateInput = {
  version: Array<VersionType>;
  playCount: Scalars["BigInt"]["input"];
};

export type PlayBreakdownOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more PlayBreakdownSort objects to sort PlayBreakdowns by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<PlayBreakdownSort>>;
};

/** Fields to sort PlayBreakdowns by. The order in which sorts are applied is not guaranteed when specifying many fields in one PlayBreakdownSort object. */
export type PlayBreakdownSort = {
  playCount?: InputMaybe<SortDirection>;
};

export type PlayBreakdownUpdateInput = {
  version?: InputMaybe<Array<VersionType>>;
  playCount?: InputMaybe<Scalars["BigInt"]["input"]>;
  playCount_INCREMENT?: InputMaybe<Scalars["BigInt"]["input"]>;
  playCount_DECREMENT?: InputMaybe<Scalars["BigInt"]["input"]>;
};

export type PlayBreakdownWhere = {
  version?: InputMaybe<Array<VersionType>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  version_NOT?: InputMaybe<Array<VersionType>>;
  version_INCLUDES?: InputMaybe<VersionType>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  version_NOT_INCLUDES?: InputMaybe<VersionType>;
  playCount?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  playCount_NOT?: InputMaybe<Scalars["BigInt"]["input"]>;
  playCount_IN?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  playCount_NOT_IN?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  playCount_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  playCount_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  playCount_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  playCount_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  OR?: InputMaybe<Array<PlayBreakdownWhere>>;
  AND?: InputMaybe<Array<PlayBreakdownWhere>>;
  NOT?: InputMaybe<PlayBreakdownWhere>;
};

export type PlayConnectInput = {
  song?: InputMaybe<Array<PlaySongConnectFieldInput>>;
};

export type PlayConnectWhere = {
  node: PlayWhere;
};

export type PlayCreateInput = {
  month: Scalars["String"]["input"];
  song?: InputMaybe<PlaySongFieldInput>;
};

export type PlayDeleteInput = {
  song?: InputMaybe<Array<PlaySongDeleteFieldInput>>;
};

export type PlayDisconnectInput = {
  song?: InputMaybe<Array<PlaySongDisconnectFieldInput>>;
};

export type PlayOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more PlaySort objects to sort Plays by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<PlaySort>>;
};

export type PlayRelationInput = {
  song?: InputMaybe<Array<PlaySongCreateFieldInput>>;
};

export type PlaySongAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<PlaySongAggregateInput>>;
  OR?: InputMaybe<Array<PlaySongAggregateInput>>;
  NOT?: InputMaybe<PlaySongAggregateInput>;
  node?: InputMaybe<PlaySongNodeAggregationWhereInput>;
  edge?: InputMaybe<MonthlyPlaysPropertiesAggregationWhereInput>;
};

export type PlaySongConnectFieldInput = {
  edge: MonthlyPlaysPropertiesCreateInput;
  where?: InputMaybe<SongConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<SongConnectInput>>;
};

export type PlaySongConnectionSort = {
  node?: InputMaybe<SongSort>;
  edge?: InputMaybe<MonthlyPlaysPropertiesSort>;
};

export type PlaySongConnectionWhere = {
  AND?: InputMaybe<Array<PlaySongConnectionWhere>>;
  OR?: InputMaybe<Array<PlaySongConnectionWhere>>;
  NOT?: InputMaybe<PlaySongConnectionWhere>;
  node?: InputMaybe<SongWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<SongWhere>;
  edge?: InputMaybe<MonthlyPlaysPropertiesWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<MonthlyPlaysPropertiesWhere>;
};

export type PlaySongCreateFieldInput = {
  edge: MonthlyPlaysPropertiesCreateInput;
  node: SongCreateInput;
};

export type PlaySongDeleteFieldInput = {
  where?: InputMaybe<PlaySongConnectionWhere>;
  delete?: InputMaybe<SongDeleteInput>;
};

export type PlaySongDisconnectFieldInput = {
  where?: InputMaybe<PlaySongConnectionWhere>;
  disconnect?: InputMaybe<SongDisconnectInput>;
};

export type PlaySongFieldInput = {
  connect?: InputMaybe<Array<PlaySongConnectFieldInput>>;
  create?: InputMaybe<Array<PlaySongCreateFieldInput>>;
};

export type PlaySongNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PlaySongNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PlaySongNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PlaySongNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  SongId_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MIN_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MAX_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_SUM_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_AVERAGE_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  SongId_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MIN_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MAX_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_SUM_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_AVERAGE_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  SongId_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MIN_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MAX_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_SUM_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_AVERAGE_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  SongId_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MIN_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MAX_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_SUM_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_AVERAGE_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  SongId_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MIN_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MAX_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_SUM_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_AVERAGE_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PlaySongUpdateConnectionInput = {
  node?: InputMaybe<SongUpdateInput>;
  edge?: InputMaybe<MonthlyPlaysPropertiesUpdateInput>;
};

export type PlaySongUpdateFieldInput = {
  where?: InputMaybe<PlaySongConnectionWhere>;
  connect?: InputMaybe<Array<PlaySongConnectFieldInput>>;
  disconnect?: InputMaybe<Array<PlaySongDisconnectFieldInput>>;
  create?: InputMaybe<Array<PlaySongCreateFieldInput>>;
  update?: InputMaybe<PlaySongUpdateConnectionInput>;
  delete?: InputMaybe<Array<PlaySongDeleteFieldInput>>;
};

/** Fields to sort Plays by. The order in which sorts are applied is not guaranteed when specifying many fields in one PlaySort object. */
export type PlaySort = {
  month?: InputMaybe<SortDirection>;
};

export type PlayUpdateInput = {
  month?: InputMaybe<Scalars["String"]["input"]>;
  song?: InputMaybe<Array<PlaySongUpdateFieldInput>>;
};

export type PlayWhere = {
  month?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  month_NOT?: InputMaybe<Scalars["String"]["input"]>;
  month_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  month_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  month_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  month_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  month_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  month_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  month_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  month_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<PlayWhere>>;
  AND?: InputMaybe<Array<PlayWhere>>;
  NOT?: InputMaybe<PlayWhere>;
  /** @deprecated Use `song_SOME` instead. */
  song?: InputMaybe<SongWhere>;
  /** @deprecated Use `song_NONE` instead. */
  song_NOT?: InputMaybe<SongWhere>;
  /** Return Plays where all of the related Songs match this filter */
  song_ALL?: InputMaybe<SongWhere>;
  /** Return Plays where none of the related Songs match this filter */
  song_NONE?: InputMaybe<SongWhere>;
  /** Return Plays where one of the related Songs match this filter */
  song_SINGLE?: InputMaybe<SongWhere>;
  /** Return Plays where some of the related Songs match this filter */
  song_SOME?: InputMaybe<SongWhere>;
  /** @deprecated Use `songConnection_SOME` instead. */
  songConnection?: InputMaybe<PlaySongConnectionWhere>;
  /** @deprecated Use `songConnection_NONE` instead. */
  songConnection_NOT?: InputMaybe<PlaySongConnectionWhere>;
  /** Return Plays where all of the related PlaySongConnections match this filter */
  songConnection_ALL?: InputMaybe<PlaySongConnectionWhere>;
  /** Return Plays where none of the related PlaySongConnections match this filter */
  songConnection_NONE?: InputMaybe<PlaySongConnectionWhere>;
  /** Return Plays where one of the related PlaySongConnections match this filter */
  songConnection_SINGLE?: InputMaybe<PlaySongConnectionWhere>;
  /** Return Plays where some of the related PlaySongConnections match this filter */
  songConnection_SOME?: InputMaybe<PlaySongConnectionWhere>;
  songAggregate?: InputMaybe<PlaySongAggregateInput>;
};

export type SongAlbumAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<SongAlbumAggregateInput>>;
  OR?: InputMaybe<Array<SongAlbumAggregateInput>>;
  NOT?: InputMaybe<SongAlbumAggregateInput>;
  node?: InputMaybe<SongAlbumNodeAggregationWhereInput>;
};

export type SongAlbumConnectFieldInput = {
  where?: InputMaybe<AlbumConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<AlbumConnectInput>>;
};

export type SongAlbumConnectionSort = {
  node?: InputMaybe<AlbumSort>;
};

export type SongAlbumConnectionWhere = {
  AND?: InputMaybe<Array<SongAlbumConnectionWhere>>;
  OR?: InputMaybe<Array<SongAlbumConnectionWhere>>;
  NOT?: InputMaybe<SongAlbumConnectionWhere>;
  node?: InputMaybe<AlbumWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<AlbumWhere>;
};

export type SongAlbumCreateFieldInput = {
  node: AlbumCreateInput;
};

export type SongAlbumDeleteFieldInput = {
  where?: InputMaybe<SongAlbumConnectionWhere>;
  delete?: InputMaybe<AlbumDeleteInput>;
};

export type SongAlbumDisconnectFieldInput = {
  where?: InputMaybe<SongAlbumConnectionWhere>;
  disconnect?: InputMaybe<AlbumDisconnectInput>;
};

export type SongAlbumFieldInput = {
  connect?: InputMaybe<Array<SongAlbumConnectFieldInput>>;
  create?: InputMaybe<Array<SongAlbumCreateFieldInput>>;
};

export type SongAlbumNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SongAlbumNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<SongAlbumNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SongAlbumNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  AlbumId_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  AlbumId_MIN_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  AlbumId_MAX_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  AlbumId_SUM_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  AlbumId_AVERAGE_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  AlbumId_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  AlbumId_MIN_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  AlbumId_MAX_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  AlbumId_SUM_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  AlbumId_AVERAGE_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  AlbumId_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  AlbumId_MIN_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  AlbumId_MAX_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  AlbumId_SUM_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  AlbumId_AVERAGE_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  AlbumId_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  AlbumId_MIN_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  AlbumId_MAX_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  AlbumId_SUM_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  AlbumId_AVERAGE_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  AlbumId_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  AlbumId_MIN_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  AlbumId_MAX_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  AlbumId_SUM_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  AlbumId_AVERAGE_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SongAlbumUpdateConnectionInput = {
  node?: InputMaybe<AlbumUpdateInput>;
};

export type SongAlbumUpdateFieldInput = {
  where?: InputMaybe<SongAlbumConnectionWhere>;
  connect?: InputMaybe<Array<SongAlbumConnectFieldInput>>;
  disconnect?: InputMaybe<Array<SongAlbumDisconnectFieldInput>>;
  create?: InputMaybe<Array<SongAlbumCreateFieldInput>>;
  update?: InputMaybe<SongAlbumUpdateConnectionInput>;
  delete?: InputMaybe<Array<SongAlbumDeleteFieldInput>>;
};

export type SongAllPlaysAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<SongAllPlaysAggregateInput>>;
  OR?: InputMaybe<Array<SongAllPlaysAggregateInput>>;
  NOT?: InputMaybe<SongAllPlaysAggregateInput>;
  node?: InputMaybe<SongAllPlaysNodeAggregationWhereInput>;
  edge?: InputMaybe<MonthlyPlaysPropertiesAggregationWhereInput>;
};

export type SongAllPlaysConnectFieldInput = {
  edge: MonthlyPlaysPropertiesCreateInput;
  where?: InputMaybe<PlayConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<PlayConnectInput>>;
};

export type SongAllPlaysConnectionSort = {
  node?: InputMaybe<PlaySort>;
  edge?: InputMaybe<MonthlyPlaysPropertiesSort>;
};

export type SongAllPlaysConnectionWhere = {
  AND?: InputMaybe<Array<SongAllPlaysConnectionWhere>>;
  OR?: InputMaybe<Array<SongAllPlaysConnectionWhere>>;
  NOT?: InputMaybe<SongAllPlaysConnectionWhere>;
  node?: InputMaybe<PlayWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<PlayWhere>;
  edge?: InputMaybe<MonthlyPlaysPropertiesWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<MonthlyPlaysPropertiesWhere>;
};

export type SongAllPlaysCreateFieldInput = {
  edge: MonthlyPlaysPropertiesCreateInput;
  node: PlayCreateInput;
};

export type SongAllPlaysDeleteFieldInput = {
  where?: InputMaybe<SongAllPlaysConnectionWhere>;
  delete?: InputMaybe<PlayDeleteInput>;
};

export type SongAllPlaysDisconnectFieldInput = {
  where?: InputMaybe<SongAllPlaysConnectionWhere>;
  disconnect?: InputMaybe<PlayDisconnectInput>;
};

export type SongAllPlaysFieldInput = {
  connect?: InputMaybe<Array<SongAllPlaysConnectFieldInput>>;
  create?: InputMaybe<Array<SongAllPlaysCreateFieldInput>>;
};

export type SongAllPlaysNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SongAllPlaysNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<SongAllPlaysNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SongAllPlaysNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  month_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  month_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  month_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  month_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  month_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  month_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  month_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  month_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  month_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  month_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  month_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  month_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  month_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  month_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  month_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  month_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  month_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  month_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  month_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  month_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  month_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  month_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  month_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  month_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  month_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  month_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  month_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  month_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  month_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  month_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  month_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  month_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  month_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  month_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  month_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SongAllPlaysUpdateConnectionInput = {
  node?: InputMaybe<PlayUpdateInput>;
  edge?: InputMaybe<MonthlyPlaysPropertiesUpdateInput>;
};

export type SongAllPlaysUpdateFieldInput = {
  where?: InputMaybe<SongAllPlaysConnectionWhere>;
  connect?: InputMaybe<Array<SongAllPlaysConnectFieldInput>>;
  disconnect?: InputMaybe<Array<SongAllPlaysDisconnectFieldInput>>;
  create?: InputMaybe<Array<SongAllPlaysCreateFieldInput>>;
  update?: InputMaybe<SongAllPlaysUpdateConnectionInput>;
  delete?: InputMaybe<Array<SongAllPlaysDeleteFieldInput>>;
};

export type SongComposedByAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<SongComposedByAggregateInput>>;
  OR?: InputMaybe<Array<SongComposedByAggregateInput>>;
  NOT?: InputMaybe<SongComposedByAggregateInput>;
  node?: InputMaybe<SongComposedByNodeAggregationWhereInput>;
};

export type SongComposedByConnectFieldInput = {
  where?: InputMaybe<PersonConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<PersonConnectInput>>;
};

export type SongComposedByConnectionSort = {
  node?: InputMaybe<PersonSort>;
};

export type SongComposedByConnectionWhere = {
  AND?: InputMaybe<Array<SongComposedByConnectionWhere>>;
  OR?: InputMaybe<Array<SongComposedByConnectionWhere>>;
  NOT?: InputMaybe<SongComposedByConnectionWhere>;
  node?: InputMaybe<PersonWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<PersonWhere>;
};

export type SongComposedByCreateFieldInput = {
  node: PersonCreateInput;
};

export type SongComposedByDeleteFieldInput = {
  where?: InputMaybe<SongComposedByConnectionWhere>;
  delete?: InputMaybe<PersonDeleteInput>;
};

export type SongComposedByDisconnectFieldInput = {
  where?: InputMaybe<SongComposedByConnectionWhere>;
  disconnect?: InputMaybe<PersonDisconnectInput>;
};

export type SongComposedByFieldInput = {
  connect?: InputMaybe<Array<SongComposedByConnectFieldInput>>;
  create?: InputMaybe<Array<SongComposedByCreateFieldInput>>;
};

export type SongComposedByNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SongComposedByNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<SongComposedByNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SongComposedByNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SongComposedByUpdateConnectionInput = {
  node?: InputMaybe<PersonUpdateInput>;
};

export type SongComposedByUpdateFieldInput = {
  where?: InputMaybe<SongComposedByConnectionWhere>;
  connect?: InputMaybe<Array<SongComposedByConnectFieldInput>>;
  disconnect?: InputMaybe<Array<SongComposedByDisconnectFieldInput>>;
  create?: InputMaybe<Array<SongComposedByCreateFieldInput>>;
  update?: InputMaybe<SongComposedByUpdateConnectionInput>;
  delete?: InputMaybe<Array<SongComposedByDeleteFieldInput>>;
};

export type SongConnectInput = {
  album?: InputMaybe<Array<SongAlbumConnectFieldInput>>;
  features?: InputMaybe<Array<SongFeaturesConnectFieldInput>>;
  versions?: InputMaybe<Array<SongVersionsConnectFieldInput>>;
  composedBy?: InputMaybe<Array<SongComposedByConnectFieldInput>>;
  allPlays?: InputMaybe<Array<SongAllPlaysConnectFieldInput>>;
  singers?: InputMaybe<Array<SongSingersConnectFieldInput>>;
  yearReleased?: InputMaybe<Array<SongYearReleasedConnectFieldInput>>;
};

export type SongConnectWhere = {
  node: SongWhere;
};

export type SongCreateInput = {
  SongId: Scalars["BigInt"]["input"];
  title: Scalars["String"]["input"];
  album?: InputMaybe<SongAlbumFieldInput>;
  features?: InputMaybe<SongFeaturesFieldInput>;
  versions?: InputMaybe<SongVersionsFieldInput>;
  composedBy?: InputMaybe<SongComposedByFieldInput>;
  allPlays?: InputMaybe<SongAllPlaysFieldInput>;
  singers?: InputMaybe<SongSingersFieldInput>;
  yearReleased?: InputMaybe<SongYearReleasedFieldInput>;
};

export type SongDeleteInput = {
  album?: InputMaybe<Array<SongAlbumDeleteFieldInput>>;
  features?: InputMaybe<Array<SongFeaturesDeleteFieldInput>>;
  versions?: InputMaybe<Array<SongVersionsDeleteFieldInput>>;
  composedBy?: InputMaybe<Array<SongComposedByDeleteFieldInput>>;
  allPlays?: InputMaybe<Array<SongAllPlaysDeleteFieldInput>>;
  singers?: InputMaybe<Array<SongSingersDeleteFieldInput>>;
  yearReleased?: InputMaybe<Array<SongYearReleasedDeleteFieldInput>>;
};

export type SongDisconnectInput = {
  album?: InputMaybe<Array<SongAlbumDisconnectFieldInput>>;
  features?: InputMaybe<Array<SongFeaturesDisconnectFieldInput>>;
  versions?: InputMaybe<Array<SongVersionsDisconnectFieldInput>>;
  composedBy?: InputMaybe<Array<SongComposedByDisconnectFieldInput>>;
  allPlays?: InputMaybe<Array<SongAllPlaysDisconnectFieldInput>>;
  singers?: InputMaybe<Array<SongSingersDisconnectFieldInput>>;
  yearReleased?: InputMaybe<Array<SongYearReleasedDisconnectFieldInput>>;
};

export type SongFeaturesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<SongFeaturesAggregateInput>>;
  OR?: InputMaybe<Array<SongFeaturesAggregateInput>>;
  NOT?: InputMaybe<SongFeaturesAggregateInput>;
  node?: InputMaybe<SongFeaturesNodeAggregationWhereInput>;
};

export type SongFeaturesConnectFieldInput = {
  where?: InputMaybe<PersonConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<PersonConnectInput>>;
};

export type SongFeaturesConnectionSort = {
  node?: InputMaybe<PersonSort>;
};

export type SongFeaturesConnectionWhere = {
  AND?: InputMaybe<Array<SongFeaturesConnectionWhere>>;
  OR?: InputMaybe<Array<SongFeaturesConnectionWhere>>;
  NOT?: InputMaybe<SongFeaturesConnectionWhere>;
  node?: InputMaybe<PersonWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<PersonWhere>;
};

export type SongFeaturesCreateFieldInput = {
  node: PersonCreateInput;
};

export type SongFeaturesDeleteFieldInput = {
  where?: InputMaybe<SongFeaturesConnectionWhere>;
  delete?: InputMaybe<PersonDeleteInput>;
};

export type SongFeaturesDisconnectFieldInput = {
  where?: InputMaybe<SongFeaturesConnectionWhere>;
  disconnect?: InputMaybe<PersonDisconnectInput>;
};

export type SongFeaturesFieldInput = {
  connect?: InputMaybe<Array<SongFeaturesConnectFieldInput>>;
  create?: InputMaybe<Array<SongFeaturesCreateFieldInput>>;
};

export type SongFeaturesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SongFeaturesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<SongFeaturesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SongFeaturesNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SongFeaturesUpdateConnectionInput = {
  node?: InputMaybe<PersonUpdateInput>;
};

export type SongFeaturesUpdateFieldInput = {
  where?: InputMaybe<SongFeaturesConnectionWhere>;
  connect?: InputMaybe<Array<SongFeaturesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<SongFeaturesDisconnectFieldInput>>;
  create?: InputMaybe<Array<SongFeaturesCreateFieldInput>>;
  update?: InputMaybe<SongFeaturesUpdateConnectionInput>;
  delete?: InputMaybe<Array<SongFeaturesDeleteFieldInput>>;
};

export type SongOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more SongSort objects to sort Songs by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<SongSort>>;
};

export type SongRelationInput = {
  album?: InputMaybe<Array<SongAlbumCreateFieldInput>>;
  features?: InputMaybe<Array<SongFeaturesCreateFieldInput>>;
  versions?: InputMaybe<Array<SongVersionsCreateFieldInput>>;
  composedBy?: InputMaybe<Array<SongComposedByCreateFieldInput>>;
  allPlays?: InputMaybe<Array<SongAllPlaysCreateFieldInput>>;
  singers?: InputMaybe<Array<SongSingersCreateFieldInput>>;
  yearReleased?: InputMaybe<Array<SongYearReleasedCreateFieldInput>>;
};

export type SongSingersAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<SongSingersAggregateInput>>;
  OR?: InputMaybe<Array<SongSingersAggregateInput>>;
  NOT?: InputMaybe<SongSingersAggregateInput>;
  node?: InputMaybe<SongSingersNodeAggregationWhereInput>;
};

export type SongSingersConnectFieldInput = {
  where?: InputMaybe<PersonConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<PersonConnectInput>>;
};

export type SongSingersConnectionSort = {
  node?: InputMaybe<PersonSort>;
};

export type SongSingersConnectionWhere = {
  AND?: InputMaybe<Array<SongSingersConnectionWhere>>;
  OR?: InputMaybe<Array<SongSingersConnectionWhere>>;
  NOT?: InputMaybe<SongSingersConnectionWhere>;
  node?: InputMaybe<PersonWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<PersonWhere>;
};

export type SongSingersCreateFieldInput = {
  node: PersonCreateInput;
};

export type SongSingersDeleteFieldInput = {
  where?: InputMaybe<SongSingersConnectionWhere>;
  delete?: InputMaybe<PersonDeleteInput>;
};

export type SongSingersDisconnectFieldInput = {
  where?: InputMaybe<SongSingersConnectionWhere>;
  disconnect?: InputMaybe<PersonDisconnectInput>;
};

export type SongSingersFieldInput = {
  connect?: InputMaybe<Array<SongSingersConnectFieldInput>>;
  create?: InputMaybe<Array<SongSingersCreateFieldInput>>;
};

export type SongSingersNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SongSingersNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<SongSingersNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SongSingersNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SongSingersUpdateConnectionInput = {
  node?: InputMaybe<PersonUpdateInput>;
};

export type SongSingersUpdateFieldInput = {
  where?: InputMaybe<SongSingersConnectionWhere>;
  connect?: InputMaybe<Array<SongSingersConnectFieldInput>>;
  disconnect?: InputMaybe<Array<SongSingersDisconnectFieldInput>>;
  create?: InputMaybe<Array<SongSingersCreateFieldInput>>;
  update?: InputMaybe<SongSingersUpdateConnectionInput>;
  delete?: InputMaybe<Array<SongSingersDeleteFieldInput>>;
};

/** Fields to sort Songs by. The order in which sorts are applied is not guaranteed when specifying many fields in one SongSort object. */
export type SongSort = {
  SongId?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
  monthlyPlays?: InputMaybe<SortDirection>;
};

export type SongUpdateInput = {
  SongId?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_INCREMENT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_DECREMENT?: InputMaybe<Scalars["BigInt"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  album?: InputMaybe<Array<SongAlbumUpdateFieldInput>>;
  features?: InputMaybe<Array<SongFeaturesUpdateFieldInput>>;
  versions?: InputMaybe<Array<SongVersionsUpdateFieldInput>>;
  composedBy?: InputMaybe<Array<SongComposedByUpdateFieldInput>>;
  allPlays?: InputMaybe<Array<SongAllPlaysUpdateFieldInput>>;
  singers?: InputMaybe<Array<SongSingersUpdateFieldInput>>;
  yearReleased?: InputMaybe<Array<SongYearReleasedUpdateFieldInput>>;
};

export type SongVersionsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<SongVersionsAggregateInput>>;
  OR?: InputMaybe<Array<SongVersionsAggregateInput>>;
  NOT?: InputMaybe<SongVersionsAggregateInput>;
};

export type SongVersionsConnectFieldInput = {
  where?: InputMaybe<VersionConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<VersionConnectInput>>;
};

export type SongVersionsConnectionSort = {
  node?: InputMaybe<VersionSort>;
};

export type SongVersionsConnectionWhere = {
  AND?: InputMaybe<Array<SongVersionsConnectionWhere>>;
  OR?: InputMaybe<Array<SongVersionsConnectionWhere>>;
  NOT?: InputMaybe<SongVersionsConnectionWhere>;
  node?: InputMaybe<VersionWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<VersionWhere>;
};

export type SongVersionsCreateFieldInput = {
  node: VersionCreateInput;
};

export type SongVersionsDeleteFieldInput = {
  where?: InputMaybe<SongVersionsConnectionWhere>;
  delete?: InputMaybe<VersionDeleteInput>;
};

export type SongVersionsDisconnectFieldInput = {
  where?: InputMaybe<SongVersionsConnectionWhere>;
  disconnect?: InputMaybe<VersionDisconnectInput>;
};

export type SongVersionsFieldInput = {
  connect?: InputMaybe<Array<SongVersionsConnectFieldInput>>;
  create?: InputMaybe<Array<SongVersionsCreateFieldInput>>;
};

export type SongVersionsUpdateConnectionInput = {
  node?: InputMaybe<VersionUpdateInput>;
};

export type SongVersionsUpdateFieldInput = {
  where?: InputMaybe<SongVersionsConnectionWhere>;
  connect?: InputMaybe<Array<SongVersionsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<SongVersionsDisconnectFieldInput>>;
  create?: InputMaybe<Array<SongVersionsCreateFieldInput>>;
  update?: InputMaybe<SongVersionsUpdateConnectionInput>;
  delete?: InputMaybe<Array<SongVersionsDeleteFieldInput>>;
};

export type SongWhere = {
  SongId?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  SongId_NOT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_IN?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  SongId_NOT_IN?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  SongId_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT?: InputMaybe<Scalars["String"]["input"]>;
  title_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  title_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  title_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  title_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<SongWhere>>;
  AND?: InputMaybe<Array<SongWhere>>;
  NOT?: InputMaybe<SongWhere>;
  /** @deprecated Use `album_SOME` instead. */
  album?: InputMaybe<AlbumWhere>;
  /** @deprecated Use `album_NONE` instead. */
  album_NOT?: InputMaybe<AlbumWhere>;
  /** Return Songs where all of the related Albums match this filter */
  album_ALL?: InputMaybe<AlbumWhere>;
  /** Return Songs where none of the related Albums match this filter */
  album_NONE?: InputMaybe<AlbumWhere>;
  /** Return Songs where one of the related Albums match this filter */
  album_SINGLE?: InputMaybe<AlbumWhere>;
  /** Return Songs where some of the related Albums match this filter */
  album_SOME?: InputMaybe<AlbumWhere>;
  /** @deprecated Use `albumConnection_SOME` instead. */
  albumConnection?: InputMaybe<SongAlbumConnectionWhere>;
  /** @deprecated Use `albumConnection_NONE` instead. */
  albumConnection_NOT?: InputMaybe<SongAlbumConnectionWhere>;
  /** Return Songs where all of the related SongAlbumConnections match this filter */
  albumConnection_ALL?: InputMaybe<SongAlbumConnectionWhere>;
  /** Return Songs where none of the related SongAlbumConnections match this filter */
  albumConnection_NONE?: InputMaybe<SongAlbumConnectionWhere>;
  /** Return Songs where one of the related SongAlbumConnections match this filter */
  albumConnection_SINGLE?: InputMaybe<SongAlbumConnectionWhere>;
  /** Return Songs where some of the related SongAlbumConnections match this filter */
  albumConnection_SOME?: InputMaybe<SongAlbumConnectionWhere>;
  albumAggregate?: InputMaybe<SongAlbumAggregateInput>;
  /** @deprecated Use `features_SOME` instead. */
  features?: InputMaybe<PersonWhere>;
  /** @deprecated Use `features_NONE` instead. */
  features_NOT?: InputMaybe<PersonWhere>;
  /** Return Songs where all of the related People match this filter */
  features_ALL?: InputMaybe<PersonWhere>;
  /** Return Songs where none of the related People match this filter */
  features_NONE?: InputMaybe<PersonWhere>;
  /** Return Songs where one of the related People match this filter */
  features_SINGLE?: InputMaybe<PersonWhere>;
  /** Return Songs where some of the related People match this filter */
  features_SOME?: InputMaybe<PersonWhere>;
  /** @deprecated Use `featuresConnection_SOME` instead. */
  featuresConnection?: InputMaybe<SongFeaturesConnectionWhere>;
  /** @deprecated Use `featuresConnection_NONE` instead. */
  featuresConnection_NOT?: InputMaybe<SongFeaturesConnectionWhere>;
  /** Return Songs where all of the related SongFeaturesConnections match this filter */
  featuresConnection_ALL?: InputMaybe<SongFeaturesConnectionWhere>;
  /** Return Songs where none of the related SongFeaturesConnections match this filter */
  featuresConnection_NONE?: InputMaybe<SongFeaturesConnectionWhere>;
  /** Return Songs where one of the related SongFeaturesConnections match this filter */
  featuresConnection_SINGLE?: InputMaybe<SongFeaturesConnectionWhere>;
  /** Return Songs where some of the related SongFeaturesConnections match this filter */
  featuresConnection_SOME?: InputMaybe<SongFeaturesConnectionWhere>;
  featuresAggregate?: InputMaybe<SongFeaturesAggregateInput>;
  /** @deprecated Use `versions_SOME` instead. */
  versions?: InputMaybe<VersionWhere>;
  /** @deprecated Use `versions_NONE` instead. */
  versions_NOT?: InputMaybe<VersionWhere>;
  /** Return Songs where all of the related Versions match this filter */
  versions_ALL?: InputMaybe<VersionWhere>;
  /** Return Songs where none of the related Versions match this filter */
  versions_NONE?: InputMaybe<VersionWhere>;
  /** Return Songs where one of the related Versions match this filter */
  versions_SINGLE?: InputMaybe<VersionWhere>;
  /** Return Songs where some of the related Versions match this filter */
  versions_SOME?: InputMaybe<VersionWhere>;
  /** @deprecated Use `versionsConnection_SOME` instead. */
  versionsConnection?: InputMaybe<SongVersionsConnectionWhere>;
  /** @deprecated Use `versionsConnection_NONE` instead. */
  versionsConnection_NOT?: InputMaybe<SongVersionsConnectionWhere>;
  /** Return Songs where all of the related SongVersionsConnections match this filter */
  versionsConnection_ALL?: InputMaybe<SongVersionsConnectionWhere>;
  /** Return Songs where none of the related SongVersionsConnections match this filter */
  versionsConnection_NONE?: InputMaybe<SongVersionsConnectionWhere>;
  /** Return Songs where one of the related SongVersionsConnections match this filter */
  versionsConnection_SINGLE?: InputMaybe<SongVersionsConnectionWhere>;
  /** Return Songs where some of the related SongVersionsConnections match this filter */
  versionsConnection_SOME?: InputMaybe<SongVersionsConnectionWhere>;
  versionsAggregate?: InputMaybe<SongVersionsAggregateInput>;
  /** @deprecated Use `composedBy_SOME` instead. */
  composedBy?: InputMaybe<PersonWhere>;
  /** @deprecated Use `composedBy_NONE` instead. */
  composedBy_NOT?: InputMaybe<PersonWhere>;
  /** Return Songs where all of the related People match this filter */
  composedBy_ALL?: InputMaybe<PersonWhere>;
  /** Return Songs where none of the related People match this filter */
  composedBy_NONE?: InputMaybe<PersonWhere>;
  /** Return Songs where one of the related People match this filter */
  composedBy_SINGLE?: InputMaybe<PersonWhere>;
  /** Return Songs where some of the related People match this filter */
  composedBy_SOME?: InputMaybe<PersonWhere>;
  /** @deprecated Use `composedByConnection_SOME` instead. */
  composedByConnection?: InputMaybe<SongComposedByConnectionWhere>;
  /** @deprecated Use `composedByConnection_NONE` instead. */
  composedByConnection_NOT?: InputMaybe<SongComposedByConnectionWhere>;
  /** Return Songs where all of the related SongComposedByConnections match this filter */
  composedByConnection_ALL?: InputMaybe<SongComposedByConnectionWhere>;
  /** Return Songs where none of the related SongComposedByConnections match this filter */
  composedByConnection_NONE?: InputMaybe<SongComposedByConnectionWhere>;
  /** Return Songs where one of the related SongComposedByConnections match this filter */
  composedByConnection_SINGLE?: InputMaybe<SongComposedByConnectionWhere>;
  /** Return Songs where some of the related SongComposedByConnections match this filter */
  composedByConnection_SOME?: InputMaybe<SongComposedByConnectionWhere>;
  composedByAggregate?: InputMaybe<SongComposedByAggregateInput>;
  /** @deprecated Use `allPlays_SOME` instead. */
  allPlays?: InputMaybe<PlayWhere>;
  /** @deprecated Use `allPlays_NONE` instead. */
  allPlays_NOT?: InputMaybe<PlayWhere>;
  /** Return Songs where all of the related Plays match this filter */
  allPlays_ALL?: InputMaybe<PlayWhere>;
  /** Return Songs where none of the related Plays match this filter */
  allPlays_NONE?: InputMaybe<PlayWhere>;
  /** Return Songs where one of the related Plays match this filter */
  allPlays_SINGLE?: InputMaybe<PlayWhere>;
  /** Return Songs where some of the related Plays match this filter */
  allPlays_SOME?: InputMaybe<PlayWhere>;
  /** @deprecated Use `allPlaysConnection_SOME` instead. */
  allPlaysConnection?: InputMaybe<SongAllPlaysConnectionWhere>;
  /** @deprecated Use `allPlaysConnection_NONE` instead. */
  allPlaysConnection_NOT?: InputMaybe<SongAllPlaysConnectionWhere>;
  /** Return Songs where all of the related SongAllPlaysConnections match this filter */
  allPlaysConnection_ALL?: InputMaybe<SongAllPlaysConnectionWhere>;
  /** Return Songs where none of the related SongAllPlaysConnections match this filter */
  allPlaysConnection_NONE?: InputMaybe<SongAllPlaysConnectionWhere>;
  /** Return Songs where one of the related SongAllPlaysConnections match this filter */
  allPlaysConnection_SINGLE?: InputMaybe<SongAllPlaysConnectionWhere>;
  /** Return Songs where some of the related SongAllPlaysConnections match this filter */
  allPlaysConnection_SOME?: InputMaybe<SongAllPlaysConnectionWhere>;
  allPlaysAggregate?: InputMaybe<SongAllPlaysAggregateInput>;
  /** @deprecated Use `singers_SOME` instead. */
  singers?: InputMaybe<PersonWhere>;
  /** @deprecated Use `singers_NONE` instead. */
  singers_NOT?: InputMaybe<PersonWhere>;
  /** Return Songs where all of the related People match this filter */
  singers_ALL?: InputMaybe<PersonWhere>;
  /** Return Songs where none of the related People match this filter */
  singers_NONE?: InputMaybe<PersonWhere>;
  /** Return Songs where one of the related People match this filter */
  singers_SINGLE?: InputMaybe<PersonWhere>;
  /** Return Songs where some of the related People match this filter */
  singers_SOME?: InputMaybe<PersonWhere>;
  /** @deprecated Use `singersConnection_SOME` instead. */
  singersConnection?: InputMaybe<SongSingersConnectionWhere>;
  /** @deprecated Use `singersConnection_NONE` instead. */
  singersConnection_NOT?: InputMaybe<SongSingersConnectionWhere>;
  /** Return Songs where all of the related SongSingersConnections match this filter */
  singersConnection_ALL?: InputMaybe<SongSingersConnectionWhere>;
  /** Return Songs where none of the related SongSingersConnections match this filter */
  singersConnection_NONE?: InputMaybe<SongSingersConnectionWhere>;
  /** Return Songs where one of the related SongSingersConnections match this filter */
  singersConnection_SINGLE?: InputMaybe<SongSingersConnectionWhere>;
  /** Return Songs where some of the related SongSingersConnections match this filter */
  singersConnection_SOME?: InputMaybe<SongSingersConnectionWhere>;
  singersAggregate?: InputMaybe<SongSingersAggregateInput>;
  /** @deprecated Use `yearReleased_SOME` instead. */
  yearReleased?: InputMaybe<YearWhere>;
  /** @deprecated Use `yearReleased_NONE` instead. */
  yearReleased_NOT?: InputMaybe<YearWhere>;
  /** Return Songs where all of the related Years match this filter */
  yearReleased_ALL?: InputMaybe<YearWhere>;
  /** Return Songs where none of the related Years match this filter */
  yearReleased_NONE?: InputMaybe<YearWhere>;
  /** Return Songs where one of the related Years match this filter */
  yearReleased_SINGLE?: InputMaybe<YearWhere>;
  /** Return Songs where some of the related Years match this filter */
  yearReleased_SOME?: InputMaybe<YearWhere>;
  /** @deprecated Use `yearReleasedConnection_SOME` instead. */
  yearReleasedConnection?: InputMaybe<SongYearReleasedConnectionWhere>;
  /** @deprecated Use `yearReleasedConnection_NONE` instead. */
  yearReleasedConnection_NOT?: InputMaybe<SongYearReleasedConnectionWhere>;
  /** Return Songs where all of the related SongYearReleasedConnections match this filter */
  yearReleasedConnection_ALL?: InputMaybe<SongYearReleasedConnectionWhere>;
  /** Return Songs where none of the related SongYearReleasedConnections match this filter */
  yearReleasedConnection_NONE?: InputMaybe<SongYearReleasedConnectionWhere>;
  /** Return Songs where one of the related SongYearReleasedConnections match this filter */
  yearReleasedConnection_SINGLE?: InputMaybe<SongYearReleasedConnectionWhere>;
  /** Return Songs where some of the related SongYearReleasedConnections match this filter */
  yearReleasedConnection_SOME?: InputMaybe<SongYearReleasedConnectionWhere>;
  yearReleasedAggregate?: InputMaybe<SongYearReleasedAggregateInput>;
};

export type SongYearReleasedAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<SongYearReleasedAggregateInput>>;
  OR?: InputMaybe<Array<SongYearReleasedAggregateInput>>;
  NOT?: InputMaybe<SongYearReleasedAggregateInput>;
  node?: InputMaybe<SongYearReleasedNodeAggregationWhereInput>;
};

export type SongYearReleasedConnectFieldInput = {
  where?: InputMaybe<YearConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<YearConnectInput>>;
};

export type SongYearReleasedConnectionSort = {
  node?: InputMaybe<YearSort>;
};

export type SongYearReleasedConnectionWhere = {
  AND?: InputMaybe<Array<SongYearReleasedConnectionWhere>>;
  OR?: InputMaybe<Array<SongYearReleasedConnectionWhere>>;
  NOT?: InputMaybe<SongYearReleasedConnectionWhere>;
  node?: InputMaybe<YearWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<YearWhere>;
};

export type SongYearReleasedCreateFieldInput = {
  node: YearCreateInput;
};

export type SongYearReleasedDeleteFieldInput = {
  where?: InputMaybe<SongYearReleasedConnectionWhere>;
  delete?: InputMaybe<YearDeleteInput>;
};

export type SongYearReleasedDisconnectFieldInput = {
  where?: InputMaybe<SongYearReleasedConnectionWhere>;
  disconnect?: InputMaybe<YearDisconnectInput>;
};

export type SongYearReleasedFieldInput = {
  connect?: InputMaybe<Array<SongYearReleasedConnectFieldInput>>;
  create?: InputMaybe<Array<SongYearReleasedCreateFieldInput>>;
};

export type SongYearReleasedNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SongYearReleasedNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<SongYearReleasedNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SongYearReleasedNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  year_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  year_MIN_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  year_MAX_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  year_SUM_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  year_AVERAGE_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  year_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  year_MIN_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  year_MAX_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  year_SUM_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  year_AVERAGE_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  year_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  year_MIN_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  year_MAX_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  year_SUM_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  year_AVERAGE_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  year_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  year_MIN_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  year_MAX_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  year_SUM_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  year_AVERAGE_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  year_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  year_MIN_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  year_MAX_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  year_SUM_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  year_AVERAGE_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
};

export type SongYearReleasedUpdateConnectionInput = {
  node?: InputMaybe<YearUpdateInput>;
};

export type SongYearReleasedUpdateFieldInput = {
  where?: InputMaybe<SongYearReleasedConnectionWhere>;
  connect?: InputMaybe<Array<SongYearReleasedConnectFieldInput>>;
  disconnect?: InputMaybe<Array<SongYearReleasedDisconnectFieldInput>>;
  create?: InputMaybe<Array<SongYearReleasedCreateFieldInput>>;
  update?: InputMaybe<SongYearReleasedUpdateConnectionInput>;
  delete?: InputMaybe<Array<SongYearReleasedDeleteFieldInput>>;
};

export type UserCreateInput = {
  username: Scalars["String"]["input"];
};

export type UserOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UserSort>>;
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  username?: InputMaybe<SortDirection>;
};

export type UserUpdateInput = {
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserWhere = {
  username?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  username_NOT?: InputMaybe<Scalars["String"]["input"]>;
  username_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  username_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  username_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  username_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  username_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  username_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  username_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  username_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<UserWhere>>;
  AND?: InputMaybe<Array<UserWhere>>;
  NOT?: InputMaybe<UserWhere>;
};

export type VersionConnectInput = {
  songs?: InputMaybe<Array<VersionSongsConnectFieldInput>>;
};

export type VersionConnectWhere = {
  node: VersionWhere;
};

export type VersionCreateInput = {
  name: VersionType;
  songs?: InputMaybe<VersionSongsFieldInput>;
};

export type VersionDeleteInput = {
  songs?: InputMaybe<Array<VersionSongsDeleteFieldInput>>;
};

export type VersionDisconnectInput = {
  songs?: InputMaybe<Array<VersionSongsDisconnectFieldInput>>;
};

export type VersionOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more VersionSort objects to sort Versions by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<VersionSort>>;
};

export type VersionRelationInput = {
  songs?: InputMaybe<Array<VersionSongsCreateFieldInput>>;
};

export type VersionSongsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<VersionSongsAggregateInput>>;
  OR?: InputMaybe<Array<VersionSongsAggregateInput>>;
  NOT?: InputMaybe<VersionSongsAggregateInput>;
  node?: InputMaybe<VersionSongsNodeAggregationWhereInput>;
};

export type VersionSongsConnectFieldInput = {
  where?: InputMaybe<SongConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<SongConnectInput>>;
};

export type VersionSongsConnectionSort = {
  node?: InputMaybe<SongSort>;
};

export type VersionSongsConnectionWhere = {
  AND?: InputMaybe<Array<VersionSongsConnectionWhere>>;
  OR?: InputMaybe<Array<VersionSongsConnectionWhere>>;
  NOT?: InputMaybe<VersionSongsConnectionWhere>;
  node?: InputMaybe<SongWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<SongWhere>;
};

export type VersionSongsCreateFieldInput = {
  node: SongCreateInput;
};

export type VersionSongsDeleteFieldInput = {
  where?: InputMaybe<VersionSongsConnectionWhere>;
  delete?: InputMaybe<SongDeleteInput>;
};

export type VersionSongsDisconnectFieldInput = {
  where?: InputMaybe<VersionSongsConnectionWhere>;
  disconnect?: InputMaybe<SongDisconnectInput>;
};

export type VersionSongsFieldInput = {
  connect?: InputMaybe<Array<VersionSongsConnectFieldInput>>;
  create?: InputMaybe<Array<VersionSongsCreateFieldInput>>;
};

export type VersionSongsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<VersionSongsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<VersionSongsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<VersionSongsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  SongId_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MIN_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MAX_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_SUM_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_AVERAGE_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  SongId_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MIN_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MAX_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_SUM_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_AVERAGE_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  SongId_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MIN_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MAX_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_SUM_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_AVERAGE_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  SongId_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MIN_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MAX_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_SUM_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_AVERAGE_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  SongId_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MIN_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MAX_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_SUM_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_AVERAGE_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type VersionSongsUpdateConnectionInput = {
  node?: InputMaybe<SongUpdateInput>;
};

export type VersionSongsUpdateFieldInput = {
  where?: InputMaybe<VersionSongsConnectionWhere>;
  connect?: InputMaybe<Array<VersionSongsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<VersionSongsDisconnectFieldInput>>;
  create?: InputMaybe<Array<VersionSongsCreateFieldInput>>;
  update?: InputMaybe<VersionSongsUpdateConnectionInput>;
  delete?: InputMaybe<Array<VersionSongsDeleteFieldInput>>;
};

/** Fields to sort Versions by. The order in which sorts are applied is not guaranteed when specifying many fields in one VersionSort object. */
export type VersionSort = {
  name?: InputMaybe<SortDirection>;
};

export type VersionUpdateInput = {
  name?: InputMaybe<VersionType>;
  songs?: InputMaybe<Array<VersionSongsUpdateFieldInput>>;
};

export type VersionWhere = {
  name?: InputMaybe<VersionType>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<VersionType>;
  name_IN?: InputMaybe<Array<VersionType>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<VersionType>>;
  OR?: InputMaybe<Array<VersionWhere>>;
  AND?: InputMaybe<Array<VersionWhere>>;
  NOT?: InputMaybe<VersionWhere>;
  /** @deprecated Use `songs_SOME` instead. */
  songs?: InputMaybe<SongWhere>;
  /** @deprecated Use `songs_NONE` instead. */
  songs_NOT?: InputMaybe<SongWhere>;
  /** Return Versions where all of the related Songs match this filter */
  songs_ALL?: InputMaybe<SongWhere>;
  /** Return Versions where none of the related Songs match this filter */
  songs_NONE?: InputMaybe<SongWhere>;
  /** Return Versions where one of the related Songs match this filter */
  songs_SINGLE?: InputMaybe<SongWhere>;
  /** Return Versions where some of the related Songs match this filter */
  songs_SOME?: InputMaybe<SongWhere>;
  /** @deprecated Use `songsConnection_SOME` instead. */
  songsConnection?: InputMaybe<VersionSongsConnectionWhere>;
  /** @deprecated Use `songsConnection_NONE` instead. */
  songsConnection_NOT?: InputMaybe<VersionSongsConnectionWhere>;
  /** Return Versions where all of the related VersionSongsConnections match this filter */
  songsConnection_ALL?: InputMaybe<VersionSongsConnectionWhere>;
  /** Return Versions where none of the related VersionSongsConnections match this filter */
  songsConnection_NONE?: InputMaybe<VersionSongsConnectionWhere>;
  /** Return Versions where one of the related VersionSongsConnections match this filter */
  songsConnection_SINGLE?: InputMaybe<VersionSongsConnectionWhere>;
  /** Return Versions where some of the related VersionSongsConnections match this filter */
  songsConnection_SOME?: InputMaybe<VersionSongsConnectionWhere>;
  songsAggregate?: InputMaybe<VersionSongsAggregateInput>;
};

export type YearConnectInput = {
  songs?: InputMaybe<Array<YearSongsConnectFieldInput>>;
};

export type YearConnectWhere = {
  node: YearWhere;
};

export type YearCreateInput = {
  year: Scalars["BigInt"]["input"];
  songs?: InputMaybe<YearSongsFieldInput>;
};

export type YearDeleteInput = {
  songs?: InputMaybe<Array<YearSongsDeleteFieldInput>>;
};

export type YearDisconnectInput = {
  songs?: InputMaybe<Array<YearSongsDisconnectFieldInput>>;
};

export type YearOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more YearSort objects to sort Years by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<YearSort>>;
};

export type YearRelationInput = {
  songs?: InputMaybe<Array<YearSongsCreateFieldInput>>;
};

export type YearSongsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<YearSongsAggregateInput>>;
  OR?: InputMaybe<Array<YearSongsAggregateInput>>;
  NOT?: InputMaybe<YearSongsAggregateInput>;
  node?: InputMaybe<YearSongsNodeAggregationWhereInput>;
};

export type YearSongsConnectFieldInput = {
  where?: InputMaybe<SongConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<SongConnectInput>>;
};

export type YearSongsConnectionSort = {
  node?: InputMaybe<SongSort>;
};

export type YearSongsConnectionWhere = {
  AND?: InputMaybe<Array<YearSongsConnectionWhere>>;
  OR?: InputMaybe<Array<YearSongsConnectionWhere>>;
  NOT?: InputMaybe<YearSongsConnectionWhere>;
  node?: InputMaybe<SongWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<SongWhere>;
};

export type YearSongsCreateFieldInput = {
  node: SongCreateInput;
};

export type YearSongsDeleteFieldInput = {
  where?: InputMaybe<YearSongsConnectionWhere>;
  delete?: InputMaybe<SongDeleteInput>;
};

export type YearSongsDisconnectFieldInput = {
  where?: InputMaybe<YearSongsConnectionWhere>;
  disconnect?: InputMaybe<SongDisconnectInput>;
};

export type YearSongsFieldInput = {
  connect?: InputMaybe<Array<YearSongsConnectFieldInput>>;
  create?: InputMaybe<Array<YearSongsCreateFieldInput>>;
};

export type YearSongsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<YearSongsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<YearSongsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<YearSongsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  SongId_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MIN_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MAX_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_SUM_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_AVERAGE_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  SongId_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MIN_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MAX_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_SUM_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_AVERAGE_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  SongId_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MIN_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MAX_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_SUM_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_AVERAGE_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  SongId_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MIN_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MAX_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_SUM_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_AVERAGE_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  SongId_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MIN_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_MAX_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_SUM_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  SongId_AVERAGE_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type YearSongsUpdateConnectionInput = {
  node?: InputMaybe<SongUpdateInput>;
};

export type YearSongsUpdateFieldInput = {
  where?: InputMaybe<YearSongsConnectionWhere>;
  connect?: InputMaybe<Array<YearSongsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<YearSongsDisconnectFieldInput>>;
  create?: InputMaybe<Array<YearSongsCreateFieldInput>>;
  update?: InputMaybe<YearSongsUpdateConnectionInput>;
  delete?: InputMaybe<Array<YearSongsDeleteFieldInput>>;
};

/** Fields to sort Years by. The order in which sorts are applied is not guaranteed when specifying many fields in one YearSort object. */
export type YearSort = {
  year?: InputMaybe<SortDirection>;
};

export type YearUpdateInput = {
  year?: InputMaybe<Scalars["BigInt"]["input"]>;
  year_INCREMENT?: InputMaybe<Scalars["BigInt"]["input"]>;
  year_DECREMENT?: InputMaybe<Scalars["BigInt"]["input"]>;
  songs?: InputMaybe<Array<YearSongsUpdateFieldInput>>;
};

export type YearWhere = {
  year?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  year_NOT?: InputMaybe<Scalars["BigInt"]["input"]>;
  year_IN?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  year_NOT_IN?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  year_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  year_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  year_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  year_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  OR?: InputMaybe<Array<YearWhere>>;
  AND?: InputMaybe<Array<YearWhere>>;
  NOT?: InputMaybe<YearWhere>;
  /** @deprecated Use `songs_SOME` instead. */
  songs?: InputMaybe<SongWhere>;
  /** @deprecated Use `songs_NONE` instead. */
  songs_NOT?: InputMaybe<SongWhere>;
  /** Return Years where all of the related Songs match this filter */
  songs_ALL?: InputMaybe<SongWhere>;
  /** Return Years where none of the related Songs match this filter */
  songs_NONE?: InputMaybe<SongWhere>;
  /** Return Years where one of the related Songs match this filter */
  songs_SINGLE?: InputMaybe<SongWhere>;
  /** Return Years where some of the related Songs match this filter */
  songs_SOME?: InputMaybe<SongWhere>;
  /** @deprecated Use `songsConnection_SOME` instead. */
  songsConnection?: InputMaybe<YearSongsConnectionWhere>;
  /** @deprecated Use `songsConnection_NONE` instead. */
  songsConnection_NOT?: InputMaybe<YearSongsConnectionWhere>;
  /** Return Years where all of the related YearSongsConnections match this filter */
  songsConnection_ALL?: InputMaybe<YearSongsConnectionWhere>;
  /** Return Years where none of the related YearSongsConnections match this filter */
  songsConnection_NONE?: InputMaybe<YearSongsConnectionWhere>;
  /** Return Years where one of the related YearSongsConnections match this filter */
  songsConnection_SINGLE?: InputMaybe<YearSongsConnectionWhere>;
  /** Return Years where some of the related YearSongsConnections match this filter */
  songsConnection_SOME?: InputMaybe<YearSongsConnectionWhere>;
  songsAggregate?: InputMaybe<YearSongsAggregateInput>;
};

export interface AlbumAggregateSelectionInput {
  count?: boolean;
  AlbumId?: boolean;
  title?: boolean;
}

export declare class AlbumModel {
  public find(args?: {
    where?: AlbumWhere;

    options?: AlbumOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Album[]>;
  public create(args: {
    input: AlbumCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateAlbumsMutationResponse>;
  public update(args: {
    where?: AlbumWhere;
    update?: AlbumUpdateInput;
    connect?: AlbumConnectInput;
    disconnect?: AlbumDisconnectInput;
    create?: AlbumCreateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateAlbumsMutationResponse>;
  public delete(args: {
    where?: AlbumWhere;
    delete?: AlbumDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: AlbumWhere;

    aggregate: AlbumAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<AlbumAggregateSelection>;
}

export interface EditionAggregateSelectionInput {
  count?: boolean;
}

export declare class EditionModel {
  public find(args?: {
    where?: EditionWhere;

    options?: EditionOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Edition[]>;
  public create(args: {
    input: EditionCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateEditionsMutationResponse>;
  public update(args: {
    where?: EditionWhere;
    update?: EditionUpdateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateEditionsMutationResponse>;
  public delete(args: {
    where?: EditionWhere;

    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: EditionWhere;

    aggregate: EditionAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<EditionAggregateSelection>;
}

export interface PersonAggregateSelectionInput {
  count?: boolean;
  name?: boolean;
}

export declare class PersonModel {
  public find(args?: {
    where?: PersonWhere;

    options?: PersonOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Person[]>;
  public create(args: {
    input: PersonCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreatePeopleMutationResponse>;
  public update(args: {
    where?: PersonWhere;
    update?: PersonUpdateInput;
    connect?: PersonConnectInput;
    disconnect?: PersonDisconnectInput;
    create?: PersonCreateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdatePeopleMutationResponse>;
  public delete(args: {
    where?: PersonWhere;
    delete?: PersonDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: PersonWhere;

    aggregate: PersonAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<PersonAggregateSelection>;
}

export interface PlayAggregateSelectionInput {
  count?: boolean;
  month?: boolean;
}

export declare class PlayModel {
  public find(args?: {
    where?: PlayWhere;

    options?: PlayOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Play[]>;
  public create(args: {
    input: PlayCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreatePlaysMutationResponse>;
  public update(args: {
    where?: PlayWhere;
    update?: PlayUpdateInput;
    connect?: PlayConnectInput;
    disconnect?: PlayDisconnectInput;
    create?: PlayCreateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdatePlaysMutationResponse>;
  public delete(args: {
    where?: PlayWhere;
    delete?: PlayDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: PlayWhere;

    aggregate: PlayAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<PlayAggregateSelection>;
}

export interface SongAggregateSelectionInput {
  count?: boolean;
  SongId?: boolean;
  title?: boolean;
}

export declare class SongModel {
  public find(args?: {
    where?: SongWhere;

    options?: SongOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Song[]>;
  public create(args: {
    input: SongCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateSongsMutationResponse>;
  public update(args: {
    where?: SongWhere;
    update?: SongUpdateInput;
    connect?: SongConnectInput;
    disconnect?: SongDisconnectInput;
    create?: SongCreateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateSongsMutationResponse>;
  public delete(args: {
    where?: SongWhere;
    delete?: SongDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: SongWhere;

    aggregate: SongAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<SongAggregateSelection>;
}

export interface UserAggregateSelectionInput {
  count?: boolean;
  username?: boolean;
}

export declare class UserModel {
  public find(args?: {
    where?: UserWhere;

    options?: UserOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<User[]>;
  public create(args: {
    input: UserCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateUsersMutationResponse>;
  public update(args: {
    where?: UserWhere;
    update?: UserUpdateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateUsersMutationResponse>;
  public delete(args: {
    where?: UserWhere;

    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: UserWhere;

    aggregate: UserAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<UserAggregateSelection>;
}

export interface VersionAggregateSelectionInput {
  count?: boolean;
}

export declare class VersionModel {
  public find(args?: {
    where?: VersionWhere;

    options?: VersionOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Version[]>;
  public create(args: {
    input: VersionCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateVersionsMutationResponse>;
  public update(args: {
    where?: VersionWhere;
    update?: VersionUpdateInput;
    connect?: VersionConnectInput;
    disconnect?: VersionDisconnectInput;
    create?: VersionCreateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateVersionsMutationResponse>;
  public delete(args: {
    where?: VersionWhere;
    delete?: VersionDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: VersionWhere;

    aggregate: VersionAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<VersionAggregateSelection>;
}

export interface YearAggregateSelectionInput {
  count?: boolean;
  year?: boolean;
}

export declare class YearModel {
  public find(args?: {
    where?: YearWhere;

    options?: YearOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Year[]>;
  public create(args: {
    input: YearCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateYearsMutationResponse>;
  public update(args: {
    where?: YearWhere;
    update?: YearUpdateInput;
    connect?: YearConnectInput;
    disconnect?: YearDisconnectInput;
    create?: YearCreateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateYearsMutationResponse>;
  public delete(args: {
    where?: YearWhere;
    delete?: YearDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: YearWhere;

    aggregate: YearAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<YearAggregateSelection>;
}

export interface PlayBreakdownAggregateSelectionInput {
  count?: boolean;
  playCount?: boolean;
}

export declare class PlayBreakdownModel {
  public find(args?: {
    where?: PlayBreakdownWhere;

    options?: PlayBreakdownOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<PlayBreakdown[]>;
  public create(args: {
    input: PlayBreakdownCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreatePlayBreakdownsMutationResponse>;
  public update(args: {
    where?: PlayBreakdownWhere;
    update?: PlayBreakdownUpdateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdatePlayBreakdownsMutationResponse>;
  public delete(args: {
    where?: PlayBreakdownWhere;

    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: PlayBreakdownWhere;

    aggregate: PlayBreakdownAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<PlayBreakdownAggregateSelection>;
}

export interface MonthlyPlaysForSongResponseAggregateSelectionInput {
  count?: boolean;
  title?: boolean;
  versionCount?: boolean;
  totalPlays?: boolean;
}

export declare class MonthlyPlaysForSongResponseModel {
  public find(args?: {
    where?: MonthlyPlaysForSongResponseWhere;

    options?: MonthlyPlaysForSongResponseOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<MonthlyPlaysForSongResponse[]>;
  public create(args: {
    input: MonthlyPlaysForSongResponseCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateMonthlyPlaysForSongResponsesMutationResponse>;
  public update(args: {
    where?: MonthlyPlaysForSongResponseWhere;
    update?: MonthlyPlaysForSongResponseUpdateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateMonthlyPlaysForSongResponsesMutationResponse>;
  public delete(args: {
    where?: MonthlyPlaysForSongResponseWhere;

    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: MonthlyPlaysForSongResponseWhere;

    aggregate: MonthlyPlaysForSongResponseAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<MonthlyPlaysForSongResponseAggregateSelection>;
}

export interface ModelMap {
  Album: AlbumModel;
  Edition: EditionModel;
  Person: PersonModel;
  Play: PlayModel;
  Song: SongModel;
  User: UserModel;
  Version: VersionModel;
  Year: YearModel;
  PlayBreakdown: PlayBreakdownModel;
  MonthlyPlaysForSongResponse: MonthlyPlaysForSongResponseModel;
}
