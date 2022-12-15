import { Router } from 'express';
import TodoCardController from '../controllers/TodoCardController';
import ValidationHandler from '../middlewares/ValidationHandler';

const todoCardRoute = Router();
const validationsMiddlewares = ValidationHandler.getBodyValidationsMiddlewares();

todoCardRoute
  .route('/:id')
  .delete(ValidationHandler.handleParamId, (req, res, next) =>
    new TodoCardController(req, res, next).deleteById()
  )
  .put(
    ...validationsMiddlewares,
    ValidationHandler.handle,
    ValidationHandler.handleParamId,
    (req, res, next) => new TodoCardController(req, res, next).updateById()
  );

todoCardRoute
  .route('/')
  .post(...validationsMiddlewares, ValidationHandler.handle, (req, res, next) =>
    new TodoCardController(req, res, next).create()
  )
  .get((req, res, next) => new TodoCardController(req, res, next).getAll());

export default todoCardRoute;
