var names = ["Alex", "Maria", "Sam"];
// console.log(names);


// for (var name of names) {
//     console.log(name);
// }
//
// console.log(name);

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

for (var p in person) {
    console.log(p, " ", person[p]);
}

