import {
  createPurchase,
  findPurchasesByUserId,
  findPurchaseById,
} from "../repository/purchaseRepository.js";
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

  async findUserPurchases(req, res) {
    const userId = req.userId;

    const purchases = await findPurchasesByUserId(userId);

    return res.status(StatusCodes.OK).json(purchases);
  }

  async findPurchaseById(req, res) {
    const idPurchase = parseInt(req.params.idPurchase);

    if (isNaN(idPurchase)) {
      return res.status(StatusCodes.NOT_FOUND).json({
        error: true,
        message: "A compra procurada não existe",
      });
    }

    const purchase = await findPurchaseById(idPurchase);

    if (purchase == null) {
      return res.status(StatusCodes.NOT_FOUND).json({
        error: true,
        message: "A compra procurada não existe",
      });
    }

    return res.status(StatusCodes.OK).json({
      purchase,
    });
  }
}
