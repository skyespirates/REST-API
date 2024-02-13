import TodosModel from "../models/todos.js";

const getAllTodos = async (req, res) => {
  try {
    const [data] = await TodosModel.getAllTodos();
    res.json({ data });
  } catch (error) {
    console.log(error);
  }
};

const getTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    const [data] = await TodosModel.getTodoById(id);
    res.json({ data });
  } catch (error) {
    console.log(error);
  }
};

const createTodo = async (req, res) => {
  try {
    await TodosModel.createTodo(req.body);
    res.json({ message: "created todo successfully" });
  } catch (error) {
    console.log(error);
  }
};

const updateTodo = async (req, res) => {
  try {
    await TodosModel.updateTodo(req.params.id, req.body);
    res.json({ message: "updated todo successfully" });
  } catch (error) {
    console.log(error);
  }
};

const deleteTodo = async (req, res) => {
  try {
    await TodosModel.deleteTodo(req.params.id);
    res.json({ message: "deleted todo successfully" });
  } catch (error) {}
};

export default {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
