import getFileInfo from "./file-info.js";
import { defaultFilename } from "./defaults.js";

function getFilename(filename, ext) {
  if (filename && ext) {
    const { name } = getFileInfo(filename);
    return `${name}.${ext}`;
  }

  if (filename && !ext) {
    const file = getFileInfo(filename);
    return `${file.name}.${file.ext}`;
  }

  if (!filename && ext) {
    return `${defaultFilename}.${ext}`;
  }
}

export default getFilename;
