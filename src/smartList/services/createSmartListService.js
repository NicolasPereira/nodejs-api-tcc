import {
  createShoppingList,
  findShoppingListById,
} from "../../shoppingList/repository/shoppingListRepository.js";
import { findLastPurchaseByUser } from "../../purchases/repository/purchaseRepository.js";
import { findProductsByPurchaseId } from "../../purchasedProducts/repository/purchasedProductsRepository.js";
import { insertProductsInShoppingList } from "../../shoppingListProducts/repository/productsRepository.js";

async function createSmartList(userId, products) {
  const title = "Nova Lista Inteligente";
  const shoppingList = await createShoppingList(title, userId);
  const purchasesProducts = await findLastPurchasesProducts(userId);
  const productsSmartListGenerated = await generateSmartShoppingListProducts(
    products,
    purchasesProducts
  );
  const productsForSmartList = await insertProductsInShoppingList(
    productsSmartListGenerated,
    shoppingList.id
  );

  const shoppingListUpdated = await findShoppingListById(shoppingList.id);
  return shoppingListUpdated;
}

async function findLastPurchasesProducts(userId) {
  const lastPurchase = await findLastPurchaseByUser(userId);
  const productsLastPuchase = await findProductsByPurchaseId(lastPurchase.id);
  return productsLastPuchase;
}

async function generateSmartShoppingListProducts(products, purchasesProducts) {
  let smartProducts = [];

  for (const product of products) {
    for (const productPurchase of purchasesProducts) {
      if (product.name != productPurchase.name) {
        let productSmart = { name: productPurchase.name };
        smartProducts.push(productSmart);
      }
    }
  }
  return smartProducts;
}

export { createSmartList };
