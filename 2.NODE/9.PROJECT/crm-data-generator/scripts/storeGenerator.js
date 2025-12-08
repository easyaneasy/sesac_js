const IdGenerator = require('../generators/common/IdGenerator');
const StoreNameGenerator = require('../generators/store/StoreNameGenerator');
const StoreTypeGenerator = require('../generators/store/StoreTypeGenerator');
const AddressGenerator = require('../generators/common/AddressGenerator');

class StoreGenerator {
    constructor() {
        this.idGen = new IdGenerator();
        this.nameGen = new StoreNameGenerator();
        this.typeGen = new StoreTypeGenerator();
        this.addressGen = new AddressGenerator();
    }

    generate(count) {
        const csvRows = ['Id,Name,Type,Address'];
        for (let i = 0; i < count; i++) {
            const type = this.typeGen.generate();
            csvRows.push([
                this.idGen.generate(),
                this.nameGen.generate(type),
                type,
                this.addressGen.generate()
            ].join(','));
        }
        return csvRows;
    }
}

module.exports = StoreGenerator;
