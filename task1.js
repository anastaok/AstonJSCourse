const deleteElementFromArray = (arr, elem) => {
  const copyArray = [...arr];
  const indexArray = copyArray.indexOf(elem);

  if (indexArray !== -1) {
    copyArray.splice(indexArray, 1);
    return copyArray;
  }
  return arr;
};
