import * as Koa from 'koa';

import * as logger from 'koa-logger';
import * as json from 'koa-json';
import * as bodyParser from 'koa-bodyparser';
import Controller from './controllers/index';

const koa = new Koa();

const PORT = 3003;

Controller(koa);

/** Middlewares */
koa.use(json());
koa.use(logger());
koa.use(bodyParser());

koa.listen(PORT, () => console.log('Server started.'));
