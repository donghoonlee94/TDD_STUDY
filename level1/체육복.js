
export const arrLength = arr => arr.length;

export const availableLen = (lost, reserve) => {
  const availableArr = lost.filter(el => reserve.includes(el + 1 || el - 1));
  return availableArr.length;
}

export const resultNum = (n, lost, reserve) => {
  return n - arrLength(lost) + availableLen(lost, reserve);
}

export const solution = ({ n, lost, reserve }) => {
  return resultNum(n, lost, reserve);
}