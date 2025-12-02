const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin, // 표준입출력(키보드입력, 0)
    output: process.stdout, // 표준입출력 (콘솔/화면 출력, 1)
});

rl.question("아무 입력이나 받아볼까? ", (input) => {
    console.log("입력값: ", input);
    rl.close();
});