// typescript array
const friendAges: number[] = [27, 25, 26, 28, 24];
// for string
const friendsName: string[] = ['Joe', 'Bob', 'Cavin', 'Pitor'];
// NOTE: We can't "push" and 'change' here with different type in typescript

// wrong
// friendAges[0] = 'John';
// friendsName.push(55);

// correct
friendAges[2] = 29;
friendsName[0] = 'John';

// same thing everywhere, even loop as well
let max = 0;
for (const age of friendAges) {
    if(age > max) {
        max = age;
    }    
}