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

function callbackExample(name, callback) {
    callback(name);
}

function introduce(name) {
    console.log("I'm " + name);
}

callbackExample("Jack", introduce);
callbackExample("Marry", introduce);