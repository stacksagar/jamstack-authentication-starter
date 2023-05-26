const sequelize = require("../../database/connection");

/**
 *
 * @param {string} tableName
 */
const addNewFieldToTable = (
  tableName,
  columns = [{ name: "", type: "", default: "" }]
) => {
  if (!tableName || columns.length < 1) return;
  let columns_query = ``;

  columns.forEach((col, index) => {
    if (columns.length - 1 === index) {
      columns_query += `ADD COLUMN ${col.name} ${col.type || "VARCHAR(255)"} ${
        col.default ? `DEFAULT ${col.default}` : ""
      };`;
    } else {
      columns_query += `ADD COLUMN ${col.name} ${col.type || "VARCHAR(255)"} ${
        col.default ? `DEFAULT ${col.default}` : ""
      }, \n`;
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
      console.log("New fields added successfully!");
    })
    .catch((err) => {
      console.error("Error adding new fields:", err);
    });
};

module.exports = addNewFieldToTable;
