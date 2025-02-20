import express from 'express';
import userRouter from './user-router.js';
import itemRouter from './item-router.js';
import quarterRouter from './quarter-routes.js';
import lockerRouter from './locker-routes.js';
import { PrismaClient } from '@prisma/client';
import { errorMiddleWare } from '../middlewares/express-error-middleware.js';

const app = express();
app.use(express.json());
app.use(userRouter);
app.use(itemRouter);
app.use(quarterRouter);
app.use(lockerRouter)

export const prisma = new PrismaClient({});


//$ Whenever a controller will throw an exception, this middleware will be called.
app.use(errorMiddleWare);
//$ As long as the function that we pass is a function with the "four parameters", Express will consider a valid error middleware.









//* I exported the app for testing vitest:
export default app;

