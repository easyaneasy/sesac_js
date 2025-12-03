const csv = require('csv-parser'); //우리가 설치한 외부 모듈

const fs = require('fs'); // 파일을 처리하기 위한 내장 모듈

const results = [];

fs.createReadStream('data.csv')
// fs.createReadStream('data-with-header.csv')
// fs.createReadStream('data-with-noheader.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        console.log(results);
    });

// fs.createReadStream('data.csv').pipe(csv()).on('data', (data) => results.push(data)).on('end', () => {
//     console.log(results);
// });