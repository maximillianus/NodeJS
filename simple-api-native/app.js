'use strict';

// modules

const http = require('http');
const fs = require('fs');
const port = 3000;

// create server object
const app = http.createServer(function (req, res) {
    // simple text response
    // res.write('Hello World!');
    
    // routing
    console.log('req.url:', req.url);
    const endpoint = req.url;
    if (endpoint === '/') {
        // write header
        res.writeHead(200, {'Content-Type':'text/html'})

        // landing page using HTML response
        let html_response = `
        <h1>Hello world! </h1>
        
        <p>
        Welcome to my Node JS express web service!<br />
        
        This is template service without using NodeJS express framework.<br />
        This service is created as checkpoint for my Node JS learning.
        
        </p>
        <hr />
        <a href='/about'>About</a>
        <br />
        <a href='/contact'>Contact</a>
        `
        res.write(html_response);
        res.end();
    } else if (endpoint === '/health') {
        // write header
        res.writeHead(200, {'Content-Type':'application/json'})

        // health check using JSON response
        res.write(JSON.stringify(
            {
                "health": 'OK',
                "status": 200
            }
        ))
        res.end();

    } else if (endpoint === '/about') {
        // write header
        res.writeHead(200, {'Content-Type':'text/html'})
        
        // another HTML response
        let html_response = `
        <h1> About me page </h1>
        
        <p> Data scientist creating web service </p>
        <p> maximillianus@git </p>
        <hr />
        <a href='/'>Home</a>
        `
        res.write(html_response);
        res.end();
    } else if (endpoint === '/contact') {
        // write header
        res.writeHead(200, {'Content-Type':'text/html'})

        // serve static files
        fs.readFile('./contact.html', (err, content) => {
            res.write(content);
            res.end();
        });

    }

});

app.listen(port, () => {
    // make server listens at port 3000
    console.log(`Listening at port %s`, port);
})
