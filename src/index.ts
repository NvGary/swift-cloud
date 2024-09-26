import express from 'express';
import http from 'http';

import { init } from './graphql/server';
import * as middlewares from './middlewares';

const main = async () => {
    process.on('SIGTERM', () => {
        httpServer?.close();
    });

    const app = express();

    const httpServer = http.createServer(app)
        .on('listening', () => console.log(`🚀 Server ready at http://localhost:4000`))
        .on('close', () => console.log('closing HTTP server'))
        .on('error', (e) => {
            if (e.name === 'EADDRINUSE') {
                console.error('Address in use ...');
                httpServer.close();
            }
        });

    const apolloServer = await init({ httpServer });
    await apolloServer.start();

    app.use(...middlewares.buildList({ apolloServer }))
    httpServer.listen({ port: 4000 });
};

void main();
