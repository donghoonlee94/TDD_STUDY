export const solution = ({ n, lost, reserve }) => {
  const lostLen = lost.length;
  const available = [];
  lost.map(el => {
    if (reserve.includes(el + 1 || el - 1)) {
      available.push(el);
    }
  });
  const availableLen = available.length;
  const result = n - lostLen + availableLen;
  console.log(availableLen);
  return result;
}