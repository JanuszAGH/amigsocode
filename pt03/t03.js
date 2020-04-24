const person = {
    name: 'Alex',
    cars: ['Ferrari', 'Lambo'],
    toString: function () {
        this.cars.forEach(function (c) {
            console.log(`${this.name} has ${c}`)
        }.bind(this));
    }
}

person.toString();