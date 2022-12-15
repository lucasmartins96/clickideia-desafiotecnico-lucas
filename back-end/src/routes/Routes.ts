import { Router } from 'express';
import AuthHandler from '../middlewares/AuthHandler';
import authRoute from './Auth';
import todoCardRoute from './TodoCard';

const routes = Router();

routes.use('/login', authRoute);

routes.use('/cards', AuthHandler.handle, todoCardRoute);

export default routes;
