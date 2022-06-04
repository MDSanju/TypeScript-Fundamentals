// interface, it's written for objects instead of type
interface Player {
    name: string,
    club: string,
    salary: number,
    country: string,
    wife?: string
    previousClubs?: string[]
}

// connect object
const messi: Player = {
    name: 'Lionel Messi',
    club: 'Barcelona',
    salary: 100000000,
    country: 'Argentina',
    wife: 'Antonela Roccuzzo',
}

const tamim: Player = {
    name: 'Tamim Iqbal',
    club: 'Chittagong',
    salary: 540000,
    country: 'Bangladesh'
}

// extends interface
interface Employee {
    name: string,
    designation: string,
    salary?: number,
    age: number
}
// extends in this interface
interface Developer extends Employee {
    language: string,
    codeEditor: string,
    typingSpeed: number
}
// the object
const zuckerberg: Developer = {
    name: 'Mark Zuckerberg',
    designation: 'Facebook Creator',
    age: 31,
    language: 'JavaScript',
    codeEditor: 'VS Code',
    typingSpeed: 40,
}

interface LaptopConfig {
  brand: string;
  model: string;
  price: number;
  screenSize?: number;
}

const device = (configurations: LaptopConfig) => {
  const deviceBrand = configurations.brand;
  const deviceModel = configurations.model;
  const devicePrice = configurations.price;
  const deviceScreenSize = configurations.screenSize;

  console.log(
    `Brand: ${deviceBrand}, Model: ${deviceModel}, Price: ${devicePrice} Screen Size: ${
      deviceScreenSize ? deviceScreenSize : null
    }`
  );
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