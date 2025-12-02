const http = require('http');

const server = http.createServer();

server.on('connection', () => {
    console.log('TCP 연결이 시작되었습니다.');
});

server.on('request', (req, res) => {
    console.log('HTTP 요청이 시작되었습니다.');
    res.writeHead(200, {'Connect-Type': 'text/plain'}); // 나의 응답
    res.end('Hello: HTTP Server!');
});

console.log('서버는 사실 여기에서 시작되었습니다.');
server.listen(3000); // 서버의 대기상태에 들어가서...
console.log('나는 언제 찍힐까요?');