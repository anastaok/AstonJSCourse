const deepCopyObject = (obj) => {
  let copyObject = {};
  for (let i in obj) {
    if (obj[i] != null && typeof obj[i] == 'object')
      copyObject[i] = deepCopyObject(obj[i]);
    else copyObject[i] = obj[i];
  }
  return copyObject;
};
