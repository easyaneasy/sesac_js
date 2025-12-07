const fs = require('fs');

const IdGenerator = require('./generators/common/IdGenerator');
const ItemNameGenerator = require('./generators/item/ItemNameGenerator');
const ItemTypeGenerator = require('./generators/item/ItemTypeGenerator');
const ItemPriceGenerator = require('./generators/item/ItemPriceGenerator');

const itemCount = 10;

const idGen = new IdGenerator();
const nameGen = new ItemNameGenerator();
const typeGen = new ItemTypeGenerator();
const priceGen = new ItemPriceGenerator();

const header = 'Id,Name,Type,UnitPrice';
const csvRows = [header];

for(let i = 0; i < itemCount; i++) {
    const type = typeGen.generate();
    const name = nameGen.generate(type);
    const price = priceGen.generate(type);

    const row = [
        idGen.generate(),
        name,
        type,
        price
    ].join(',');

    csvRows.push(row);
}

fs.writeFileSync('items.csv', csvRows.join('\n'), 'utf-8');
