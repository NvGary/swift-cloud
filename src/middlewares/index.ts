import cors from 'cors';
import bodyParser from 'body-parser';
import {middleware as graphqlHandler} from './graphql';

// custom 404
const http404Handler = (_req, res, _next) => {
        res.status(404).send("Sorry can't find that!")
}

// custom errorHandler
const errorHandler = (err, _req, res, next) => {
    console.error(err.stack);
    if (res.headersSent) {
        return next(err);
    }
    res.status(500);
    res.render('error', { error: err });
}
  
export function buildList({ apolloServer }): Array<any> {
    return [
        cors(),
        bodyParser.json(),
        graphqlHandler({ apolloServer }),
        http404Handler,
        errorHandler,
    ];
}
