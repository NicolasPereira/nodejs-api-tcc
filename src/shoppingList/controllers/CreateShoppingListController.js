import { createShoppingList } from "../repository/shoppingListRepository.js";
import { StatusCodes } from "http-status-codes";

export class CreateShoppingListController {
  async handle(req, res) {
    const userId = req.userId;
    const { title } = req.body;

    const shoppingList = await createShoppingList(title, userId);

    return res.status(StatusCodes.CREATED).json({
      id: shoppingList.id,
      title: shoppingList.title,
    });
  }
}
