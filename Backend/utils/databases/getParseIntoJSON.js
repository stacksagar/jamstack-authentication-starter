function getParseIntoJSON(key = "") {
  return function () {
    const data = this.getDataValue(key);
    return typeof data === "string" ? JSON.parse(data) : data;
  };
}
module.exports = getParseIntoJSON;
