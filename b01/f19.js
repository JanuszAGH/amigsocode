const person = {
    name: 'John',
    sex: 'M'
};

let serialized = JSON.stringify(person);


try {
    let deserialized = JSON.parse(serialized);
    if (!deserialized.hasOwnProperty('seks')) {
        throw new SyntaxError("no sex no fun");
    }

    console.log(deserialized);
} catch (e) {
    console.log(e);
}

