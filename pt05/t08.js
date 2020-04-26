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


