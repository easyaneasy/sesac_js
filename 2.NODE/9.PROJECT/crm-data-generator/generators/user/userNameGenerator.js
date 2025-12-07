class UserNameGenerator {
    constructor() {
        this.lastNames = ['김', '이', '박', '최', '정', '강', '조', '윤'];
        this.firstNames = ['민서', '지현', '우준', '예은', '하연', '수빈', '채원', '지우', '서연', '도윤'];
    }

    randomChoice(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    generate() {
        const lastName = this.randomChoice(this.lastNames);
        const firstName = this.randomChoice(this.firstNames);
        return lastName + firstName;
    }
}

module.exports = UserNameGenerator;