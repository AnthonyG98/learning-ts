// const person: {
//     name: string;
//     age: number;
// }
var person = {
    name: "Anthony",
    age: 23,
    hobbies: ["Sports", "Music", "Coding"]
};
var favActivities;
favActivities = ["Boxing"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
;
