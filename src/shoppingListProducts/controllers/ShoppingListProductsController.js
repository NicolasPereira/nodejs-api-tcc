import {
  insertProductsInShoppingList,
  deleteProductsInShoppingList,
  updateProductsStatus,
} from "../repository/productsRepository.js";
import { findShoppingListById } from "../../shoppingList/repository/shoppingListRepository.js";
import { StatusCodes } from "http-status-codes";

export class ShoppingListProductsController {
  async create(req, res) {
    const idShoppingList = parseInt(req.params.idShoppingList);
    const { products } = req.body;

    await insertProductsInShoppingList(products, idShoppingList);

    const shoppingList = await findShoppingListById(idShoppingList);

    return res.status(StatusCodes.CREATED).json({
      shoppingList,
    });
  }

  async deleteProduct(req, res) {
    const idShoppingList = parseInt(req.params.idShoppingList);
    const idProduct = parseInt(req.params.idProduct);
    await deleteProductsInShoppingList(idProduct);

    const shoppingList = await findShoppingListById(idShoppingList);

    return res.status(StatusCodes.OK).json({
      shoppingList,
    });
  }

  async updateCheckedProduct(req, res) {
    const idProduct = parseInt(req.params.idProduct);
    const { checked } = req.body;
    const result = await updateProductsStatus(idProduct, checked);
    if ("errorCode" in result) {
      return res.status(StatusCodes.BAD_REQUEST).json(result);
    }

    return res.status(StatusCodes.OK).json({
      message: `${result.name} foi atualizado`,
    });
  }
}
