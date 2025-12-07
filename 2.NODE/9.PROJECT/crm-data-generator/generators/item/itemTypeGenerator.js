class ItemTypeGenerator {
    constructor() {
        this.itemTypes = ['Coffee', 'Juice', 'Cake'];
    }

    randomChoice(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    generate() {
        return this.randomChoice(this.itemTypes);
    }
}

module.exports = ItemTypeGenerator;