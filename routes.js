import dotenv from 'dotenv'
import express from 'express';
import { CreateUserController } from './src/users/controllers/createUserController.js';

const routes = express.Router();

const createUser = new CreateUserController();

routes.get("/", (req, res) => {
    const applicationName = process.env.APP_NAME;
    res.send(`Hi Node and Docker!!! ${applicationName}`);
  });

routes.post('/user',(req, res) => {
    createUser.handle(req, res);
});

export { routes };