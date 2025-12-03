const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
    path: 'data2.csv',
    header: [
        {id: 'name', title: '이름'},
        {id: 'age', title: '나이'},
        {id: 'gender', title: '성별'},
        {id: 'birthdate', title: '생년월일'},
    ]
});
 
const records = [
    {name: '홍길동', age: 24, gender: "남성", birthdate: '2000-01-0'},
    {name: '김길동', age: 25, gender: "여성", birthdate: '2001-03-07'},
    {name: '김길동', age: 27, gender: "남성", birthdate: '2002-08-09'},
];
 
csvWriter.writeRecords(records)       // returns a promise
    .then(() => {
        console.log('...저장완료');
    });
 