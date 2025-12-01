class NameGenerator {
    constructor(){
        this.lastNames = ['김', '이', '박'];
        this.firstNames = ['서준', '민준', '지윤'];
    }
    pickRandom(arr){
        return arr[Math.floor(Math.random() * arr.length)];
    }
    generateName(){
        const lastName = this.pickRandom(this.lastNames);
        const firstName = this.pickRandom(this.firstNames);
        return lastName + firstName;
    }
}

const gen = new NameGenerator();
console.log(gen.generateName());