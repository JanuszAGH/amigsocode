const arrOne = ["Marian", "Anna", "Alex"];
const arrTwo = ['Said', 'Ismail', 'Aisha'];

const arrThree = [...arrOne, ...arrTwo];

arrThree.forEach(e => console.log(e));

function sum(a, b, c) {
    return a + b + c;
}

const numbers = [1, 2, 3];

let s = sum(...numbers);
console.log(s);