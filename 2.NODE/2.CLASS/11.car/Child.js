const Person = require('./Person');

class Child extends Person {
    constructor(name, age, gender, school_year){
        super(name, age, gender);
        this.school_year = school_year;
    }

    playInCar(){
        console.log(`${this.name}이(가) 차 안에서 게임을 합니다`);
    }

    say(){
        console.log(`${this.name}, ${this.age}, ${this.grade} 입니다`);
    }
}

module.exports = Child;