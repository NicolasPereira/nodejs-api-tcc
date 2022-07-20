import { prismaClient } from '../../database/prismaClient';

export class CreateUserController {
    async handle(request, response) {
        const {nome, email, password} = request.body;
        const user = await prismaClient.user.create({
            data: {
                nome,
                email,
                password
            }
        })
        return response.json(`Usuario criado com sucesso - ID: ${user.id}`)
    }
}