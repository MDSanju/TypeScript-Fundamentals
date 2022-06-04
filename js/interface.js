"use strict";
// connect object
const messi = {
    name: 'Lionel Messi',
    club: 'Barcelona',
    salary: 100000000,
    country: 'Argentina',
    wife: 'Antonela Roccuzzo',
};
const tamim = {
    name: 'Tamim Iqbal',
    club: 'Chittagong',
    salary: 540000,
    country: 'Bangladesh'
};
// the object
const zuckerberg = {
    name: 'Mark Zuckerberg',
    designation: 'Facebook Creator',
    age: 31,
    language: 'JavaScript',
    codeEditor: 'VS Code',
    typingSpeed: 40,
};
const device = (configurations) => {
    const deviceBrand = configurations.brand;
    const deviceModel = configurations.model;
    const devicePrice = configurations.price;
    const deviceScreenSize = configurations.screenSize;
    console.log(`Brand: ${deviceBrand}, Model: ${deviceModel}, Price: ${devicePrice} Screen Size: ${deviceScreenSize ? deviceScreenSize : null}`);
};
device({
    brand: "Apple",
    model: "MacBook Pro",
    price: 300000,
});
device({
    brand: "HP",
    model: "EliteBook",
    price: 100000,
    screenSize: 14,
});
