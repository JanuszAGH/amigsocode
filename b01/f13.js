const alpha = {
    1: "Z",
    2: "Y",
    3: "X",
    4: "W"
}

console.log(alpha[1]);

let entries = Object.entries(alpha);
let keys = Object.keys(alpha);
let values = Object.values(alpha);

for (k in alpha) {
    console.log(k, alpha[k]);
}

delete alpha["4"];
console.log(alpha);