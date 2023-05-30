import getFilename from "../lib/filename.js";
import InvalidExtension from "./errors/invalid-ext.js";
import { defaultFilename, validExtensions } from "./defaults.js";

const isExtValid = (ext) => !!ext && !validExtensions.includes(ext);

function getOptions(argsParser) {
  const filenameArg = argsParser.values.get("filename");
  const extArg = argsParser.values.get("format");
  let filename = defaultFilename;

  if (isExtValid(extArg)) {
    throw new InvalidExtension();
  }

  filename = getFilename(filenameArg, extArg);

  return { createFile: true, filename };
}

export default getOptions;
