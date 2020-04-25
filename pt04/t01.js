const animal = {};
animal.name = 'leo';
animal.energy = 10;

animal.sleep = function (length) {
    console.log(`${this.name} is sleeping`);
    this.energy += length;
}

animal.sleep(2);
console.log(animal.energy);