import { createShoppingList } from "../repository/shoppingListRepository.js";

export class CreateShoppingListController {
  async handle(req, res) {
    const userId = req.userId;
    const { title } = req.body;

    const shoppingList = await createShoppingList(title, userId);

    return res.status(200).json({
      id: shoppingList.id,
      title: shoppingList.title,
    });
  }
}
