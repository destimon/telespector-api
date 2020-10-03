import * as Koa from 'koa';

import * as logger from 'koa-logger';
import * as json from 'koa-json';
import * as bodyParser from 'koa-bodyparser';
import Controller from './controllers/index';
import { ConnectDB } from './db/connection';

const koa = new Koa();

const PORT = process.env.PORT || 3000;

Controller(koa);

/** Middlewares */
koa.use(json());
koa.use(logger());
koa.use(bodyParser());

ConnectDB();

koa.listen(PORT, () => console.log('Server started.'));
