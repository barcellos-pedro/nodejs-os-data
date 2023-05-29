#! /usr/bin/env node

const process = require("node:process");
const getData = require("../app");
const ArgsParser = require("../lib/args-parser");
const getFileInfo = require("../lib/file-info");
const InvalidExtension = require("../lib/errors/invalid-ext");

const args = process.argv.slice(2);
const validArgs = ["format", "filename"];
const argsParser = new ArgsParser(args, validArgs);

if (!argsParser.hasArgs) {
  getData().catch(console.error);
  return;
}

const createFile = true;
const validExtensions = ["csv", "json", "txt"];
const filenameArg = argsParser.values.get("filename");
const extArg = argsParser.values.get("format");

let defaultFilename = "info";
let defaultExt = "txt";
let outputFile = `${defaultFilename}.${defaultExt}`;
const isExtValid = () => !!extArg && !validExtensions.includes(extArg);

if (isExtValid()) {
  throw new InvalidExtension();
}

if (filenameArg && extArg) {
  const { name } = getFileInfo(filenameArg);
  outputFile = `${name}.${extArg}`;
} else if (filenameArg && !extArg) {
  const file = getFileInfo(filenameArg);
  outputFile = `${file.name}.${file.ext}`;
} else if (!filenameArg && extArg) {
  outputFile = `${defaultFilename}.${extArg}`;
}

getData(createFile, outputFile).catch(console.error);
