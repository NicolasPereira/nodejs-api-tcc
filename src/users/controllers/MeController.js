import { findUserById } from "../repository/findUserByIdRepository.js";
import { StatusCodes } from "http-status-codes";

export class MeController {
  async handle(req, res) {
    const user = await findUserById(req.userId);

    if (!user) {
      return res
      .status(StatusCodes.NOT_FOUND)
      .json({
        error: true,
        message: "Usuário não encontrado",
      });
    }

    return res
    .status(StatusCodes.OK)
    .json({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  }
}
