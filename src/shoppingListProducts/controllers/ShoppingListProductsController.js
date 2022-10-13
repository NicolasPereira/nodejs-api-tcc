import {
  insertProductsInShoppingList,
  deleteProductsInShoppingList,
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
}
