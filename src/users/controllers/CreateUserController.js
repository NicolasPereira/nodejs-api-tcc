import { Prisma } from '@prisma/client';
import { prismaClient } from '../../../database/prismaClient.js';
import { encryptPassword } from  '../utils/encrypt.js';

export class CreateUserController {
    async handle(request, response) {
        const {name, email, password} = request.body;
        const hashPassword =  await encryptPassword(password)
        try {
            const user = await prismaClient.user.create({
                data: {
                    name,
                    email,
                    password: hashPassword
                }
            })

            return response.json({message:`Usuario criado com sucesso - ID: ${user.id}`})
          
        } catch (e) {
            console.log(e);
            if(e instanceof Prisma.PrismaClientKnownRequestError) {
                
                return response.status(e.errorCode).json({
                    errorCode: e.errorCode,
                    message: e.message
                })
            }
            return response.json({e})
        }
    }
}