const fs = require('fs');

const IdGenerator = require('./generators/common/IdGenerator');
const StoreNameGenerator = require('./generators/store/StoreNameGenerator');
const StoreTypeGenerator = require('./generators/store/StoreTypeGenerator');
const AddressGenerator = require('./generators/common/AddressGenerator');

const storeCount = 10;

const idGen = new IdGenerator();
const nameGen = new StoreNameGenerator();
const typeGen = new StoreTypeGenerator();
const addressGen = new AddressGenerator();

const header = 'Id,Name,Type,Address';
const csvRows = [header];

for (let i = 0; i < storeCount; i++) {
    const type = typeGen.generate();
    const name = nameGen.generate(type);
    const row = [
        idGen.generate(),
        name,
        type,
        addressGen.generate()
    ].join(',');

    csvRows.push(row);
}

fs.writeFileSync('stores.csv', csvRows.join('\n'), 'utf-8');
