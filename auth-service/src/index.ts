import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { Request, Response, NextFunction } from 'express';
import { connect } from './db';
import { signup } from './handlers/signup';

const run = async () => {
    if (!process.env.secret) {
        console.error("Missing 'secret' env variable");
        return;
    }

    await connect(process.env.mongo_uri || '');
    console.log('Connected to db');

    const app = express();

    // body parser
    app.use(express.json());

    // catch errors
    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        console.error(err);
        res.status(500).json({
            code: 500,
            error: 'Something unexpected happened',
        });
    });

    // routes
    app.get('/', (req, res) => res.json({ service: 'auth-service' }));
    app.post('/signup', signup);

    console.log('Listening on port', process.env.port || 3001);
    app.listen(process.env.port || 3001);
};

run().catch((err) => console.error(err));
