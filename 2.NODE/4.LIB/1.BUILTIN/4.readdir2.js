const fs = require('fs');
const path = require('path');

const basePath = './';

//readdir : 디렉토리 안의 파일과 폴더 목록을 읽어오는 기능
fs.readdir(basePath, (err, files) => {
    if(err){
        console.log("오류났대");
        return;
    }

    // console.log("성공 결과: ", files);
    files.forEach(file => {
        const filePath = path.join(basePath, file);
        // console.log('파일: ', filePath);
        checkFile(filePath);
    })
});

function checkFile(filePath){
    fs.stat(filePath, (err, stats) => {
        if(err){
            console.log('stat 정보 가져오기 실패');
            return;
        }

        if(stats.isFile()){
            console.log('이것을 파일입니다: ', filePath);
        }else if(stats.isDirectory()){
            console.log('이것은 디렉토리 입니다: ', filePath);
        }else {
            console.log('이건 뭔지 모르겠습니다.');
        }
    })
}

