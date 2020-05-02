const a = [];
const b = [];
for (let i = 0; i < 5; i++) {
    a.unshift(i);
    b.push(i);
}

console.log(a);
console.log(b);

const arr = [[1, 2], [3, 4, 5], [6, 7, 8, 9]];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j]);
//     }
//     console.log();
// }

// for (let e of arr) {
//     for (i of e) {
//         console.log(i);
//     }
//     console.log();
// }
for (let i in arr) {
    console.log(i, arr[i]);
}