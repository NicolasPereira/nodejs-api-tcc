import { prismaClient } from "../../../database/prismaClient.js";

export async function findUserById(id) {
  return await prismaClient.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      email: true,
      name: true,
    },
  });
}
