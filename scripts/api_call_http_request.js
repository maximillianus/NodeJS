http = require('https');
qs = require('querystring');

const postdata = qs.stringify({
    category:'music'
});
// console.log(postdata)

const options = {
    hostname: 'api.publicapis.org',
    port: 443,
    path: '/entries?'+postdata,
    // path: '/categories',
    method: 'GET',
    // headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     'Content-Length': Buffer.byteLength(postdata)
    // }
};

const req = http.request(options, (res) => {
    // console.log(`STATUS: ${res.statusCode}`);
    // console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    let body = '';
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        // console.log(`BODY: ${chunk}`);
        body += chunk;
    })
    res.on('end', () => {
        result = JSON.parse(body);
        console.log('no more data in response');
        // console.log('Final Result:\n', result );
        var filtered = result.entries.filter(function(item) {
            return (item.Auth !== 'apiKey' && item.Auth !== 'OAuth')
        })
        console.log('Filtered Result:\n',filtered);
        // give results for those without API key
    })
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

// req.write(postdata);
req.end();