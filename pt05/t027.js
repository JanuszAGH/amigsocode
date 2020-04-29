const adder = a => b => a + b;

let incrementer = adder(1);
let decrementer = adder(-1);

console.log(incrementer(2));
console.log(decrementer(5));

console.log(adder(4)(5));
