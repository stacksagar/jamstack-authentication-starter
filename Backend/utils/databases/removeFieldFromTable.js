const sequelize = require("../../database/connection");

/**
 *
 * @param {string} tableName
 * @param {array} columns
 */
const removeFieldFromTable = (tableName, columns) => {
  if (!tableName || columns.length < 1) return;
  let columns_query = ``;

  columns.forEach((col, index) => {
    if (columns.length - 1 === index) {
      columns_query += `DROP COLUMN ${col};`;
    } else {
      columns_query += `DROP COLUMN ${col}, \n`;
    }
  });

  sequelize
    .query(
      `
      ALTER TABLE ${tableName}
      ${columns_query}
      `
    )
    .then(() => {
      console.log("Column removed successfully!");
    })
    .catch((err) => {
      console.error("Error removing column:", err);
    });
};
// removeFieldFromTable("", ["test1", "test2", "test3"]);
module.exports = removeFieldFromTable;
