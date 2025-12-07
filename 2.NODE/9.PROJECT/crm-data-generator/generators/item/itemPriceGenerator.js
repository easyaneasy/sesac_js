const { randomInt } = require('crypto');

class ItemPriceGenerator {
    generate(type) {
        if (type === 'Coffee') return randomInt(2500, 4000);
        if (type === 'Juice') return randomInt(4000, 6000);
        return randomInt(5000, 8000); // Cake
    }
}

module.exports = ItemPriceGenerator;