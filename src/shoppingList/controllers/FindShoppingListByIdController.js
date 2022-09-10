import { findShoppingListById } from "../repository/shoppingListRepository.js";
import { StatusCodes } from "http-status-codes";

export class FindShoppingListByIdController {
  async handle(req, res) {
    const idShoppingList = parseInt(req.params.idShoppingList);

    if (isNaN(idShoppingList)) {
      return res.status(StatusCodes.NOT_FOUND).json({
        error: true,
        message: "A lista procura não existe",
      });
    }

    const shoppingList = await findShoppingListById(idShoppingList);

    if (shoppingList == null) {
      return res.status(StatusCodes.NOT_FOUND).json({
        error: true,
        message: "A lista procura não existe",
      });
    }

    return res.status(StatusCodes.OK).json({
      shoppingList,
    });
  }
}
