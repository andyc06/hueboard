// dummy lights & rooms for testing until I plug in the Hue API
import { prisma } from "../lib/prisma";

async function main() {
  const room1 = await prisma.room.create({
    data: {
      hueId: "HUE-ROOM-1",
      name: "Living Room",
    },
  });
  console.log("created: ", room1);

  const light1 = await prisma.light.create({
    data: {
      hueId: "HUE-LIGHT-1",
      isOn: false,
      dimming: { brightness: 0 },
      color: { xy: { x: 0.0, y: 0.0 } },
      name: "Living Room Ceiling 1",
      roomId: 1,
    },
  });
  console.log("created: ", light1);

  const light2 = await prisma.light.create({
    data: {
      hueId: "HUE-LIGHT-2",
      isOn: false,
      dimming: { brightness: 0 },
      color: { xy: { x: 0.0, y: 0.0 } },
      name: "Living Room Ceiling 2",
      roomId: 1,
    },
  });
  console.log("created: ", light2);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
