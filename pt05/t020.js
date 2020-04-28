let promiseToCleanTheRoom = new Promise(function (resolve, reject) {
// cleaning the room

    if (Math.random() > 0.5) {
        resolve('clean');
    } else {
        reject(' still messy');
    }
});

promiseToCleanTheRoom
    .then(function (result) {
        console.log('The room is ' + result);
    })
    .catch(function (result) {
        console.log('The room is ' + result);
    });
