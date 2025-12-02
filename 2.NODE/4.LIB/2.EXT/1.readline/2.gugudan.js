const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin, // 표준입출력(키보드입력, 0)
    output: process.stdout, // 표준입출력 (콘솔/화면 출력, 1)
});

function gugudan(num){
    console.log(`=== ${num}단 ===`);
    for(let i = 1; i <= 9; i++){
        console.log(`${num} X ${i} = ${num * i}`);
    }
}

// console.log("여기1");

rl.question("원하는 단을 입력하세요: ", (dan) => {
    gugudan(dan);
    rl.close();
});

// console.log("여기2");