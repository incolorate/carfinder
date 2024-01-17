import { PrismaClient } from "@prisma/client";
import { createHydrationRenderer } from "vue";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { listingId } = event.context.params;
  const body = await readBody(event);
  const { name, email, phone, message } = body;

  const createMessage = await prisma.message.create({
    data: {
      name,
      email,
      phone,
      message,
      listingId: parseInt(listingId),
    },
  });

  return createMessage;
});
