// const person: {
//     // Explicit assignment, not a good practice
//     name: string;
//     age: number;
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } = {
//     name: 'Jeyi',
//     age: 19,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author'] //Explaining the tuple type
// };

// person.role.push('admin');
// person.role[1] = 10;


// Enums 
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
    ADMIN, READ_ONLY, AUTHOR};

const person = {
    name: 'Jeyi',
    age: 19,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

// strict array types
let favoritesActivites: string[];
favoritesActivites = ['Sports'];

console.log(person.name);
// let users = person.hobbies;
// users.map(user => {
//     console.log(user);
// })
for (const hobby of person.hobbies) {
    console.log(hobby);
}

if(person.role === Role.ADMIN) {
    console.log('is author');
};