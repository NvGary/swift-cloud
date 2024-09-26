# swift-cloud
The #1 app for Swifties!

## API Description
This API leverages GraphQL to analyse and present song play-out data in a highly discoverable manner. Some knowledge of GraphQL is required to make the most of this API.

### Intallation
After pulling the codebase from github please open a terminal in the root directory of the repo and execute
`npm install`.

If you do not have Node or NPM installed please [obtain these]('https://docs.npmjs.com/downloading-and-installing-node-js-and-npm') before attempting the above command.

## Connecting to Neo4j
This API uses a neo4j instance as a data container. Connection credentials are required to access the hosted instance. Please reach out to the author to obtain these credentials.

### Running
Once installion has completed and neo4j crednentials have been obtained and stored into the local repo, please open a terminal in the root directory of the repo and execute `npm run start`. You will eventually see the following console message `Server ready at http://localhost:4000`.
Any other message should be treated as an error message and will need investigation.

Open your favourite browser and navigate to <http://localhost:4000>. Enjoy!

## Samples
Some sample graphql queries have been composed to get you started. Click [here](SAMPLES.md) to view them.

## CAUTION
The backend neo4j is a temporary sandbox instance will expire on 04 Oct 2024. It also does not have any security roles defined so the provided credentials are administrative. PLEASE EXERCISE CAUTION and do not execute MUTATIONS.