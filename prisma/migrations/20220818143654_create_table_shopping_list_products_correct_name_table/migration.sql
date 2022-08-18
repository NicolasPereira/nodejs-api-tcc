/*
  Warnings:

  - You are about to drop the `ShoppingListProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ShoppingListProduct" DROP CONSTRAINT "ShoppingListProduct_shoppingListId_fkey";

-- DropTable
DROP TABLE "ShoppingListProduct";

-- CreateTable
CREATE TABLE "shopping_lists_products" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "shoppingListId" INTEGER NOT NULL,

    CONSTRAINT "shopping_lists_products_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "shopping_lists_products" ADD CONSTRAINT "shopping_lists_products_shoppingListId_fkey" FOREIGN KEY ("shoppingListId") REFERENCES "shopping_lists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
