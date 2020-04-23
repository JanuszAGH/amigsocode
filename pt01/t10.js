function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function execute(a, b, callback) {
    return callback(a, b);
}

var sum = execute(10, 5, addition);
var difference = execute(10, 5, subtraction);
var product = execute(10, 5, multiplication);
var quotient = execute(10, 5, division);

console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);
