const parent = {
    name: "Tom",
    sex: "M",
    age: 45
};

const child = Object.create(parent);
child.name = 'Rob';
child.age = 10;

console.log(parent);
console.log(child);
console.log(child.sex);