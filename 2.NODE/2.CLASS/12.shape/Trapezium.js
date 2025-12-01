const Shape = require('./Shape');

class Trapezium extends Shape {
    constructor(top, bottom, height){
        super();
        this.top = top;
        this.bottom = bottom;
        this.height = height;
    }
    getArea(){
        return ((this.top + this.bottom) / 2) * this.height;
    }
}

module.exports = Trapezium;