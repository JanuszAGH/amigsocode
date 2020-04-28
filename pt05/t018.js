function clean(resolve, reject) {
    let result = Math.random() > 0.5;

    if (result) {
        resolve("clean");
    } else {
        reject("still messy");
    }
}

const willCleanTheRoom = new Promise(clean);

function imDone(result) {
    console.log("The room is " + result);
}

function maybeLater(result) {
    console.log("The room is " + result);
}

willCleanTheRoom
    .then(imDone)
    .catch(maybeLater);

