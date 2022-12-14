import { NextFunction, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import ITodoCard from '../interfaces/ITodoCard';

class ValidationHandler {
  public static handle(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }

  public static getBodyValidationsMiddlewares() {
    return [
      body('title').notEmpty().withMessage('title is empty'),
      body('content').notEmpty().withMessage('content is empty'),
      body('list').notEmpty().withMessage('list is empty'),
    ];
  }
}

export default ValidationHandler;
