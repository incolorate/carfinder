import Joi from "joi";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const schema = Joi.object({
  make: Joi.string().required(),
  model: Joi.string().required(),
  year: Joi.number()
    .min(1886)
    .max(new Date().getFullYear() + 1),
  miles: Joi.number(),
  city: Joi.string().min(2).required(),
  numberOfSeats: Joi.number().min(1).max(1000).required(),
  features: Joi.array().items(Joi.string()).required(),
  listerId: Joi.string().required(),
  price: Joi.number().min(0).required(),
  name: Joi.string().required(),
  description: Joi.string().required().min(20),
});

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { error, value } = await schema.validate(body);

  if (error) {
    throw createError({
      statusCode: 412,
      message: error.message,
    });
  }

  const {
    make,
    model,
    miles,
    city,
    numberOfSeats,
    features,
    listerId,
    price,
    name,
    description,
  } = body;

  const car = await prisma.car.create({
    data: {
      make,
      model,
      miles: parseInt(miles),
      city: city.toLowerCase(),
      numberOfSeats,
      features,
      image: "|placeholder",
      listerId,
      price: parseInt(price),
      name,
      description,
      year: 2003,
    },
  });

  return car;
});
