function http(url, method, successCallback, errorHandler) {
    setTimeout(function () {
        let data;
        data = '{ data:"ABC"}';

        if (data) {
            successCallback(data);
        } else {
            errorHandler('No Data');
        }
    }, 1000);
}

http('http://google.com', 'GET', function (data) {
    console.log(data);
}, function (err) {
    console.log(err);
});