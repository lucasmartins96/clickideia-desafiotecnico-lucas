import { Router } from 'express';
import AuthController from '../controllers/AuthController';

const authRoute = Router();

authRoute.post('/', (req, res, next) => new AuthController(req, res, next).login());

export default authRoute;
