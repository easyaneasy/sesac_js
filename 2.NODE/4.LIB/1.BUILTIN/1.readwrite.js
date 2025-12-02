// 파일 입출력을 해야함

// 1
const fs = require('fs');

// 2. 나 끝나면 내 안의 서브 2-a를 호출해줘
// 콜백.. 내가 너에게 일을 시켰으니, 다했으면 그때 나를 불러줘
fs.readFile('example.txt', 'utf-8', (error, success) => { // 인코딩 필요
    // 2-a 
    console.log('일단 끝 결과가 성공이든 실패든 일다 끝났음');
    // console.log('error에는 뭘 담아뒀지?', error);
    // console.log('success에는 뭘 담아뒀지?', success); // 그냥하면 16진수로 나옴
    if(error) {
        console.log('파일 읽기에 실패했습니다: ', error.message);
    }else {
        console.log(success);
    }
    
});

// 3
console.log("내가 더 먼저 끝남");

// 4.
// 파일 쓰기
const content = "여기에는 내가 쓰고 싶은 내용을 작성합니다.";
fs.writeFile('example2.txt', content, 'utf-8', (err) => {
    // 4-a
    if(err){
        console.log("파일쓰기에 실패했습니다.");
    }else {
        console.log("파일쓰기에 성공했습니다.");
    }
});

console.log("난 언제 실행될까?");