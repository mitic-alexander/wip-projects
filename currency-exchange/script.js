// let rsdUSD = new XMLHttpRequest();
// rsdUSD.open("GET", "http://api.kursna-lista.info/2293980a5050332d9cfd185dca670696/kursna_lista/xml");
// rsdUSD.send();


// rsdUSD.addEventListener("readystatechange", () => {
//     if (rsdUSD.readyState === 4 && rsdUSD.status === 200) {
//         console.log("The request has been received.");
//         // console.log(rsdUSD);
//         let data = JSON.parse(rsdUSD.responseText);
//         console.log(data);
//     }
//     else if (rsdUSD.readyState === 4) {
//         console.log("The server didn't process the data.");
//     }
// });

// let usdRSD = new XMLHttpRequest();
// usdRSD.open("GET", "https://api.happi.dev/v1/exchange/USD/RSD?apikey=ed29c0cqQMeQCw0FsNlNfnjj33a6dAXam34XqYnyPBoPguGIIwOlW34k");
// usdRSD.send();

// usdRSD.addEventListener("readystatechange", () => {
//     if (usdRSD.readyState === 4 && usdRSD.status === 200) {
//         console.log("The request has been received.");
//         // console.log(usdRSD);
//         let data = JSON.parse(usdRSD.responseText);
//         console.log(data);
//     }
//     else if (usdRSD.readyState === 4) {
//         console.log("The server didn't process the data.");
//     }
// });

let request = new XMLHttpRequest();

request.open("GET", "http://api.kursna-lista.info/2293980a5050332d9cfd185dca670696/kursna_lista/json");
request.send();

request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
        console.log("The request has been received.");
        console.log(request);
        // let data = JSON.parse(request.responseText);
        // console.log(data);
    }
    else if (request.readyState === 4) {
        console.log("The server didn't process the data.");
    }
});