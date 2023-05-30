class DataError extends Error {
  constructor(msg) {
    super(msg);
  }
}

module.exports = DataError;
