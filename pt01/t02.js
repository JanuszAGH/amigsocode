var person = {
    name: "Maria Jones",
    age: 21,
    hasDriverLicence: true,
    dateOfBirth: "01/01/2000",
    address: {
        city: "Warsaw",
        street: "Wrzeciono"
    }
};

console.log(person);

console.log(JSON.stringify(person));

console.log(person.name);
console.log(person.age);
console.log(person.hasDriverLicence);
console.log(person.dateOfBirth);
console.log(person.address.city);
console.log(person.address.street);


console.log(Object.keys(person));
console.log(Object.values(person));