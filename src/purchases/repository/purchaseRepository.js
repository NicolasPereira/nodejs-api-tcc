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

async function findLastPurchaseByUser(userId) {
  return prismaClient.purchases.findFirst({
    where: {
      userId: userId
    },
    orderBy: {
      id: 'asc',
    },
    take: -1, 
  })
}

export { createPurchase, findPurchasesByUserId, findPurchaseById, findLastPurchaseByUser };
