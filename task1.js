Array.prototype.filterArray = function (callback, thisArg = null) {
  const filteredResult = [];
  for (let i = 0; i <= this.length; i++) {
    let element = this[i];
    if (callback.call(thisArg, element, i, this)) {
      filteredResult.push(element);
    }
  }
  return filteredResult;
};
