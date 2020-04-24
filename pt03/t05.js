const pair = {
    x: 1,
    y: 2
};

function sum(c, d) {
    return this.x + this.y + c + d;
}

console.log(sum(3,4));

let a = sum.apply(pair, [3, 4]);
let c = sum.call(pair, 3, 4);
let s = sum.bind(pair);
console.log(a);
console.log(c);
console.log(s(3, 4));