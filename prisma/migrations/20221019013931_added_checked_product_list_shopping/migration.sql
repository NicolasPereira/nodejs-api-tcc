/*
  Warnings:

  - Added the required column `checked` to the `shopping_lists_products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "purchased_products" DROP CONSTRAINT "purchased_products_purchaseId_fkey";

-- DropForeignKey
ALTER TABLE "shopping_lists_products" DROP CONSTRAINT "shopping_lists_products_shoppingListId_fkey";

-- AlterTable
ALTER TABLE "shopping_lists_products" ADD COLUMN     "checked" BOOLEAN NOT NULL;

-- AddForeignKey
ALTER TABLE "shopping_lists_products" ADD CONSTRAINT "shopping_lists_products_shoppingListId_fkey" FOREIGN KEY ("shoppingListId") REFERENCES "shopping_lists"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchased_products" ADD CONSTRAINT "purchased_products_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "purchases"("id") ON DELETE CASCADE ON UPDATE CASCADE;
