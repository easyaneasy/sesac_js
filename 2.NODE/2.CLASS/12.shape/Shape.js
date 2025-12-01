class Shape {
    // getArea(){
    //     return 0;
    // }

    getArea(){ // 이걸 abstract class 처럼, abstract method 처럼..
        return Error('나를 구현해주세요');
    }
}

module.exports = Shape;