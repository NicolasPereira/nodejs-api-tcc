import { findUserById } from "../repository/findUserByIdRepository.js";

export class MeController {
  async handle(req, res) {
    const user = await findUserById(req.userId);

    if (!user) {
      return res.status(404).json({
        error: true,
        message: "Usuário não encontrado",
      });
    }

    return res.status(200).json({
      user,
    });
  }
}
