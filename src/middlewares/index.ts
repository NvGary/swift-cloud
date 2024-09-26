import type { ApolloServer, BaseContext } from '@apollo/server';
import bodyParser from 'body-parser';
import cors from 'cors';
import type { ErrorRequestHandler, Request, RequestHandler, Response } from 'express';

import {middleware as graphqlHandler} from './graphql';

// custom 404
const http404Handler = (_req: Request, res: Response) => {
        res.status(404).send("Sorry can't find that!")
}

// custom errorHandler
const errorHandler: ErrorRequestHandler = (err: Error, _req, res, next) => {
    console.error(err.stack);
    if (res.headersSent) {
        return next(err);
    }
    res.status(500);
    res.render('error', { error: err });
}

export function buildList({ apolloServer }: { apolloServer: ApolloServer<BaseContext>}): (ErrorRequestHandler | RequestHandler)[] {
    return [
        (cors as () => RequestHandler)(),
        bodyParser.json(),
        graphqlHandler({ apolloServer }),
        http404Handler,
        errorHandler,
    ];
}
