-- CreateTable
CREATE TABLE "purchases" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" VARCHAR(255) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "purchases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "purchased_products" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "purchasesId" INTEGER NOT NULL,

    CONSTRAINT "purchased_products_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "purchases" ADD CONSTRAINT "purchases_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchased_products" ADD CONSTRAINT "purchased_products_purchasesId_fkey" FOREIGN KEY ("purchasesId") REFERENCES "purchases"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
