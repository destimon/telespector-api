import Router from 'koa-router';

/**
 * @param  {Router} router - Koa router instance
 */
const users = (router: Router) => {
  router.get('/api/users', async (ctx, next) => {
    ctx.body = { message: 'This is your GET route users!' };

    await next();
  });
};

export default users;
