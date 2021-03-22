const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  return members.reduce( (acc, el) => typeof(el) === 'string' ? acc.concat(el.trim().substring(0,1).toUpperCase()) : acc, [] ).sort().join('');
};
