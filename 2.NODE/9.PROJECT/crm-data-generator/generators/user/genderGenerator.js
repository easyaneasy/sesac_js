class GenderGenerator {
    generate() {
        return Math.random() < 0.5 ? "Male" : "Female";
    }
}

module.exports = GenderGenerator;