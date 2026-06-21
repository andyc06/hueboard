import { prisma } from "../../lib/prisma";

async function main() {
  const lights = await prisma.light.findMany();
  return lights;
}

export default defineEventHandler(async (event) => {
  try {
    const lights = await main();
    return lights; // <-- return the data to the client
  } catch (e) {
    console.error(e);
    throw createError({ statusCode: 500, statusMessage: "Server error" });
  } finally {
    await prisma.$disconnect();
  }
});
