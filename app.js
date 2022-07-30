import express from 'express';
import { routes } from './routes.js';
import { validatePayloadMiddleware } from './src/users/middlewares/payloadValidatorMiddleware.js';
const app = express();

app.use(express.json());
app.use(routes);

export { app };