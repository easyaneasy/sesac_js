class StoreTypeGenerator {
    randomChoice(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    generate() {
        const storeTypes = ['스타벅스', '투썸', '커피빈', '이디야'];
        return this.randomChoice(storeTypes);
    }
}

module.exports = StoreTypeGenerator;