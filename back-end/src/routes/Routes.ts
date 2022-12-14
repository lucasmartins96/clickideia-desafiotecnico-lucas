// src/Routes/Routes.ts

import { Router } from 'express';
import TodoCardController from '../controllers/TodoCardController';
import ValidationHandler from '../middlewares/ValidationHandler';

const routes = Router();

routes
  .route('/cards')
  .post(
    ...ValidationHandler.getBodyValidationsMiddlewares(),
    ValidationHandler.handle,
    (req, res, next) => new TodoCardController(req, res, next).create()
  );
// .get((req, res, next) => new TodoCardController(req, res, next).create());

export default routes;
