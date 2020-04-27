let map = new Map();
map.set(1, "one");
map.set(2, "two");
map.set(3, "three");

let keys = map.keys();
let values = map.values();
let entries = map.entries();

for (k of keys) {
    console.log(k);
}

for (v of values) {
    console.log(v);
}

for (e of entries) {
    console.log(e);
    for (let i = 0; i < e.length; i++) {
        console.log(i, e[i]);
    }
}