import { NextFunction, Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { authConfig } from '../config';
import ILogin from '../interfaces/ILogin';

class AuthController {
  private req: Request;
  private res: Response;
  private next: NextFunction;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
  }

  public async login() {
    const loginPayload: ILogin = {
      login: this.req.body.login,
      password: this.req.body.password,
    };

    if (!this.isValidLogin(loginPayload)) {
      return this.res.status(404).json({ message: 'login not found' });
    }

    const token = sign(loginPayload, authConfig.secret, {
      expiresIn: authConfig.expires,
    });

    try {
      return this.res.status(200).json({ token });
    } catch (error) {
      this.next(error);
    }
  }

  public isValidLogin(payload: ILogin) {
    const { login, password } = authConfig;

    if (payload.login != login || payload.password != password) {
      return false;
    }
    return true;
  }
}

export default AuthController;
