import { body } from "express-validator";
import { validatePayloadMiddleware } from "../../shared/middlewares/payloadValidatorMiddleware.js";

const createShoppingListProductsValidator = [
  body("products")
    .isArray({ min: 1 })
    .withMessage(
      "É necessário passar uma lista de produtos com no minimo 1 produto"
    ),
  validatePayloadMiddleware,
];

export { createShoppingListProductsValidator };
