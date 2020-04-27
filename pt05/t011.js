const obj = {
    num: 2
};

const addToObj = function (val) {
    return this.num + val;
}

let c = addToObj.call(obj, 3);
console.log(c);
