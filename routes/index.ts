import Router from 'koa-router';

const router = new Router();

router.use('/product', require('./product').routes())

export default router
