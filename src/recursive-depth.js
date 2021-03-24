module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return Math.max(...
      arr.reduce((acc, el) =>
        Array.isArray(el) ?
          acc.concat([1 + this.calculateDepth(el)])
          : acc
        , [1])
    );
  }
};
