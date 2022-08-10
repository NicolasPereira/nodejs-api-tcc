import { prismaClient } from "../../../database/prismaClient.js";

async function createShoppingList(title, userId) {
  return await prismaClient.shoppingList.create({
    data: {
      title,
      userId,
    },
  });
}

export { createShoppingList };
