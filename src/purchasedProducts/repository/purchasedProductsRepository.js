import { prismaClient } from "../../../database/prismaClient.js";

async function insertProductsInPurchased(products, purchaseId) {
  await prismaClient.purchasedProducts.createMany({
    data: products.map((product) => ({
      name: product.name,
      purchaseId,
    })),
  });
}

export { insertProductsInPurchased };
