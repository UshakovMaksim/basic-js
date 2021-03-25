module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error;
  }
  let discardNext = false;
  let lastEmptyItem = -1;
  return arr.reduce((acc, el, i, array) => {
    if (discardNext) {
      discardNext = false;
      lastEmptyItem = i;
      return acc;
    }
    if (el === '--discard-next') {
      discardNext = true;
      return acc;
    }
    if (el === '--discard-prev') {
      if (acc.length > 0 && lastEmptyItem !== --i) {
        acc.pop();
      }
      return acc;
    }
    if (el === '--double-next') {
      if (++i < array.length) {
        acc.push(array[i]);
      }
      return acc;
    }
    if (el === '--double-prev') {
      if (i > 0 && lastEmptyItem !== --i) {
        acc.push(array[i]);
      }
      return acc;
    }
    acc.push(el);
    return acc;
  }, [])
};
