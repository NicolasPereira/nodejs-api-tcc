-- CreateTable
CREATE TABLE "ShoppingListProduct" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "shoppingListId" INTEGER NOT NULL,

    CONSTRAINT "ShoppingListProduct_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ShoppingListProduct" ADD CONSTRAINT "ShoppingListProduct_shoppingListId_fkey" FOREIGN KEY ("shoppingListId") REFERENCES "shopping_lists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
