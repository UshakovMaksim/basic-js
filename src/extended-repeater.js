module.exports = function repeater(str, options) {
  str = '' + str;
  const repeatTimes = 'repeatTimes' in options ? options.repeatTimes : 1;
  const separator = 'separator' in options ? '' + options.separator : '+';
  const addition = 'addition' in options ? '' + options.addition : '';
  const additionRepeatTimes = 'additionRepeatTimes' in options ? options.additionRepeatTimes : 1;
  const additionSeparator = 'additionSeparator' in options ? '' + options.additionSeparator : '|';

  const addStr = Array.from({ length: additionRepeatTimes }, _ => addition).join(additionSeparator);
  return Array.from({ length: repeatTimes }, _ => str + addStr).join(separator);
};
