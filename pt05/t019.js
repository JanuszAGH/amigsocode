const first = () => new Promise((resolve, reject) => resolve('Your cat is '));
const second = (data) => new Promise((resolve, reject) => resolve(data + 'crazy'));

first()
    .then((data) => second(data).then(msg => console.log(msg)));

fetch('https://api.seatgeek.com/2/events?q=amway-center&client_id=MTI3NjI2NjF8MTUzNDYxMjQ1MS4zNA')
    .then(function (resonse) {
        return resonse.json();
    })
    .then(function (response) {
        console.log(response);
    });
