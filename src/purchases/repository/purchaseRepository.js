import { prismaClient } from "../../../database/prismaClient.js";

async function createPurchase(title, userId) {
  return await prismaClient.purchases.create({
    data: {
      title,
      userId,
    },
  });
}

async function findPurchasesByUserId(userId) {
  return prismaClient.purchases.findMany({
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

async function findPurchaseById(id) {
  return prismaClient.purchases.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      title: true,
      createdAt: true,
      PurchasedProducts: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
}

export { createPurchase, findPurchasesByUserId, findPurchaseById };
