function hello() {
    console.log("Hello");
}

function howdy() {
    console.log("Howdy buddy");
}

function execute(callback) {
    callback();
}

execute(hello);
execute(howdy);