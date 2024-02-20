import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        posts: true,
        profile: true,
      },
    });
    res.status(200).json({ users });
    console.log(users);
    await prisma.$disconnect();
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  }
};
const getUser = async (req, res) => {
  try {
    const user = await prisma.user.findFirst({
      where: { id: parseInt(req.params.id) },
    });
    res.status(200).json({ user });
    await prisma.$disconnect();
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  }
};
const createUser = async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        ...req.body,
      },
    });
    res.status(200).json({ user });
    await prisma.$disconnect();
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  }
};
const updateUser = async (req, res) => {
  try {
    const user = await prisma.user.update({
      where: { id: parseInt(req.params.id) },
      data: {
        ...req.body,
      },
    });
    res.status(200).json({ user });
    await prisma.$disconnect();
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  }
};
const deleteUser = async (req, res) => {
  try {
    const user = await prisma.user.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.status(200).json({ user });
    await prisma.$disconnect();
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  }
};

const updatePost = async (req, res) => {
  try {
    const authorId = parseInt(req.params.userId);
    const postId = parseInt(req.params.postId);
    const data = await prisma.post.update({
      where: { authorId, id: postId },
      data: {
        published: true,
      },
    });
    res.status(200).json({ data });
    console.log(data);
    await prisma.$disconnect();
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  }
};

export default {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  updatePost,
};
