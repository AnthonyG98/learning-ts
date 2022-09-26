// const person: {
//     name: string;
//     age: number;
// }
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } = {
//     name: "Anthony",
//     age: 23,
//     hobbies: ["Sports", "Music", "Coding"],
//     role: [2, 'author']
// };
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {ADMIN, READ_ONLY, AUTHOR}; // Assigns labels to numbers
const person = {
    name: "Anthony",
    age: 23,
    hobbies: ["Sports", "Music", "Coding"],
    role: Role.ADMIN
};
if(person.role === Role.ADMIN){
    console.log("is admin.");
}
// person.role.push("Admin");
//push() is an exception to tupals ex. role
// person.role[1] = 10;

let favActivities: string[];
favActivities = ["Boxing"];

console.log(person.name);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
};