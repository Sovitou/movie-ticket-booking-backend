/*
  Warnings:

  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `User` table. All the data in the column will be lost.
  - Added the required column `description` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genre` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "duration" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "genre" TEXT NOT NULL,
ADD COLUMN     "rating" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "role",
DROP COLUMN "status",
ALTER COLUMN "phone_number" DROP NOT NULL,
ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "updated_at" DROP NOT NULL,
ALTER COLUMN "deleted_at" DROP NOT NULL;
