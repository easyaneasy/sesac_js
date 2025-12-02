class Product {
    constructor(name, price, stock){
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    updateStock(quantity){
        this.stock += quantity;
    }
    // 주문 가능한지 확인
    checkAvailability(quantity){
        return this.stock >= quantity; // true / false
    }
}

class Electronics extends Product {
    constructor(name, price, stock, warranty){
        super(name, price, stock);
        this.warranty = warranty;
    }
}

class Clothing extends Product {
    constructor(name, price, stock, size){
        super(name, price, stock);
        this.size = size;
    }
}

module.exports = { Product, Electronics, Clothing };