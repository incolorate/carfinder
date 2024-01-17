import cars from "@/data/cars.json";

export default defineEventHandler((event) => {
  const { id } = event.context.params;

  const car = cars.find((c) => {
    return c.id === parseInt(id);
  });

  if (!car) {
    throw createError({
      statusCode: 404,
      message: "car with the id not found",
    });
  }

  return car;
});
