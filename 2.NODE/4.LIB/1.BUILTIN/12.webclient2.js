const http = require('http');

// const url = 'http://www.example.com/path/test.html';
const url = 'http://www.example.com';


const req = http.request(url, (res) => {
    console.log(`STATUS ${res.statusCode}`);
    console.log(`HEADERS ${JSON.stringify(res.headers)}`); // JSON 객체를 문자화(직렬화)
    res.setEncoding('utf-8');
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
});

req.on('error', (error) => {
    console.log('오류발생');
});

req.end(); // 시작..