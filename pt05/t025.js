const odds = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1, 3, 5, 7, 9]);
    }, 3000);
});

const evens = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([2, 4, 6, 8, 10]);
    }, 2000);
});

