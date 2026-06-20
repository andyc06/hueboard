-- CreateTable
CREATE TABLE "Light" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "hueId" TEXT NOT NULL,
    "isOn" BOOLEAN NOT NULL,
    "dimming" JSONB NOT NULL,
    "color" JSONB NOT NULL,
    "name" TEXT,
    "roomId" INTEGER NOT NULL,
    CONSTRAINT "Light_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Room" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "hueId" TEXT NOT NULL,
    "name" TEXT
);
