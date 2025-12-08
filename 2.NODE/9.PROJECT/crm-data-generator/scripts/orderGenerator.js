const fs = require('fs');
const IdGenerator = require('../generators/common/IdGenerator');
const OrderAtGenerator = require('../generators/order/OrderAtGenerator');

function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

class OrderGenerator {
    generate(count) {
        const storeData = fs.readFileSync('./data/stores.csv', 'utf-8')
            .split('\n').slice(1)
            .map(line => line.split(',')[0]);
        const userData = fs.readFileSync('./data/users.csv', 'utf-8')
            .split('\n').slice(1)
            .map(line => line.split(',')[0]);

        const idGen = new IdGenerator();
        const orderAtGen = new OrderAtGenerator();

        const csvRows = ['Id,OrderAt,StoreId,UserId'];
        for (let i = 0; i < count; i++) {
            csvRows.push([
                idGen.generate(),
                orderAtGen.generate(),
                randomChoice(storeData),
                randomChoice(userData)
            ].join(','));
        }
        return csvRows;
    }
}

module.exports = OrderGenerator;
