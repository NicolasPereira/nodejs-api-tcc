/*
  Warnings:

  - You are about to drop the column `purchasesId` on the `purchased_products` table. All the data in the column will be lost.
  - Added the required column `purchaseId` to the `purchased_products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "purchased_products" DROP CONSTRAINT "purchased_products_purchasesId_fkey";

-- AlterTable
ALTER TABLE "purchased_products" DROP COLUMN "purchasesId",
ADD COLUMN     "purchaseId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "purchased_products" ADD CONSTRAINT "purchased_products_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "purchases"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
