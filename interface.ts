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