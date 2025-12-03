const csv = require('csv-parser'); //우리가 설치한 외부 모듈

const fs = require('fs'); // 파일을 처리하기 위한 내장 모듈

const results = [];

fs.createReadStream('data-with-noheader.csv')
  .pipe(csv({
    headers: ['이름', '나이', '성별', '생년월일'] // 내가 원하는 키를 등록
  }))
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
  });
