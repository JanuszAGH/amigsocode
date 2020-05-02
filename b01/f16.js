function add(c, d) {
    return this.x + this.y + c + d;
}

const point = {
    x: 2,
    y: 3
}

console.log(add.call(point, 1, 4));
console.log(add.apply(point, [1, 9]));
console.log(add.call({x: 10, y: 20}, 1, 4));
console.log(add.apply({x: -2, y: -3}, [1, 9]));