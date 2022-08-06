import dotenv from 'dotenv'
import express from 'express';
import { CreateUserController } from './src/users/controllers/createUserController.js';
import { AuthController } from './src/auth/controllers/authController.js'
import {createUserValidator} from './src/users/validators/createUserValidator.js'
import {loginValidator} from './src/auth/validators/loginValidator.js'
import { authMiddleware } from './src/shared/middlewares/authMiddleware.js';
import { config } from './src/shared/config/config.js';

const routes = express.Router();

const createUser = new CreateUserController();
const authUserController = new AuthController(); 

routes.post("/", authMiddleware, (req, res) => {
    const applicationName = config.APP_NAME;
    
    res.json({
      "message" : `Hi Node and Docker!!! ${applicationName} - ${req.userName}`
    });

  });

routes.post('/user', createUserValidator, createUser.handle);

routes.post('/login', loginValidator, authUserController.authenticate);

export { routes };
