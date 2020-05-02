const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const b = JSON.parse(JSON.stringify(a));
b[0][0] = 13;
console.log(a);
console.log(b);

const x = "007";
console.log(parseI);