// 두 정수 사이의 합을 구해야 함.

const arrayCompare = (a, b) => {
  const array = [];
  const maxNum = a > b ? a : b;
  const minNum = a < b ? a : b;

  for (let i = minNum; i <= maxNum; i++) {
    array.push(i);
  }

  return array;
};

export const solution = (a, b) => {
  return a === b ? a : arrayCompare(a, b).reduce((ac, cu) => ac + cu);
};
