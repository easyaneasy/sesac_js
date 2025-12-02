const fs = require('fs');
const http = require('http');

const server = http.createServer();

// 서버가 8000을 열고 기다린다
// 사용자의 요청이 오면 그 파일을 열어서
// 그 내용을 전달한다

server.on('request', (req, res) => {
    console.log('HTTP 요청이 시작되었습니다.');

    // 파일을 읽는다
    fs.readFile('index.html', 'utf-8', (error, data) => {
        if(error) {
            console.log('파일 읽기에 실패했습니다: ', error.message);
            res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
            res.end('파일 읽기 실패');
            server.close(() => {
                console.log('파일 읽기 실패!! 서버가 종료되었습니다');
            });
        }else {
            console.log('파일 읽기에 성공했습니다');
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.end(data); // 화면에 보이기
            // server.close(() => {
            //     console.log('파일 읽기 성공!! 서버가 종료되었습니다');
            // });
        }
    });
});

console.log('서버 시작');
server.listen(8000); // 서버의 대기상태에 들어가서...