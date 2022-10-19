import { createSmartList } from "../services/createSmartListService.js";
import { StatusCodes } from "http-status-codes";

export class SmartListControllers {
  async create(req, res) {
    const userId = req.userId;
    const { products } = req.body;

    const smartList = await createSmartList(userId, products);

    return res.status(StatusCodes.CREATED).json({
      smartList,
    });
  }
}
