// typescript function
function add(num1: number, num2: number): number {
    const sum = num1 + num2;
    return sum;
}

const output: number = add(45, 10);

// void function, means writting system of a function without putting 'return'
function doubleConsole(price: number): void {
    console.log(3 * price);
}
doubleConsole(50);