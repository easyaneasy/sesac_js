const fs = require('fs');
const path = require('path');

const basePath = './';

//readdir : 디렉토리 안의 파일과 폴더 목록을 읽어오는 기능
fs.readdir(basePath, (err, files) => {
    if(err){
        console.log("오류났대");
        return;
    }

    console.log("성공 결과: ", files);

    files.forEach(file => {
        const filePath = path.join(basePath, file);
        console.log('파일: ', filePath);
    })
});

