const multiplier = function (coefficient) {
    return function (argument) {
        return coefficient * argument;
    };
}

const doubler = new multiplier(2);
const tripler = new multiplier(3);
const quadrupler = new multiplier(4);

console.log(doubler(2));
console.log(tripler(2));
console.log(quadrupler(2));