import { prismaClient } from "../../../database/prismaClient.js";

async function createShoppingList(title, userId) {
  return await prismaClient.shoppingList.create({
    data: {
      title,
      userId,
    },
  });
}

async function findShoppingListById(id) {
  return prismaClient.shoppingList.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      title: true,
      ShoppingListProducts: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
}

async function findShoppingListByUserId(userId) {
  return prismaClient.shoppingList.findMany({
    orderBy: [
      {
        id: "desc",
      },
    ],
    where: {
      userId: userId,
    },
    select: {
      id: true,
      title: true,
      createdAt: true,
    },
  });
}

export { createShoppingList, findShoppingListById, findShoppingListByUserId };
