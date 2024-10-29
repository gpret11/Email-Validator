console.log("This is my script");

let result = {
    "tag": "",
    "free": false,
    "role": false,
    "user": "gurpreetkaur",
    "email": "gurpreetkaur@codewithharry.com",
    "score": 0.64,
    "state": "undeliverable",
    "domain": "codewithharry.com",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
};

submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("clicked!");
    resultCont.innerHTML = '<img width="123" src ="img/loading.svg" alt="">';
    let key = "ema_live_YvrYaI7H1NVzZE8GUVPeRscxJTawzDTTHuWjaO6m";
    let email = document.getElementById("username").value;
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
    
    let res = await fetch(url);
    let result = await res.json();
    
    let table = `<table border="1"><thead><tr><th>Key</th><th>Value</th></tr></thead><tbody>`;
    
    for (let key of Object.keys(result)) {
        if (result[key] !== "" && result[key] !== " ") {
            table += `<tr><td>${key}</td><td>${result[key]}</td></tr>`; // Create table rows
        }
    }
    
    table += `</tbody></table>`; 
    resultCont.innerHTML = table; 
});

