const getErrorStatusCode = (errorMessage) => {
  return Number(errorMessage.substring(errorMessage.length - 3, errorMessage.length));
}

module.exports = {
  getErrorStatusCode,
}
