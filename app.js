const fs = require("node:fs/promises");
const getOSData = require("./lib/os");

/**
 * Get operating system-related data
 *
 * @param {*} generateTxt Creates a .txt file with the data
 * @param {*} filename Filename to save the data
 */
async function getData(generateTxt = false, filename = "pc-info.txt") {
  try {
    const data = getOSData();
    generateTxt
      ? await fs.writeFile(filename, data, "utf-8")
      : console.log(data);
  } catch (err) {
    console.error("Error when getting user data");
    throw err;
  }
}
getData()
module.exports = getData;
