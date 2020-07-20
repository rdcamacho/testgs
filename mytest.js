function testGS() {
    const url = "https://script.google.com/macros/s/AKfycbyPO1-4mRpgHAd9cH2Nr5PK1Mi4wqOV1Svh97QLJHZdrWrpLSg/exec";
    fetch(url)
    .then(d => d.json())
    .then(d => {
        alert(d[0].status)
        document.getElementById("app").textContent = d[0].status;
    });
}

document.getElementById("btn").addEventListener("click",testGS);