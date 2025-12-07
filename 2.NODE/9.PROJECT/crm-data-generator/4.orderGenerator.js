const fs = require('fs');

const IdGenerator = require('./generators/common/IdGenerator');
const OrderAtGenerator = require('./generators/order/OrderAtGenerator');

// 이미 생성된 CSV 파일 읽기 (StoreId,UserId)
const storeData = fs.readFileSync('stores.csv', 'utf-8')
    .split('\n')
    .slice(1) // 헤더 제외
    .map(line => line.split(',')[0]);

const userData = fs.readFileSync('users.csv', 'utf-8')
    .split('\n')
    .slice(1)
    .map(line => line.split(',')[0]);

function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const idGen = new IdGenerator();
const orderAtGen = new OrderAtGenerator();

const orderCount = 10;
const header = 'Id,OrderAt,StoreId,UserId';
const csvRows = [header];

for (let i = 0; i < orderCount; i++) {
    const storeId = randomChoice(storeData); // 반복마다 랜덤
    const userId = randomChoice(userData);   // 반복마다 랜덤

    const row = [
        idGen.generate(),
        orderAtGen.generate(),
        storeId,
        userId
    ].join(',');

    csvRows.push(row);
}

fs.writeFileSync('orders.csv', csvRows.join('\n'), 'utf-8');
