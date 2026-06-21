import { prisma } from "../../lib/prisma";

async function main() {
  const rooms = await prisma.room.findMany({
    include: {
      lights: true,
    },
  });
  return rooms;
}

export default defineEventHandler(async (event) => {
  try {
    const rooms = await main();
    return rooms; // <-- return the data to the client
  } catch (e) {
    console.error(e);
    throw createError({ statusCode: 500, statusMessage: "Server error" });
  } finally {
    await prisma.$disconnect();
  }
});
