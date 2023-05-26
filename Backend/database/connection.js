const { Sequelize } = require("sequelize");
const logger = require("logger").createLogger();
const sequelize = new Sequelize({
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  logging: (msg) => logger.debug(msg), 
});

sequelize
  .authenticate()
  .then(() => console.log("Database Connected."))
  .catch((error) =>
    console.log("ERROR::", error?.message || "Database Connection Error!")
  );

sequelize.sync({ force: false });

module.exports = sequelize;
