const getInterval = (arr, from, to) => {
  if (!arr.every((elem) => typeof elem === 'number')) {
    throw Error(
      'В функцию getInterval были переданы невалидные параметры. Параметр arr должен содержать только числовые значения'
    );
  }
  if (typeof from !== 'number') {
    throw Error(
      'В функцию getInterval были переданы невалидные параметры. Параметр from должен быть числом'
    );
  }
  if (typeof to !== 'number') {
    throw Error(
      'В функцию getInterval были переданы невалидные параметры. Параметр to должен быть числом'
    );
  }
  if (to < from) {
    return arr.filter((elem) => elem >= to && elem <= from).reverse();
  }
  return arr.filter((elem) => elem >= from && elem <= to);
};
