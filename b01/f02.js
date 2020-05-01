const age = 10;

console.log(age >= 18 ? "Adult" : "Child");

const grade = 6;

switch (grade) {
    case 2:
        console.log('failed');
        break;
    case 3:
    case 4:
    case 5:
        console.log('passed');
        break;
    default:
        console.log('incorrect data');
        break;
}