import { solution } from "./완주하지 못한 선수";



describe("완주하지 못한 선수 테스트", () => {
  it("test1", () => {
    const participantArr = ['leo', 'kiki', 'eden'];
    const completionArr = ['kiki', 'eden'];
    expect(solution(participantArr, completionArr)).toEqual("leo");
  });
  it("test2", () => {
    const participantArr = ['marina', 'josipa', 'nikola', 'vinko', 'filipa'];
    const completionArr = ['marina', 'josipa', 'nikola', 'filipa'];
    expect(solution(participantArr, completionArr)).toEqual("vinko");
  });
  it("test3", () => {
    const participantArr = ['mislav', 'stanko', 'mislav', 'ana'];
    const completionArr = ['mislav', 'stanko', 'ana'];
    expect(solution(participantArr, completionArr)).toEqual("mislav");
  });
  it("test4", () => {
    const participantArr = ['mislav', 'stanko', 'mislav', 'stanko'];
    const completionArr = ['mislav', 'stanko', 'mislav'];
    expect(solution(participantArr, completionArr)).toEqual("stanko");
  });
  it("test5", () => {
    const participantArr = ['js', 'yarn', 'stanko', 'yarn', 'dragon', 'dev', 'local', 'mislav', 'js', 'java', 'yarn', 'python', 'stanko', 'php', 'mislav'];
    const completionArr = ['mislav', 'yarn', 'mislav', 'stanko', 'dev', 'js', 'java', 'python', 'php', 'dragon', 'yarn', 'stanko', 'js', 'yarn'];
    expect(solution(participantArr, completionArr)).toEqual("local");
  });
});
