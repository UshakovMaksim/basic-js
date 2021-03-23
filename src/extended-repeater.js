module.exports = function repeater(str, options) {

  const addStr = Array.from({ length: options.additionRepeatTimes || 1 },
    _ => options.addition || '')
    .join(options.additionSeparator || '|');

  return Array.from({ length: options.repeatTimes || 1 },
    _ => str.toString() + addStr)
    .join((options.separator || '+').toString()
    );
};
