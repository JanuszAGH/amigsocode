const obj = {
    num: 9
};

const addToObj = function (a, b, c) {
    return this.num + a + b + c;
}

let c = addToObj.call(obj, 3, 2, 1);
console.log(c);
c = addToObj.apply(obj, [3, 2, 1]);
console.log(c);
