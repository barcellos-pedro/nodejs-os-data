const process = require("node:process");

class ArgsParser {
  constructor(args, validArgs) {
    this.args = args;
    this.validArgs = validArgs;
  }

  get length() {
    return this.args.length;
  }

  get keys() {
    if (!this.length) {
      return null;
    }
    return this.args.map((value) => {
      return value.substring(value.indexOf("--") + 2, value.indexOf("="));
    });
  }

  get valuesList() {
    if (!this.length) {
      return null;
    }
    return this.args.map((value) => value.split("=")[1]);
  }

  get value() {
    if (!this.hasArgs()) {
      return null;
    }

    if (!this.validateArgs()) {
      throw new InvalidArgs();
    }

    let options = {};
    const keys = this.keys;
    const values = this.valuesList;

    for (let i = 0; i < keys.length; i++) {
      options = {
        ...options,
        [keys[i]]: values[i],
      };
    }

    return options;
  }

  hasArgs() {
    return this.length > 0;
  }

  validateArgs() {
    if (this.keys.some((value) => !this.validArgs.includes(value))) {
      return false;
    }
    return true;
  }
}

// ---

// Test
// const args = process.argv.slice(2);
// const validArgs = ["format", "filename"];
// const argParser = new ArgsParser(args, validArgs);
// console.log(argParser);

// if (argParser.hasArgs(args)) {
//   console.log("has valid args");
//   console.log(argParser.length);
//   console.log(argParser.keys);
//   console.log(argParser.valuesList);
//   console.log(argParser.value);
// } else {
//   console.log("no args");
// }

module.exports = ArgsParser;
