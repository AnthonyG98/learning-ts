const person: {
    name: string;
    age: number;
} = {
    name: "Anthony",
    age: 23
};
console.log(person.name);
//You can do the above but it's better to do code below
const otherPerson = {
    name: "Anthony",
    age: 23
}
//Let typescript infer the type

