import { findShoppingListByUserId } from "../repository/shoppingListRepository.js";
import { StatusCodes } from "http-status-codes";

export class FindShoppingListByUserController {
  async handle(req, res) {
    const userId = req.userId;

    const shoppingList = await findShoppingListByUserId(userId);

    return res.status(StatusCodes.OK).json({
      shoppingList,
    });
  }
}
