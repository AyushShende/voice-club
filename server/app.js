import express from 'express';
import 'express-async-errors';
import { authRouter } from './routes/index.js';
import errorHandler from './middlewares/errorHandler.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();

app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000'],
  })
);
app.use(express.json({ limit: '8mb' }));
app.use('/storage', express.static('storage'));
app.use('/api', authRouter);

app.use(errorHandler);
export default app;
