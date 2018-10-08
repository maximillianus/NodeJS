"use strict";

const https = require('https');
const util = require('util');


let baseurl = 'https://api.publicapis.org/';
// baseurl = 'https://encrypted.google.com/';

console.log(baseurl+endpoint)

https.get(baseurl+endpoint, (res) => {
    console.log('status Code', res.statusCode);
    console.log('headers', res.headers);

    let body = '';

    res.on('data', (d) => {
        // process.stdout.write(d);
        body += d;
        let parsed = JSON.parse(d)
    });

    res.on('end', () => {
        console.log("it is ending!")
    });

}).on('error', (e) => {
    console.error(e);
}) 
