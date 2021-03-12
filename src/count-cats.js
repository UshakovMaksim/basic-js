const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.reduce( (acc, el) => el.filter( el => el === '^^').length + acc, 0);
};
