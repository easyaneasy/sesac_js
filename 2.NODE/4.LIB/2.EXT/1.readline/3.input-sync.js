const readline = require('readline-sync');

rl = readline;

console.log("여기1");

// rl 이라는 변수를 통해서 키보드 입출력이 가능해졌음
rl.question("원하는 단을 입력하세요: ");

console.log("여기2");

// 안타깝게도 유니코드를 제대로 지원못하는 경우들이 많음
// 윈도우의 경우 터미널을 한시적으로 chcp65001