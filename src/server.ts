import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';

// Init Express
const app = express();

const httpServer = http.createServer(app)
  .on('listening', () => console.log(`🚀 Server ready at http://localhost:4000`))
  .on('error', (e) => {
    if (e.name === 'EADDRINUSE') {
      console.error('Address in use ...');
      httpServer.close();
    }
  });

// The GraphQL schema
const typeDefs = `#graphql
  type Query {
    foo: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    foo: () => 'bar',
  },
};

// Init Apollo Server
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

function addMiddlewares(app: express.Express): void {
  // graphql
  app.use(
    cors(),
    bodyParser.json(),
    expressMiddleware(apolloServer),
  );

  // custom 404
  app.use((_req, res, _next) => {
    res.status(404).send("Sorry can't find that!")
  });

  // custom error handler
  app.use((err, _req, res, next) => {
    console.error(err.stack);
    if (res.headersSent) {
      return next(err);
    }
    res.status(500);
    res.render('error', { error: err })  });
}

apolloServer.start()
  .then(() => addMiddlewares(app))
  .then(() => new Promise((resolve) => httpServer.listen({ port: 4000 }, () => resolve(null))));

// Global Teardown
process.on('SIGTERM', function () {
  httpServer.close(() => console.log('HTTP server closed'));
});
