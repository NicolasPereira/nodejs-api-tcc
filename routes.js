import dotenv from "dotenv";
import { prismaClient } from "./database/prismaClient.js";
import express from "express";
import { AuthController } from "./src/auth/controllers/authController.js";
import { CreateUserController } from "./src/users/controllers/CreateUserController.js";
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
import { FindShoppingListByIdController } from "./src/shoppingList/controllers/FindShoppingListByIdController.js";
import { PurchaseController } from "./src/purchases/controllers/PurchaseController.js";
import { createPurchaseValidator } from "./src/purchases/validators/createPurchaseValidator.js";
import { PurchasedProductsController } from "./src/purchasedProducts/controllers/PurchasedProductsController.js";
import { createPurchasedProductsValidator } from "./src/purchasedProducts/validators/createPurchasedProductsValidator.js";
import { DeleteShoppingListController } from "./src/shoppingList/controllers/DeleteShoppingListController.js";
import { checkedProductsValidator } from "./src/shoppingListProducts/validators/checkedProductsValidator.js";
import { SmartListControllers } from "./src/smartList/controllers/SmartListController.js";

const routes = express.Router();

const createUser = new CreateUserController();
const authUserController = new AuthController();
const meController = new MeController();
const createShoppingList = new CreateShoppingListController();
const shoppingListProductsController = new ShoppingListProductsController();
const findShoppingListByUser = new FindShoppingListByUserController();
const findShoppingListById = new FindShoppingListByIdController();
const purchaseController = new PurchaseController();
const purchasedProductsController = new PurchasedProductsController();
const deleteShoppingListController = new DeleteShoppingListController();
const smartListController = new SmartListControllers();

routes.post("/", authMiddleware, (req, res) => {
  const applicationName = config.APP_NAME;

  res.json({
    message: `Hi Node and Docker!!! ${applicationName} - ${req.userName}`,
  });
});

routes.post("/users", createUserValidator, createUser.handle);

routes.get("/users/me", authMiddleware, meController.handle);

routes.get(
  "/users/me/shopping-lists",
  authMiddleware,
  findShoppingListByUser.handle
);

routes.post("/login", loginValidator, authUserController.authenticate);

routes.post(
  "/shopping-lists",
  createShoppingListValidator,
  authMiddleware,
  createShoppingList.handle
);

routes.get(
  "/shopping-lists/:idShoppingList",
  authMiddleware,
  findShoppingListById.handle
);

routes.post(
  "/shopping-lists/:idShoppingList/products",
  authMiddleware,
  createShoppingListProductsValidator,
  shoppingListProductsController.create
);

routes.patch(
  "/shopping-lists/:idShoppingList/products/:idProduct",
  authMiddleware,
  checkedProductsValidator,
  shoppingListProductsController.updateCheckedProduct
);

routes.delete(
  "/shopping-lists/:idShoppingList/products/:idProduct",
  authMiddleware,
  shoppingListProductsController.deleteProduct
);

routes.delete(
  "/shopping-lists/:idShoppingList",
  authMiddleware,
  deleteShoppingListController.handle
);

routes.post(
  "/purchases",
  createPurchaseValidator,
  authMiddleware,
  purchaseController.create
);

routes.get(
  "/users/me/purchases",
  authMiddleware,
  purchaseController.findUserPurchases
);

routes.get(
  "/purchases/:idPurchase",
  authMiddleware,
  purchaseController.findPurchaseById
);

routes.delete(
  "/purchases/:idPurchase/",
  authMiddleware,
  purchaseController.deletePurchase
);

routes.post(
  "/purchases/:idPurchase/products",
  authMiddleware,
  createPurchasedProductsValidator,
  purchasedProductsController.create
);

routes.post(
  "/smart-list",
  authMiddleware,
  createShoppingListProductsValidator,
  smartListController.create
);

routes.get("/health", (req, res) => {
  const dbStatus = prismaClient.$queryRaw`SELECT 1`;

  res.status(200).json({
    app: "ok",
    db: dbStatus,
  });
});

export { routes };
