const ERROR = 'The index cannot be a negative number or a fractional number';

const addElementsToArray = (arr, index) => {
  return function (...elems) {
    if (isPositiveIndex(index)) {
      if (index > arr.length || index === undefined) {
        return [...arr, ...elems];
      }
      const copyArray = [...arr];
      copyArray.splice(index, 0, ...elems);
      return copyArray;
    }
    throw new Error(ERROR);
  };

  function isPositiveIndex(index) {
    return (index > 0 && Number.isInteger(index)) || index === undefined;
  }
};
