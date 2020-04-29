console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringingTicket = new Promise(function (resolve, reject) {
    setTimeout(() => resolve('ticket'), 1000);
});

promiseWifeBringingTicket
    .then(() => console.log('person3: shows ticket'));

console.log('person4: shows ticket');
console.log('person5: shows ticket');