import dotenv from "dotenv";
import express from "express";
import { AuthController } from "./src/auth/controllers/authController.js";
import { CreateUserController } from "./src/users/controllers/createUserController.js";
import { MeController } from "./src/users/controllers/MeController.js";
import { CreateShoppingListController } from "./src/shoppingList/controllers/CreateShoppingListController.js";
import { createUserValidator } from "./src/users/validators/createUserValidator.js";
import { createShoppingListValidator } from "./src/shoppingList/validators/createShoppingListValidator.js";
import { loginValidator } from "./src/auth/validators/loginValidator.js";
import { authMiddleware } from "./src/shared/middlewares/authMiddleware.js";
import { createShoppingListProductsValidator } from "./src/shoppingListProducts/validators/createProductsValidator.js";
import { config } from "./src/shared/config/config.js";
import { ShoppingListProductsController } from "./src/shoppingListProducts/controllers/ShoppingListProductsController.js";
import { FindShoppingListByUserController } from "./src/shoppingList/controllers/FindShoppingListByUserController.js";
const routes = express.Router();

const createUser = new CreateUserController();
const authUserController = new AuthController();
const meController = new MeController();
const createShoppingList = new CreateShoppingListController();
const shoppingListProductsController = new ShoppingListProductsController();
const findShoppingListByUser = new FindShoppingListByUserController();

routes.post("/", authMiddleware, (req, res) => {
  const applicationName = config.APP_NAME;

  res.json({
    message: `Hi Node and Docker!!! ${applicationName} - ${req.userName}`,
  });
});

routes.post("/users", createUserValidator, createUser.handle);

routes.get("/users/me", authMiddleware, meController.handle);

routes.get(
  "/users/me/shopping-list",
  authMiddleware,
  findShoppingListByUser.handle
);

routes.post("/login", loginValidator, authUserController.authenticate);

routes.post(
  "/shopping-list",
  createShoppingListValidator,
  authMiddleware,
  createShoppingList.handle
);

routes.post(
  "/shopping-list/:idShoppingList/products",
  authMiddleware,
  createShoppingListProductsValidator,
  shoppingListProductsController.create
);

export { routes };
