const fs = require('fs');
const IdGenerator = require('../generators/common/IdGenerator');

// 이미 생성된 CSV 파일 읽기 (OrderId,ItemId)
const orderData = fs.readFileSync('../data/orders.csv', 'utf-8')
    .split('\n')
    .slice(1) // 헤더 제외
    .map(line => line.split(',')[0]);

const itemData = fs.readFileSync('../data/items.csv', 'utf-8')
    .split('\n')
    .slice(1)
    .map(line => line.split(',')[0]);

function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const idGen = new IdGenerator();

const orderItemCount = Number(process.argv[2]);
const outputType = process.argv[3];

const header = 'Id,OrderId,ItemId';
const csvRows = [header];

for (let i = 0; i < orderItemCount; i++) {
    const orderId = randomChoice(orderData); // 반복마다 랜덤
    const itemId = randomChoice(itemData);   // 반복마다 랜덤

    const row = [
        idGen.generate(),
        orderId,
        itemId
    ].join(',');

    csvRows.push(row);
}

if (outputType === 'console') {
    console.log(csvRows.join('\n'));
}else if((outputType === 'csv')){
    fs.writeFileSync('../data/orderItems.csv', csvRows.join('\n'), 'utf-8');
}else {
    console.log("잘못입력했습니다");
}