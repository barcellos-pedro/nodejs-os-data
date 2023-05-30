#! /usr/bin/env node

import process from "node:process";
import getData from "../app.js";
import ArgsParser from "../lib/args-parser.js";
import getOptions from "../lib/options.js";
import { validArgs } from "../lib/defaults.js";

const args = process.argv.slice(2);
const argsParser = new ArgsParser(args, validArgs);

if (argsParser.hasArgs) {
  const { createFile, filename } = getOptions(argsParser);
  getData(createFile, filename).catch(console.error);
} else {
  getData().catch(console.error);
}
