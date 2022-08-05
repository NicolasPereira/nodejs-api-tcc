import dotenv from 'dotenv'
import express from 'express';
import { CreateUserController } from './src/users/controllers/createUserController.js';
import { AuthController } from './src/auth/controllers/authController.js'
import {createUserValidator} from './src/users/validators/createUserValidator.js'
import {loginValidator} from './src/auth/validators/loginValidator.js'
import { authMiddleware } from './src/shared/middlewares/authMiddleware.js';

const routes = express.Router();

const createUser = new CreateUserController();
const authUserController = new AuthController(); 

routes.post("/", authMiddleware, (req, res) => {
    const applicationName = process.env.APP_NAME;
    
    res.json({
      "message" : `Hi Node and Docker!!! ${applicationName} - ${req.userName}`
    });

  });

routes.post('/user', createUserValidator, createUser.handle);

routes.post('/login', loginValidator, authUserController.authenticate);

export { routes };
