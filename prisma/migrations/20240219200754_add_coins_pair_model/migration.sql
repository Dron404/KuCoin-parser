-- CreateTable
CREATE TABLE "coins_pair" (
    "id" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "last_price" DECIMAL(65,30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "coins_pair_pkey" PRIMARY KEY ("id")
);
