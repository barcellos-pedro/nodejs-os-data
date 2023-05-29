const fs = require("node:fs/promises");
const getOSData = require("./lib/os-data");

async function getData(createFile = false, filename = "info.txt") {
  try {
    const dataString = getOSData();
    createFile
      ? await fs.writeFile(filename, dataString, "utf-8")
      : console.log(dataString);
  } catch (err) {
    throw new Error("Error when getting user data\n" + err.message);
  }
}

module.exports = getData;
