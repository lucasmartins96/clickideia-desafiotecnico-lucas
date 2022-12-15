import { Router } from 'express';
import AuthController from '../controllers/AuthController';

const authRoute = Router();

authRoute.post('/login', (req, res, next) => new AuthController(req, res, next).login());

export default authRoute;
