// typescript object declaration
// const student: {name: string, id: number, age: number, subject: string} = {
//     name: 'Jony Brad',
//     id: 101,
//     age: 25,
//     subject: 'Higher Math'
// }

// we can write the same object or any object in typescript with this way as well

// object's types
type Person = {
    name: string, 
    id: number, 
    age: number, 
    subject: string};

// the object
const student: Person = {
    name: 'Jony Brad',
    id: 101,
    age: 25,
    subject: 'Higher Math'
};




// declare an object as a parameter of a function, we can do it in TypeScript
function getSalary(player: { name?: string, salary: number }): number {
    return player.salary;
}

// call the function in this way, and 'name' parameter doesn't need to put here because optional chaining has been done in the object, but if we wanna put it, we can do it. If don't want, NO Problem for doing optional chaining
getSalary({ salary: 50 });


// we also can use here another already written object as a parameter of a function, Ex. below
function getAge( player: Person ): number {
    return player.age;
}