import { NextFunction, Request, Response } from 'express';
import { body, ValidationError, validationResult } from 'express-validator';

class ValidationHandler {
  public static handle(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const message = ValidationHandler.getErrorMessage(errors.mapped());
      return res.status(400).json({ message });
    }
    next();
  }

  private static getErrorMessage(errors: Record<string, ValidationError>) {
    return Object.keys(errors).reduce((accumulator, currentKey) => {
      return accumulator.concat(errors[currentKey].msg);
    }, '');
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
