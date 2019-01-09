import Koa from 'koa';
import logger from 'koa-logger';
import error from 'koa-json-error';
import bodyParser from 'koa-bodyparser';
import { createConnection } from 'typeorm';
import router from './routes';

const app = new Koa();
createConnection(require('./config/ormconfig'));

// middleware start

app
  .use(logger())
  .use(error())

  .use(bodyParser())

  // response
  .use(router.routes())
  .use(router.allowedMethods())

// middleware end

app.listen(3000);
