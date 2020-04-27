const createCouter = function () {
    let i = 0;

    return {
        get() {
            return i;
        },
        set(v) {
            i = v;
        },
        inc() {
            i++;
        }
    }
};

const c = createCouter();
c.inc();
c.inc();
c.inc();
console.log(c.get());
console.log(c.i);