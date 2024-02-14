import dbConfig from "../config/config.js";
import SeQueLize from "sequelize";

const { Sequelize, DataTypes } = SeQueLize;

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
  },
});

sequelize
  .authenticate()
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err));

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

import Product from "./product.js";
import Review from "./review.js";

db.products = Product(sequelize, DataTypes);
db.reviews = Review(sequelize, DataTypes);

db.sequelize
  .sync({ force: false })
  .then(() => console.log("synchronization is done!"));

export default db;
