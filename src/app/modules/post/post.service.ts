import { prisma } from "../../config/db";
import { Post, Prisma } from "../../generated/prisma/client";

const createPost = async (payload: Prisma.PostCreateInput): Promise<Post> => {
  const result = await prisma.post.create({
    data: payload,
    include: {
      author: {
        select: { name: true, email: true, phone: true, photoUrl: true },
      },
    },
  });
  return result;
};

const getAllPost = async () => {
  const result = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      author: {
        select: {
          name: true,
          email: true,
          gender: true,
          photoUrl: true,
          phone: true,
          status: true,
          isVerified: true,
        },
      },
    },
  });
  return result;
};

const getAPost = async (id: string) => {
  return await prisma.$transaction(async (tx) => {
    await tx.post.update({ where: { id }, data: { views: { increment: 1 } } });
    return await tx.post.findUnique({
      where: { id },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            photoUrl: true,
            gender: true,
            status: true,
            isVerified: true,
          },
        },
      },
    });
  });
};

const updatePost = async (id: string, payload: Partial<Post>) => {
  const result = await prisma.user.update({ where: { id }, data: payload });
  return result;
};

const deletePost = async (id: string) => {
  const result = await prisma.user.delete({ where: { id } });
  return result;
};
export const postServices = {
  createPost,
  getAllPost,
  getAPost,
  updatePost,
  deletePost,
};
