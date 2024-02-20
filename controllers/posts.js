import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany();
    res.status(200).json({ posts });
    await prisma.$disconnect();
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  }
};
const getPost = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const post = await prisma.post.findFirst({ where: { id } });
    res.status(200).json({ post });
    await prisma.$disconnect();
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  }
};
const createPost = async (req, res) => {
  try {
    const post = await prisma.post.create({
      data: { ...req.body },
    });
    console.log(post);
    res.status(200).json({ post });
    await prisma.$disconnect();
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  }
};
const updatePost = async (req, res) => {
  try {
    const post = await prisma.post.update({
      where: { id: parseInt(req.params.id) },
      data: { ...req.body },
      select: {
        title: true,
        content: true,
      },
    });
    res.status(200).json({ post });
    console.log(post);
    await prisma.$disconnect();
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  }
};
const deletePost = async (req, res) => {
  try {
    const post = await prisma.post.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.status(200).json({ post });
    await prisma.$disconnect();
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  }
};

export default {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
