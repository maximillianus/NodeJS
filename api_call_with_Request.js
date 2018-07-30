var Request = require('request');

var testurl = 'http://httpbin.org/ip';
// var testurl = 'https://dog.ceo/api/breeds/list/all';

Request.post({
    "headers": {"content-type": "application/json"},
    "url": "http://httpbin.org/post",
    "body": JSON.stringify({
        "firstname": "Adi",
        "lastname": "Prad"
    })
}, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.dir(JSON.parse(body));
});