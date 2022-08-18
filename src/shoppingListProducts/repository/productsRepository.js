import { prismaClient } from "../../../database/prismaClient.js";

async function insertProductsInShoppingList(products, shoppingListId) {
  await prismaClient.shoppingListProducts.createMany({
    data: products.map((product) => ({
      name: product.name,
      shoppingListId,
    })),
  });
}

export { insertProductsInShoppingList };
