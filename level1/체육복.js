export const solution = ({ n, lost, reserve }) => {
  const lostLen = lost.length;
  const reserveLen = reserve.length >= lost.length ? lost.length : reserve.length;
  const result = n - lostLen + reserveLen
  console.log(reserveLen);
  return result;
}