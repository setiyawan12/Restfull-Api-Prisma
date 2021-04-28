-- CreateTable
CREATE TABLE "users" (
    "id_users" SERIAL NOT NULL,
    "username" TEXT,
    "email" TEXT,
    "password" TEXT,
    "books" TEXT[],

    PRIMARY KEY ("id_users")
);

-- CreateTable
CREATE TABLE "books" (
    "id_books" SERIAL NOT NULL,
    "title" TEXT,
    "author" TEXT,
    "description" TEXT,
    "users_id" INTEGER,

    PRIMARY KEY ("id_books")
);

-- AddForeignKey
ALTER TABLE "books" ADD FOREIGN KEY ("users_id") REFERENCES "users"("id_users") ON DELETE SET NULL ON UPDATE CASCADE;
