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
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  }
};
const getUser = async (req, res) => {
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
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  }
};
const createUser = async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        name: "Alice",
        email: "alice@prisma.io",
        posts: {
          create: { title: "Hello World" },
        },
        profile: {
          create: { bio: "I like turtles" },
        },
      },
    });
    console.log(user);
    const users = await prisma.user.findMany({
      include: {
        posts: true,
        profile: true,
      },
    });
    console.log(users);
    res.status(200).json({ users });
    await prisma.$disconnect();
  } catch (error) {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  }
};
const updateUser = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json({ users });
    console.log(users);
    await prisma.$disconnect();
  } catch (error) {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  }
};
const deleteUser = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json({ users });
    console.log(users);
    await prisma.$disconnect();
  } catch (error) {
    console.error(e);
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
