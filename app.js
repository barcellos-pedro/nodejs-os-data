import fs from "node:fs/promises";
import getFile from "./lib/file-info.js";
import getCSV from "./lib/data/csv.js";
import getString from "./lib/data/string.js";
import getJSON from "./lib/data/json.js";
import InvalidExtensionError from "./lib/errors/invalid-ext.js";
import DataError from "./lib/errors/os-info.js";

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

export default getData;
