import { createPurchase } from "../repository/purchaseRepository.js";
import { StatusCodes } from "http-status-codes";

export class PurchaseController {
  async create(req, res) {
    const userId = req.userId;
    const { title } = req.body;

    const purchase = await createPurchase(title, userId);

    return res.status(StatusCodes.CREATED).json({
      id: purchase.id,
      title: purchase.title,
    });
  }
}
