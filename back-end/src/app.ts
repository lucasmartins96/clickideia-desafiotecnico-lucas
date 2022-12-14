import express from 'express';
import ErrorHandler from './middlewares/ErrorHandler';
import routes from './routes/Routes';

const app = express();
app.use(express.json());
app.use(routes);
app.use(ErrorHandler.handle);

export default app;
