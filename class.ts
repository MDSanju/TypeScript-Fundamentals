// typescript class declaration
class Car {
    model: string;
    price: number;
    // we can do 'private' in a class only for typescript, not in es6
    private _millage: number;
    constructor(model: string, price: number) {
        this.model = model;
        this.price = price;
        // needs to use _ before the variable name, it's recommended only for 'private variable'
        this._millage = 150000;
    }
    // private variable's method
    getActualMillage():number {
        const realMilage = this._millage + 50000;
        return realMilage;
    }
    getTotalPrice(tax: number): number {
        const taxAmount = this.price * tax / 100;
        const total = this.price + taxAmount;
        return total;
    }
}

// make it class into object
const toyota = new Car('toyota', 9990000);
const totalPrice: number = toyota.getTotalPrice(25);