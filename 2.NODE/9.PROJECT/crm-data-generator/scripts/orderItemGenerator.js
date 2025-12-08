const fs = require('fs');
const IdGenerator = require('../generators/common/IdGenerator');

function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

class OrderItemGenerator {
    generate(count) {
        const orderData = fs.readFileSync('./data/orders.csv', 'utf-8')
            .split('\n').slice(1)
            .map(line => line.split(',')[0]);
        const itemData = fs.readFileSync('./data/items.csv', 'utf-8')
            .split('\n').slice(1)
            .map(line => line.split(',')[0]);

        const idGen = new IdGenerator();
        const csvRows = ['Id,OrderId,ItemId'];
        for (let i = 0; i < count; i++) {
            csvRows.push([
                idGen.generate(),
                randomChoice(orderData),
                randomChoice(itemData)
            ].join(','));
        }
        return csvRows;
    }
}

module.exports = OrderItemGenerator;