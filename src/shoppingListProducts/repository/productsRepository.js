import { prismaClient } from "../../../database/prismaClient.js";
import { Prisma } from "@prisma/client";

async function insertProductsInShoppingList(products, shoppingListId) {
  await prismaClient.shoppingListProducts.createMany({
    data: products.map((product) => ({
      name: product.name,
      shoppingListId,
    })),
  });
}

async function deleteProductsInShoppingList(productId) {
  await prismaClient.shoppingListProducts.delete({
    where: {
      id: productId,
    },
  });
}

async function updateProductsStatus(productId, status) {
  try {
    const product = await prismaClient.shoppingListProducts.update({
      where: {
        id: productId,
      },
      data: {
        checked: status,
      },
    });
    return product;
  } catch (e) {
    if (e instanceof Prisma.PrismaClientValidationError) {
      return {
        errorCode: e.errorCode,
        message: e.message,
      };
    }
  }
}

export {
  insertProductsInShoppingList,
  deleteProductsInShoppingList,
  updateProductsStatus,
};
