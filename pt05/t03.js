const arr = [
    {
        num: 5,
        name: "apple"
    }, {
        num: 7,
        name: "cabbage"
    }, {
        num: 1,
        name: "banana"
    }
];

arr.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    } else {
        if (a > b) {
            return 1;
        } else {
            return 0;
        }
    }
});

console.log(arr);