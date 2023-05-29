class ArgsParser {
  constructor(args, validArgs) {
    this.args = args;
    this.validArgs = validArgs;
  }

  get length() {
    return this.args.length;
  }

  get hasArgs() {
    return this.length > 0;
  }

  get keys() {
    if (!this.hasArgs) {
      return null;
    }
    return this.args.map((value) => {
      return value.substring(value.indexOf("--") + 2, value.indexOf("="));
    });
  }

  get valuesList() {
    return this.args.map((value) => value.split("=")[1]);
  }

  get values() {
    if (!this.hasArgs) {
      return null;
    }

    if (!this.hasValidArgs()) {
      throw new InvalidArgs();
    }

    let flags = new Map();
    const keys = this.keys;
    const values = this.valuesList;

    for (const index in this.keys) {
      const key = keys[index];
      const value = values[index];
      flags.set(key, value);
    }

    return flags;
  }

  hasValidArgs() {
    return this.keys.every((value) => this.validArgs.includes(value));
  }
}

module.exports = ArgsParser;
