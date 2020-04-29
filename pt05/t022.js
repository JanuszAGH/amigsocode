let cleanRoom = function () {
    return new Promise(function (resolve, reject) {
        resolve('Cleaned the room');
    });
};

let removeGarbage = function (p) {
    return new Promise(function (resolve, reject) {
        resolve(p + ', ' + 'Removed garbage');
    });
};

let winIceceram = function (p) {
    return new Promise(function (resolve, reject) {
        resolve(p + ', ' + 'Won icecream');
    });
};

cleanRoom()
    .then(function (msg1) {
        return removeGarbage(msg1);
    })
    .then(function (msg2) {
        return winIceceram(msg2)
    }).then(function (msg3) {
    console.log(msg3);
});


const first = function () {
    return new Promise(function (resolve, reject) {
        resolve('Your cat is ');
    });
};

const second = function (data) {
    return new Promise(function (resolve, reject) {
        resolve(data + 'crazy');
    });
};

first()
    .then(data => second(data))
    .then((data => console.log(data)));