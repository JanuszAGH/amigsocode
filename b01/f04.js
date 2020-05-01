const array2d = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for (let i = 0; i < array2d.length; i++) {
    for (let j = 0; j < array2d[i].length; j++) {
        console.log(array2d[i][j]);
    }
}
console.log(array2d);

array2d
    .forEach(e => console.log(e));

array2d
    .forEach(e => {e.forEach(e=>console.log(e))});