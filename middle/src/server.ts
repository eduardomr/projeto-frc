//* Main file for express configuration
import 'express-async-errors';

import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import handleCommonError from './middlewares/handleCommonError';
import handlePrismaError from './middlewares/handlePrismaError';
import indexRouter from './routes/index.route';
import env from './utils/env-util';

const server = express();

const cors = require("cors");

server.use(cors());

//* Middlewares
if (env.NODE_ENV !== "production") {
  server.use(morgan("dev"));
}
server.use(helmet());
server.use(express.json());

//* The routes are being created in the routes folder
server.use("/", indexRouter);

//* Prisma Error handler
server.use(handlePrismaError);
server.use(handleCommonError);

//* Get port from environment and store in Express.
server.set("port", env.PORT);

export default server;
