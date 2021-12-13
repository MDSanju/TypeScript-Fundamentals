"use strict";
// typescript class declaration
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
        // needs to use _ before the variable name, it's recommended only for 'private variable'
        this._millage = 150000;
    }
    // private variable's method
    getActualMillage() {
        const realMilage = this._millage + 50000;
        return realMilage;
    }
    getTotalPrice(tax) {
        const taxAmount = this.price * tax / 100;
        const total = this.price + taxAmount;
        return total;
    }
}
// make it class into object
const toyota = new Car('toyota', 9990000);
const totalPrice = toyota.getTotalPrice(25);
