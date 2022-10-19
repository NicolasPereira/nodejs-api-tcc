import { prismaClient } from "../../../database/prismaClient.js";

async function insertProductsInPurchased(products, purchaseId) {
  await prismaClient.purchasedProducts.createMany({
    data: products.map((product) => ({
      name: product.name,
      purchaseId,
    })),
  });
}

async function findProductsByPurchaseId(purchaseId) {
  await prismaClient.purchasedProducts.findUnique({
    where: {
      purchaseId: purchaseId
    },
    select: {
      name: true,
    }
  })
}

export { insertProductsInPurchased, findProductsByPurchaseId };
