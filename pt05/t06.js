const f = () => {
    let i = 7;

    return () => {
        console.log(i);
    };
};

let f1 = f();
f1();

