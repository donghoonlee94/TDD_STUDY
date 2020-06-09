// 배열의 수를 모두 합한 뒤 합한 수의 평균을 구하는 코드.

// export const solution = (arr) => {
//   return arr.reduce((ac, cu) => ac + cu) / arr.length;
// }


export const arrTotal = (arr) => {
  return arr.reduce((ac, cu) => ac + cu);
}

export const solution = (arr) => {
  const sum = arrTotal(arr);
  const obj = {
    [sum]: (len) => {
      return sum / len;
    }
  }
  return obj[sum](arr.length);
}