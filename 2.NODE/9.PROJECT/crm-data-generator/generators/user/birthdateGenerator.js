class BirthdateGenerator {
    constructor(startYear = 1960, endYear = 2000) {
        this.startYear = startYear;
        this.endYear = endYear;
    }

    generate() {
        const year = Math.floor(Math.random() * (this.endYear - this.startYear + 1)) + this.startYear;
        const month = String( Math.floor(Math.random() * 12) + 1).padStart(2, '0');
        const day = String(Math.floor(Math.random() * 30) + 1).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }
}

module.exports = BirthdateGenerator;