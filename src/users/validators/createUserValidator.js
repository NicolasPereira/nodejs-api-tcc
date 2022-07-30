import {body} from 'express-validator'
import { validatePayloadMiddleware } from '../middlewares/payloadValidatorMiddleware.js'

const createUserValidator = 
    [
        body('name').notEmpty().withMessage('O campo nome é obrigatório'),
        body('email').notEmpty().withMessage('O campo email é obrigatório'),
        body('email').isEmail().withMessage('O campo email esta incorreto'),
        body('password').notEmpty().withMessage('O campo senha é obrigatório'),
        body('password').isLength({min: 5}).withMessage('A senha deve ter no minimo 5 caracteres'),
        validatePayloadMiddleware
    ];

export {createUserValidator}
