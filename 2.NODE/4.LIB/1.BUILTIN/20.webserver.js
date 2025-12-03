const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const ip = req.socket.remoteAddress;
    
    // 사용자에게 보낼 파일 읽어서 준비하기
    fs.readFile('index.html', 'utf-8', (err, data) => {
        if(err){
            console.log('에러');
            res.writeHead(500, {'Content-Type' : 'text/html; charset=utf-8'});
            res.end('알수없는 오류가 발생했습니다');
            return;
        }
    })

    console.log('접속자를 추적했음', ip);
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end('<meta charset="utf-8"><h1>안녕하세요, 내 서버입니다</h1>');
});

server.listen(3000);

