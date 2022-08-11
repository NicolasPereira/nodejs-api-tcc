import { validationResult } from "express-validator";
import { StatusCodes } from "http-status-codes";
const validatePayloadMiddleware = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ errors: errors.array() });
  }
  return next();
};
export { validatePayloadMiddleware };
