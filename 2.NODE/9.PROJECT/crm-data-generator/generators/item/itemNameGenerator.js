class ItemNameGenerator {
    constructor() {
        this.itemMap = {
            Coffee: ['Americano', 'Espresso', 'Latte', 'Cold Brew'],
            Juice: ['Watermelon', 'Apple', 'Mango', 'Orange'],
            Cake: ['Strawberry', 'Red Velvet', 'Chocolate', 'Blueberry']
        };
    }

    randomChoice(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    generate(type) {
        const items = this.itemMap[type];
        if (!items) return 'Unknown Item';
        return `${this.randomChoice(items)} ${type}`;
    }
}

module.exports = ItemNameGenerator;