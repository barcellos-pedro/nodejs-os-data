const fs = require("node:fs/promises");
const getFile = require("./lib/file-info");
const getCSV = require("./lib/data/csv");
const getString = require("./lib/data/string");
const getJSON = require("./lib/data/json");
const InvalidExtensionError = require("./lib/errors/invalid-ext");
const DataError = require("./lib/errors/os-info");

async function getData(createFile = false, filename = "info.txt") {
  try {
    if (!createFile) {
      return console.log(getString());
    }

    const { ext } = getFile(filename);
    const filePath = `content/${filename}`;

    switch (ext) {
      case "json":
        return await fs.writeFile(filePath, getJSON(), "utf-8");
      case "csv":
        return await fs.writeFile(filePath, getCSV(), "utf-8");
      case "txt":
        return await fs.writeFile(filePath, getString(), "utf-8");
      default:
        throw new InvalidExtensionError();
    }
  } catch (err) {
    const message = "Error when getting user data\n" + err.message;
    throw new DataError(message);
  }
}

module.exports = getData;
