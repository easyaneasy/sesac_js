class Person {
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log(`안녕 나는 ${this.name}이야`);
    }
}

// 다른파일에서 가져다 쓸 수 있게 내보내기
module.exports = Person;