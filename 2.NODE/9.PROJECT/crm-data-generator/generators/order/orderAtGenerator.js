class OrderAtGenerator {
    constructor(startYear = 2023, endYear = 2025) {
        this.startYear = startYear;
        this.endYear = endYear;
    }

    randomInt(min, max) {
        // min 이상, max 이하 정수 반환
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    generate() {
        const year = this.randomInt(this.startYear, this.endYear);
        const month = String(this.randomInt(1, 12)).padStart(2, '0');
        const day = String(this.randomInt(1, 28)).padStart(2, '0'); // 28일로 제한
        const hour = String(this.randomInt(0, 23)).padStart(2, '0');
        const minute = String(this.randomInt(0, 59)).padStart(2, '0');
        const second = String(this.randomInt(0, 59)).padStart(2, '0');

        return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    }
}

module.exports = OrderAtGenerator;