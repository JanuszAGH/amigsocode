let inner = 2;

let addTo = function (passed) {
    return inner + passed;
};

setTimeout(() =>
        console.log(addTo(3)),
    2000);
