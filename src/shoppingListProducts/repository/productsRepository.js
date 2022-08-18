import { prismaClient } from "../../../database/prismaClient.js";

async function insertProductsInShoppingList(products, id) {
  for (const product of products) {
    await prismaClient.shoppingListProducts.create({
      data: {
        name: product,
        shoppingListId: id,
      },
    });
  }
}

export { insertProductsInShoppingList };
