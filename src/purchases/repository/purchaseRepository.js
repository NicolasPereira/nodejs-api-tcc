import { prismaClient } from "../../../database/prismaClient.js";
import { Prisma } from "@prisma/client";
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

async function deletePurchase(id) {
  try {
    const deletedList = await prismaClient.purchases.delete({
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
  createPurchase,
  findPurchasesByUserId,
  findPurchaseById,
  deletePurchase,
  findLastPurchaseByUser
};
