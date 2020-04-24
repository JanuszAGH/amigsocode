const calculator = function (name) {
    return {
        name: name,
        add(a, b) {
            return a + b;
        }
    };
}

const calc = calculator('CASIO');

console.log(calc.name);
console.log(calc.add(2, 3));