import { Router } from 'express';
import TodoCardController from '../controllers/TodoCardController';
import AuthHandler from '../middlewares/AuthHandler';
import ValidationHandler from '../middlewares/ValidationHandler';

const routes = Router();
const validationsMiddlewares = ValidationHandler.getBodyValidationsMiddlewares();

routes
  .route('/cards')
  .post(
    AuthHandler.handle,
    ...validationsMiddlewares,
    ValidationHandler.handle,
    (req, res, next) => new TodoCardController(req, res, next).create()
  )
  .get(AuthHandler.handle, (req, res, next) =>
    new TodoCardController(req, res, next).getAll()
  );

export default routes;
