import InvalidExtension from "./errors/invalid-ext.js";

function getFile(filename) {
  const [name, ext] = filename.split(".");
  try {
    switch (ext) {
      case "json":
      case "csv":
      case "txt":
        return { name, ext };
      case undefined:
        return { name, ext: "txt" };
      default:
        throw new InvalidExtension();
    }
  } catch (err) {
    throw err;
  }
}

export default getFile;
