import express from 'express';
import ErrorHandler from './middlewares/ErrorHandler';
import authRoute from './routes/Auth';
import routes from './routes/Routes';

const app = express();
app.use(express.json());
app.use(authRoute);
app.use(routes);
app.use(ErrorHandler.handle);

export default app;
