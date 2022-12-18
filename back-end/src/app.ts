import express from 'express';
import ErrorHandler from './middlewares/ErrorHandler';
import routes from './routes/Routes';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(ErrorHandler.handle);

export default app;
