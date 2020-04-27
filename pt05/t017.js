let promise = new Promise((resolve, reject) => {
    let r;
    r = Math.random() > 0.5;

    setTimeout(() => {
        if (r) {
            resolve("Success");
        } else {
            reject("Failure");
        }
    }, 2000);
});

promise
    .then(resolved => {
        console.log(resolved)
    })
    .catch(rejectedCath => {
        console.log("Fucked up: " + rejectedCath)
    });


