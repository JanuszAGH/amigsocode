let numArray = [3, 7, 9, 4];

for (let i = 0; i < numArray.length; i++) {
    console.log(numArray[i]);
}

console.log(numArray);

for (let e in numArray) {
    console.log(e);
}

const person = {
    firstName: "Tom",
    lastName: "Cruise"
};

for (let p in person) {
    console.log(`${p} : ${person[p]}`);
}