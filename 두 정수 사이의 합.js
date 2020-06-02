export const solution = (a, b) => {
  let maxNum;
  let minNum;
  let array = [];
  if (a > b) {
    maxNum = a;
    minNum = b;
  }
  if (b > a) {
    maxNum = b;
    minNum = a;
  }
  for (let i = minNum; i <= maxNum; i++) {
    array.push(i);
  }
  return array.reduce((ac, cu) => ac + cu);
};
