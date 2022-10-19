import { body } from "express-validator";
import { validatePayloadMiddleware } from "../../shared/middlewares/payloadValidatorMiddleware.js";

const checkedProductsValidator = [
  body("checked").notEmpty().withMessage("O campo checked é obrigatório"),
  body("checked").isBoolean().withMessage("O campo checked deve ser booleano"),
  validatePayloadMiddleware,
];

export { checkedProductsValidator };
