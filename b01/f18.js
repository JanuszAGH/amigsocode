try {
    console.log('begin of try');
    dupa7();
    console.log('end of try');
} catch (e) {
    console.log('begin of catch');
    dupa8();
    console.log(e);
    console.log('end of catch');
} finally {
    console.log('begin of finally');
    twojaStara();
    console.log('end of finally');
}