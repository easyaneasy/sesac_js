class AddressGenerator {
    constructor() {
        this.cities = ['서울', '부산', '대구', '인천', '광주'];
        this.districts = ['강남구', '해운대구', '중구', '서구', '남구', '연수구', '광산구'];
    }

    randomChoice(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    generate() {
        const city = this.randomChoice(this.cities);
        const district = this.randomChoice(this.districts);
        const num1 = Math.floor(Math.random() * 100);
        const num2 = Math.floor(Math.random() * 100);
        const street = Math.random() < 0.5 ? '길' : '로';

        return `${city} ${district} ${num1}${street} ${num2}`;
    }
}

module.exports = AddressGenerator;