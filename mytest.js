function testGS() {
    const url = "https://script.google.com/macros/s/AKfycbyPO1-4mRpgHAd9cH2Nr5PK1Mi4wqOV1Svh97QLJHZdrWrpLSg/exec";
    fetch(url)
    .then(d => d.json())
    .then(d => {
        document.getElementById("app").textContent = d[0].status;
    });
}

function addGS() {
    const url = "https://script.google.com/macros/s/AKfycbyPO1-4mRpgHAd9cH2Nr5PK1Mi4wqOV1Svh97QLJHZdrWrpLSg/exec";
    fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({name: "ricardo"}) // body data type must match "Content-Type" header
      });
}

document.getElementById("btn").addEventListener("click",testGS);
document.getElementById("btn2").addEventListener("click",addGS);
