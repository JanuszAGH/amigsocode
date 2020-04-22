for (let i = 0; i < 3; i++) {
    console.log(i);
}

var persons = [
    {
        name: "Alex",
        age: 22
    },
    {
        name: "Maria",
        age: 30,
    }
];

for (var i = 0; i < persons.length; i++) {
    console.log(persons[i]);
    console.log(persons[i].name);
    console.log(persons[i].age);
}

var i = 0;
while (i < persons.length) {
    console.log(persons[i]);
    i++;
}