class InvalidExtension extends Error {
  constructor() {
    super("Only those extensions are valid: txt, json or csv");
  }
}

module.exports = InvalidExtension;
