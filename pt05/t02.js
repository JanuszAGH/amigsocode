let calc = function (a, b, type) {
    if (type === '+') {
        return a + b;
    } else {
        if (type === '-') {
            return a - b;
        } else {
            if (type === '*') {
                return a * b;
            } else {
                if (type === '/') {
                    return a / b;
                }
            }
        }
    }
}

console.log(calc(10, 5, "+"));
console.log(calc(10, 5, "-"));
console.log(calc(10, 5, "*"));
console.log(calc(10, 5, "/"));

let calculate = function (a, b, operation) {
    if (typeof operation === "function") {
        return operation(a, b);
    }
}

const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
};

const divide = function (a, b) {
    return a / b;
};

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, subtract));
console.log(calculate(10, 5, multiply));
console.log(calculate(10, 5, divide));
console.log(calculate(10, 5, (a, b) => a ^ b));