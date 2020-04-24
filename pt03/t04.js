const person = {
    firstName: 'Alex',
    lastName: 'Marx',
    cars: ['Ferrari', 'Lambo']
}

function hello() {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
}


hello.apply(person);
hello.call(person);
hello.bind(person)();