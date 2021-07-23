let consoleFormEl = document.getElementById("consoleForm");
let requestUrlEl = document.getElementById("requestUrl");
let responseStatusEl = document.getElementById("responseStatus");

let requestUrlErrMsgEl = document.getElementById("requestUrlErrMsg");

let requestMethodEl = document.getElementById("requestMethod");
let requestBodyEl = document.getElementById("requestBody");
let responseBodyEl = document.getElementById("responseBody");
let sendRequestBtnEl = document.getElementById("sendRequestBtn");

let data = "";
let options = {
    method: "",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer 5b8faa3592569928a8aa07468fac524e3255d48825a42c698da9b7eb99ef1415"

    },
    body: ""
};

function setMethod() {
    console.log("-------------setMethod--------------");
    options.method = requestMethodEl.value;
    console.log(options);
}

function setBody() {
    data = requestBodyEl.value;
    let parsedData = JSON.parse(data);
    options.body = JSON.stringify(parsedData);
    console.log("-------------setbody--------------");
}

function gotohttpRequest() {
    let url = requestUrlEl.value;
    console.log("-------------start of req--------------");
    fetch(url, options)
        .then(function(response) {
            return response.json();

        }).then(function(ResponsejsonData) {
            console.log(JSON.stringify(ResponsejsonData.code));
            responseStatusEl.value = ResponsejsonData.code;
            console.log(ResponsejsonData);
            console.log("-------------end of req--------------");
            responseBodyEl.value = JSON.stringify(ResponsejsonData);
        });

}
requestUrlEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        requestUrlErrMsg.textContent = "REequired*";
    } else {
        requestUrlErrMsg.textContent = "";
    }
});
consoleFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    setMethod();
    setBody();
    console.log(options);
    gotohttpRequest();
    responseBodyEl.value = "";
    responseStatusEl.value = null;
});