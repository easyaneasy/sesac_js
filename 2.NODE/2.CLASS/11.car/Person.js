const Car = require('./Car');

class Person {
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    greet(){
        console.log(`안녕 나는 ${this.age}살, ${this.gender}, ${this.name}이야`);
    }
    getInCar(car){
        if (car instanceof Car) {
            console.log(`${this.name}이(가) ${car.brand} ${car.model}에 탑승합니다`);
        } else {
            console.log("올바른 자동차를 입력해주세요");
        }
    }
}

module.exports = Person;