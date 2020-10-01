import * as Koa from 'koa';
import * as Router from 'koa-router';
import users from './users/users';

/**
 * @param  {Koa} koa - Koa instance
 */
export default (koa: Koa) => {
  const router = new Router();

  /** Routes */
  koa.use(router.routes()).use(router.allowedMethods());
  users(router);
};
