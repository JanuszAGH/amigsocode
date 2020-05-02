(function (a, b, c) {
    console.log(a + b + c);
})(1, 2, 3);

let k = 7;
(function () {
    console.log(k);
    k = 13;
})();
console.log(k);
