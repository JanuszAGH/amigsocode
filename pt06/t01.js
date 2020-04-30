const getNumbers = function* () {
    yield 1;
    yield "hello";
    yield true;
    yield {name: "Alex"};
    return "EOT";
}

const numbersGen = getNumbers();

console.log(numbersGen.next());
console.log(numbersGen.next());
console.log(numbersGen.next());
console.log(numbersGen.next());
console.log(numbersGen.next());
console.log(numbersGen.next());
