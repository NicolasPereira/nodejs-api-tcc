import { prismaClient } from "../../../database/prismaClient.js";
import { comparePassword } from "../utils/decrypt.js";
import { generateToken } from "../utils/generateToken.js";
import { StatusCodes } from "http-status-codes";

export class AuthController {
  async authenticate(request, response) {
    const { email, password } = request.body;
    const user = await prismaClient.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return response
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: "Usuário ou senha incorreta!" });
    }

    if (!user.active_account) {
      return response
        .status(StatusCodes.FORBIDDEN)
        .json({ message: "Usuário desativado" });
    }

    const validatePassword = await comparePassword(password, user.password);

    if (!validatePassword) {
      return response
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: "Usuário ou senha incorreta!" });
    }

    delete user.password;

    const token = await generateToken(user);

    return response.status(StatusCodes.OK).json({
      user,
      token,
    });
  }
}
