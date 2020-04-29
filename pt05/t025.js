const odds = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1, 3, 5, 7, 9]);
    }, 3000);
});

const evens = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([2, 4, 6, 8, 10]);
    }, 2000);

    setTimeout(() => {
        reject([]);
    }, 1000);
});

// evens
//     .then((data) => console.log(data));
// odds
//     .then((data) => console.log(data));

Promise.all([odds, evens])
    .then(data => console.log(data))
    .catch((d) => console.log('fackup'));