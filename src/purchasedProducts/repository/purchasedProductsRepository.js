import { prismaClient } from "../../../database/prismaClient.js";

async function insertProductsInPurchased(products, purchaseId) {
  await prismaClient.purchasedProducts.createMany({
    data: products.map((product) => ({
      name: product.name,
      purchaseId,
    })),
  });
}

async function findProductsByPurchaseId(id) {
  const products = await prismaClient.purchasedProducts.findMany({
    where: {
      purchaseId: id,
    },
    select: {
      name: true,
    },
  });
  return products;
}

export { insertProductsInPurchased, findProductsByPurchaseId };
