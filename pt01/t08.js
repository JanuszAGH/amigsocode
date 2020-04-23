var map = [1, 2, 3, 4, 5].map(function (n) {
    return 2 * n;
});

console.log(map);
map = map.map(e => e / 2);
console.log(map);
map = map.filter(function (n) {
    return n % 2 !== 0;
});
console.log(map);
map = map.reduce(function (a, e) {
    return a + e;
})
console.log(map);



