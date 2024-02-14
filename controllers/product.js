import db from "../models/index.js";

// main model
const Product = db.products;
const Review = db.reviews;

export const addProduct = async (req, res) => {
  const { title, price, description, published } = req.body;
  const product = {
    title,
    price,
    description,
    published: published ? published : false,
  };
  try {
    const response = await Product.create(product);
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
  }
};

export const getProductList = async (req, res) => {
  try {
    const response = await Product.findAll();
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({ where: { id: req.params.id } });
    res.status(200).send(product);
  } catch (error) {
    console.log(error);
    res.status(522).json({ message: "Internal Server Error" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).send(product);
  } catch (error) {
    console.log(error);
    res.status(522).json({ message: "Internal Server Error" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send({ message: "product deleted" });
  } catch (error) {
    console.log(error);
    res.status(522).json({ message: "Internal Server Error" });
  }
};
