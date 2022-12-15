import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { authConfig } from '../config';

class AuthHandler {
  public static handle(req: Request, res: Response, next: NextFunction) {
    let token = req.headers.authorization;

    try {
      if (!token || !token.includes('Bearer')) {
        return res.status(401).json({ message: 'Access denied' });
      }

      token = token.replace('Bearer ', '');

      const verified = verify(token, authConfig.secret);

      if (!verified)
        return res
          .status(401)
          .json({ message: 'Token verification failed, authorization denied!' });

      next();
    } catch (error) {
      next(error);
    }
  }
}

export default AuthHandler;
