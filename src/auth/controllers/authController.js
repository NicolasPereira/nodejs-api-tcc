import { prismaClient } from '../../../database/prismaClient.js';
import { comparePassword } from '../utils/decrypt.js';
import jwt from 'jsonwebtoken';

export class AuthController {
    async authenticate(request, response) {
        const {email, password} = request.body;
        const user = await prismaClient.user.findUnique({
            where: {
              email: email
            },
          })
        
        if (!user) {
            return response.status(401).json({message:"Usuário ou senha incorreta!"})
        }

        if (!user.active_account) {
            return response.status(401).json({message:"Usuário desativado"})
        }

        const validatePassword = await comparePassword(password, user.password);
        
        if (!validatePassword) {
            return response.status(401).json({message:"Senha Incorreta"})
        }

        delete user.password;
        const token = jwt.sign({user: user}, process.env.SECRET);
          return response.status(200).json({
              message: "Usuário autenticado",
              user,
              token
          })
    }
}
