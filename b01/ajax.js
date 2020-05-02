// function loadDoc() {
//     // console.log('clicked');
//     // document.getElementById('demo').innerText="Changed";
//     let xmlHttpRequest = new XMLHttpRequest();
//     xmlHttpRequest.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             let text = this.responseText;
//             let pElement = document.getElementById('demo');
//             pElement.innerText = text;
//             console.log('clicked');
//         }
//         xmlHttpRequest
//             .open('GET',
//                 'https://cors-anywhere.herokuapp.com/http://carnes.cc/code/ajax_example.txt',
//                 true);
//         xmlHttpRequest.send();
//     }
// }

function loadDoc() {
    console.log('clicked');
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "https://cors-anywhere.herokuapp.com/http://carnes.cc/code/ajax_example.txt", true);
    xhttp.send();
}
