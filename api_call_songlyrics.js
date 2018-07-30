http = require('https');
qs = require('querystring');

const postdata = qs.stringify({
    artist:'artist'
});
// console.log(postdata)


const options = {
    hostname: 'api.lyrics.ovh',
    port: 443,
    path: '/v1/Coldplay/yellow',
    // path: '/categories',
    method: 'GET',
};


const req = http.request(options, (res) => {
    let body = '';
    // console.log(res.url)
    // res.setEncoding('utf8');
    res.on('data', (chunk) => {
        // console.log(`BODY: ${chunk}`);
        body += chunk;
    })
    res.on('end', () => {
        
        result = JSON.parse(body);
        console.log('no more data in response');
        if ("lyrics" in result) {
            console.log('Final Result:\n', result.lyrics );
        } else {
            console.log('Final Result:\n', result);
        }
        
        // give results for those links that dont require API key
        // var filtered = result.entries.filter(function(item) {
        //     return (item.Auth !== 'apiKey' && item.Auth !== 'OAuth')
        // })
        // console.log('Filtered Result:\n',filtered);
    })
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

// req.write(postdata);
req.end();
