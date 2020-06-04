import { solution } from "./완주하지 못한 선수";

const participantArray1 = ['leo', 'kiki', 'eden'];
const participantArray2 = ['marina', 'josipa', 'nikola', 'vinko', 'filipa'];
const participantArray3 = ['mislav', 'stanko', 'mislav', 'ana'];

const completionArray1 = ['kiki', 'eden'];
const completionArray2 = ['marina', 'josipa', 'nikola', 'filipa'];
const completionArray3 = ['mislav', 'stanko', 'ana'];

describe("완주하지 못한 선수 테스트", () => {
  it("완주하지 못한 선수", () => {
    expect(solution(participantArray1, completionArray1)).toEqual("leo");
    expect(solution(participantArray2, completionArray2)).toEqual("vinko");
    expect(solution(participantArray3, completionArray3)).toEqual("mislav");
  });
});
