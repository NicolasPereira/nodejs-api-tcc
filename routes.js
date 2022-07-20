import 'dotenv/config';
import express from 'express';
import { CreateUserController } from './src/controllers/createUserController.js';

const routes = express.Router();

const createUser = new CreateUserController();

routes.get("/", (req, res) => {
    applicationName = process.env.APP_NAME;
    res.send(`Hi Node and Docker!!! ${applicationName}`);
  });

routes.post('/user',(req, res) => {
    createUser.handle(req, res);
});

export { routes };