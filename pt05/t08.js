const add = function (a) {
    return function (b) {
        return a + b;
    };
};


const addTo5 = add(5);

console.log(addTo5(3));

const curry = function (who) {
    return function (what) {
        return function (whom) {
            return `${who} says ${what} to ${whom}.`;
        };
    };
};

let message = curry("Tom")("hello")("Jerry");
console.log(message);


const offer = ["Ford", "Mustang", 2015];
const [make, model, year] = offer;
console.log(make);
console.log(model);
console.log(year);

const person = {
    name: "Ann",
    sex: "F"
};

const address = {
    country: "Poland",
    city: "Warsaw",
    street: "Kasprowicza"
};

const info = {
    ...person,
    ...address
};

console.log(info);