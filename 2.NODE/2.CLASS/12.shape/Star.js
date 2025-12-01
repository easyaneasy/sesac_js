const Shape = require('./Shape');

class Star extends Shape {
    constructor(length){
        super();
        this.length = length;
    }

    getArea() {
        return this.length * 5 ** 2; // 내마음대로 공식
    }
}

module.exports = Star;