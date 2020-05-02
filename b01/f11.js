const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let number = arr
    .filter(e => e % 2 === 0)
    .map(e => 2 * e)
    .reduce((a, e) => a + e);
console.log(number);