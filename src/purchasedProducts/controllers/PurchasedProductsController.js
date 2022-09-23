import { StatusCodes } from "http-status-codes";
import { insertProductsInPurchased } from "../repository/purchasedProductsRepository.js";
import { findPurchaseById } from "../../purchases/repository/purchaseRepository.js";

export class PurchasedProductsController {
  async create(req, res) {
    const idPurchase = parseInt(req.params.idPurchase);
    const { products } = req.body;
    await insertProductsInPurchased(products, idPurchase);

    const purchase = await findPurchaseById(idPurchase);

    return res.status(StatusCodes.CREATED).json({
      purchase,
    });
  }
}
