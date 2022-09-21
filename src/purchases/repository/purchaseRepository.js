import { prismaClient } from "../../../database/prismaClient.js";

async function createPurchase(title, userId) {
  return await prismaClient.purchases.create({
    data: {
      title,
      userId,
    },
  });
}

export { createPurchase };
