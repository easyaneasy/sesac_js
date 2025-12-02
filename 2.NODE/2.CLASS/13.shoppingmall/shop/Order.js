class Order {
    constructor(user){
        this.user = user;
        this.products = [];
        this.totalAmount = 0;
    }
    addProduct(product, quantity){
        // 논리적으로 생각해서 이 상품과 갯수들을 어떻게 다룰것이냐
        if(product.checkAvailability(quantity)){
            this.products.push({product, quantity});
            this.totalAmount += product.price * quantity;
        }else {
            console.log(`상품의 재고가 부족합니다. ${product.name}을 주문하실수없습니다`);
        }
    }
    getOrderSummaryOLDJS(){
        // for문을 사용..
    }
    getOrderSummary(){
        return {
            // 내가 원하는걸 key:value로 반환
            user: this.user.name,
            totalAmount: this.totalAmount,
            items: this.products.map(({ product, quantity }) => ({
                name: product.name,
                quantity: quantity,
                price: product.price,
            })),
        };
    }
}

module.exports = Order;