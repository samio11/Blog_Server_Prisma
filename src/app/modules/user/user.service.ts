import { prisma } from "../../config/db";
import { Prisma, User } from "../../generated/prisma/client";

const createUser = async (payload: Prisma.UserCreateInput): Promise<User> => {
  const result = await prisma.user.create({ data: payload });
  return result;
};

const getAllUSer = async () => {
  const result = await prisma.user.findMany({
    include: {
      posts: {
        select: {
          id: true,
          title: true,
          content: true,
          thumbnail: true,
          views: true,
          tags: true,
        },
        orderBy: { createdAt: "desc" },
      },
    },
  });
  return result;
};
const getAUser = async (id: string) => {
  const result = await prisma.user.findFirst({
    where: { id },
    include: { posts: true },
  });
  return result;
};

const updateUser = async (id: string, payload: Partial<User>) => {
  const result = await prisma.user.update({ where: { id }, data: payload });
  return result;
};

const deleteUser = async (id: string) => {
  const result = await prisma.user.delete({ where: { id } });
  return result;
};

export const userServices = {
  createUser,
  getAllUSer,
  getAUser,
  updateUser,
  deleteUser,
};
