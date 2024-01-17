import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler((event) => {
  const { id } = event.context.params;

  const car = prisma.car.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!car) {
    throw createError({
      statusCode: 404,
      message: "car with the id not found",
    });
  }

  return car;
});
