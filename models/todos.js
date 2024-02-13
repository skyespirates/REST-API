import conn from "../config/config.js";

const getAllTodos = () => {
  const query = "SELECT * FROM todos";
  return conn.execute(query);
};

const getTodoById = (id) => {
  const query = "SELECT * FROM todos WHERE id=" + id;
  return conn.execute(query);
};

const createTodo = (todo) => {
  const query = `INSERT INTO todos (title, completed) VALUES (\'${todo.title}\', ${todo.completed})`;
  return conn.execute(query);
};

const updateTodo = (id, todo) => {
  const query = `UPDATE todos SET title=\'${todo.title}\' WHERE id=${id}`;
  return conn.execute(query);
};

const deleteTodo = (id) => {
  const query = `DELETE FROM todos WHERE id=\'${id}\'`;
  return conn.execute(query);
};

export default { getAllTodos, getTodoById, createTodo, updateTodo, deleteTodo };
