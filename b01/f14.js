function createCounter() {
    let c = 0;

    return {
        inc(val) {
            c += val;
            return this;
        },
        dec(val) {
            c -= val;
            return this;
        },
        getVal() {
            return c;
        }
    };
}

let counter = createCounter();
let counter2 = createCounter();
counter.inc(1);
counter.inc(1);
counter2.inc(11);
counter.inc(1);
counter.inc(2).inc(5)
console.log(counter.getVal());
console.log(counter2.getVal());