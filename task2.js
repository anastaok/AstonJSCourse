const getNumberRadix = (number, radix) => {
  const validNumber = +number;
  const message =
    'Функция getNumberRadix была вызвана с некорректными параметрами';
  if (
    Number.isInteger(validNumber) &&
    validNumber > 0 &&
    radix >= 2 &&
    radix <= 16
  ) {
    return validNumber.toString(radix);
  }
  throw Error(message);
};
