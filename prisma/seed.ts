// dummy lights & rooms for testing until I plug in the Hue API
import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaBetterSqlite3(connectionString);
const prisma = new PrismaClient({ adapter });
async function main() {
  const light1 = await prisma.light.upsert({
    where: { name: "Living Room Ceiling 1" },
    update: {},
    create: {
      hueId: "HUE-LIGHT-1",
      name: "Living Room Ceiling 1",
      isOn: false,
      dimming: { brightness: 0 },
    },
  });

  const light2 = await prisma.light.upsert({
    where: { name: "Living Room Ceiling 2" },
    update: {},
    create: {
      hueId: "HUE-LIGHT-2",
      name: "Living Room Ceiling 2",
      isOn: false,
      dimming: { brightness: 0 },
    },
  });
}
console.log({ light1, light2 });
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
