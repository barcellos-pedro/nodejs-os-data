const InvalidExtension = require("./errors/invalid-ext");

// TODO: Create data attr based on ext
// json => data: JSON.stringfy()
// txt => data: string as is
// csv => data: csv format

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

module.exports = getFile;
