import { body } from "express-validator";
import { validatePayloadMiddleware } from "../../shared/middlewares/payloadValidatorMiddleware.js";

const createShoppingListValidator = [
  body("title").notEmpty().withMessage("O campo título é obrigatório"),
  body("title")
    .isLength({ max: 2555 })
    .withMessage("O título deve ter no máximo 255 caracteres"),
  validatePayloadMiddleware,
];

export { createShoppingListValidator };
