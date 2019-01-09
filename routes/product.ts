import Router from 'koa-router';
import ProductInfo from '../entities/ProductInfo';
import { ProductService } from '../services/ProductService';

const router = new Router();

router
  .get('/', async (ctx, next) => {
    ctx.body = await ProductService.findUpAll()
  })
  .get('/:id', async (ctx, next) => {
    ctx.body = await ProductService.findOne(ctx.params.id)
  })
  .post('/', async (ctx, next) => {
    ctx.body = await ProductService.create(ctx.request.body)
  })
  .put('/:id', async (ctx, next) => {
    ctx.body = await ProductService.update(ctx.params.id, ctx.request.body)
  })
  .del('/:id', async(ctx, next) => {
    ctx.body = await ProductService.destroy(ctx.params.id)
  })

export = router;
