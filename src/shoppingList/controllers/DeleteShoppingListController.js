import { deleteShoppingList } from "../repository/shoppingListRepository.js";
import { StatusCodes } from "http-status-codes";

export class DeleteShoppingListController {
  async handle(req, res) {
    const idShoppingList = parseInt(req.params.idShoppingList);
    const result = await deleteShoppingList(idShoppingList);

    if ("errorCode" in result) {
      return res.status(StatusCodes.BAD_REQUEST).json(result);
    }

    return res.status(StatusCodes.NO_CONTENT).json({});
  }
}
