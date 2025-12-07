class StoreNameGenerator {
    randomChoice(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    generate(type) {
        const areas = ['홍대', '송파', '강서', '신촌', '잠실'];
        const area = this.randomChoice(areas);
        const number = Math.floor(Math.random() * 10) + 1; // 1~10
        return `${type} ${area}${number}호점`;
    }
}

module.exports = StoreNameGenerator;