const fs = require('fs');
const path = require('path');

const UserGenerator = require('./scripts/userGenerator');
const StoreGenerator = require('./scripts/storeGenerator');
const ItemGenerator = require('./scripts/itemGenerator');
const OrderGenerator = require('./scripts/orderGenerator');
const OrderItemGenerator = require('./scripts/orderItemGenerator');

// 커맨드라인 인자
const type = process.argv[2];      // user,store,item,order,orderItem
const count = Number(process.argv[3]);
const outputType = process.argv[4]; // console/csv

// 공통 출력 함수
function output(csvRows, filePath, outputType) {
    if (outputType === 'console') {
        console.log(csvRows.join('\n'));
    } else if (outputType === 'csv') {
        fs.writeFileSync(filePath, csvRows.join('\n'), 'utf-8');
        console.log(`Saved to ${filePath}`);
    } else {
        console.log('출력 방식이 올바르지 않습니다. console 또는 csv를 입력하세요.');
    }
}

// generator와 파일 경로 선택
let generator;
let filePath;

if (type === 'user') {
    generator = new UserGenerator();
    filePath = path.join('./data/users.csv');
} else if (type === 'store') {
    generator = new StoreGenerator();
    filePath = path.join('./data/stores.csv');
} else if (type === 'item') {
    generator = new ItemGenerator();
    filePath = path.join('./data/items.csv');
} else if (type === 'order') {
    generator = new OrderGenerator();
    filePath = path.join('./data/orders.csv');
} else if (type === 'orderItem') {
    generator = new OrderItemGenerator();
    filePath = path.join('./data/orderItems.csv');
} else {
    console.log('지원하지 않는 타입입니다.');
    process.exit(1);
}

// 출력
const csvRows = generator.generate(count);
output(csvRows, filePath, outputType);  // console/csv 모두 처리