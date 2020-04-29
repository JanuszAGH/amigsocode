function http(url, method, successCallback, errorHandler) {

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let data;
            // data = '{ data:"ABC"}';

            if (data) {
                resolve(data);
            } else {
                reject('No Data');
            }
        }, 1000);
    });
}

http('http://google.com', 'GET')
    .then((data) => console.log(data))
    .catch(data => console.log(data));