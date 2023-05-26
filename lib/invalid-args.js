class InvalidArgs extends Error {
  constructor() {
    super("Valid args are: --format=json|csv --filename=something.txt");
  }
}

module.exports = InvalidArgs;