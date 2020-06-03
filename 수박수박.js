//길이가 n이고, 수박수박수박수....와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 수박수박을 리턴하고 3이라면 수박수를 리턴하면 됩니다.
// 예시 : n = 3 , return 수박수, n = 4, return 수박수박

export const solution = (n) => {
  const water = "수";
  const melon = "박";
  const arrayWaterMelon = [];

  for (let i = 1; i <= n; i++) {
    let isWaterMelon = i % 2 !== 0 ? water : melon;
    arrayWaterMelon.push(isWaterMelon);
  }

  return arrayWaterMelon.reduce((a, c) => a + c);
};
