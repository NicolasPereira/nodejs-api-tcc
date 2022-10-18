import { prismaClient } from "../../../database/prismaClient.js";
import { Prisma } from "@prisma/client";
async function createShoppingList(title, userId) {
  return prismaClient.shoppingList.create({
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

async function deleteShoppingList(id) {
  try {
    const deletedList = await prismaClient.shoppingList.delete({
      where: {
        id: id,
      },
    });
    return deletedList;
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      return {
        errorCode: e.errorCode,
        message: e.message,
      };
    }
  }
}

export {
  createShoppingList,
  findShoppingListById,
  findShoppingListByUserId,
  deleteShoppingList,
};
