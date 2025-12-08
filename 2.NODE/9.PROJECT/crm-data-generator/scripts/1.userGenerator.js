const fs = require('fs');

const IdGenerator = require('../generators/common/IdGenerator');
const UserNameGenerator = require('../generators/user/UserNameGenerator');
const GenderGenerator = require('../generators/user/GenderGenerator');
const AgeGenerator = require('../generators/user/AgeGenerator');
const BirthdateGenerator = require('../generators/user/birthdateGenerator');
const AddressGenerator = require('../generators/common/AddressGenerator');

const userCount =  Number(process.argv[2]);
const outputType = process.argv[3];

// Generator 객체 생성
const idGen = new IdGenerator();
const nameGen = new UserNameGenerator();
const genderGen = new GenderGenerator();
const ageGen = new AgeGenerator();
const birthdateGen = new BirthdateGenerator();
const addressGen = new AddressGenerator();

const header = 'Id,Name,Gender,Age,Birthdate,Address';
const csvRows = [header]; // 첫 번째 요소로 헤더

for(let i = 0; i < userCount; i++) {
    const row = [
        idGen.generate(),
        nameGen.generate(),
        genderGen.generate(),
        ageGen.generate(),
        birthdateGen.generate(),
        addressGen.generate()
    ].join(',');

    csvRows.push(row);
}

// 파일 쓰기
if (outputType === 'console') {
    console.log(csvRows.join('\n'));
}else if((outputType === 'csv')){
    fs.writeFileSync('../data/users.csv', csvRows.join('\n'), 'utf-8');
}else {
    console.log("잘못입력했습니다");
}
