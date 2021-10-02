import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { connect } from './db';
import { signup } from './handlers/signup';

const run = async () => {
    await connect(process.env.mongo_uri || '');
    console.log('Connected to db');

    const app = express();

    // body parser
    app.use(express.json());

    // routes
    app.get('/', (req, res) => res.json({ service: 'auth-service' }));
    app.post('/signup', signup);

    console.log('Listening on port', process.env.port || 3001);
    app.listen(process.env.port || 3001);
};

run().catch((err) => console.error(err));
