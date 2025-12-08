const IdGenerator = require('../generators/common/IdGenerator');
const ItemNameGenerator = require('../generators/item/ItemNameGenerator');
const ItemTypeGenerator = require('../generators/item/ItemTypeGenerator');
const ItemPriceGenerator = require('../generators/item/ItemPriceGenerator');

class ItemGenerator {
    constructor() {
        this.idGen = new IdGenerator();
        this.nameGen = new ItemNameGenerator();
        this.typeGen = new ItemTypeGenerator();
        this.priceGen = new ItemPriceGenerator();
    }

    generate(count) {
        const csvRows = ['Id,Name,Type,UnitPrice'];
        for (let i = 0; i < count; i++) {
            const type = this.typeGen.generate();
            csvRows.push([
                this.idGen.generate(),
                this.nameGen.generate(type),
                type,
                this.priceGen.generate(type)
            ].join(','));
        }
        return csvRows;
    }
}

module.exports = ItemGenerator;
