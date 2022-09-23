// const person: {
//     name: string;
//     age: number;
// }
const person = {
    name: "Anthony",
    age: 23,
    hobbies: ["Sports", "Music", "Coding"]
};

let favActivities: string[];
favActivities = ["Boxing"];

console.log(person.name);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
};