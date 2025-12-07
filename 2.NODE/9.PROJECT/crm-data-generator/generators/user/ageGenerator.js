class AgeGenerator {
    generate() {
        return Math.floor(Math.random() * 80) + 20; // 20 ~ 99
    }
}

module.exports = AgeGenerator;