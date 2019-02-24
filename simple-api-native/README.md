# Simple Web Service (without Express)

This is a simple web service created using native NodeJS library. This will be used as example
on how to create web service without using Express JS on Node.

## Using this service
1. Ensure you have node and npm installed (I am on Node v8.12.0)
2. If you don't have node or npm installed, install it using:
    * Mac: `brew install node` (this will also install npm)
    * Linux: `sudo apt-get install nodejs npm`
3. Clone or copy this directory into your local
4. Type in your terminal `node app.js`
5. Extras: install nodemon `npm install -g nodemon` to start development server with live-reload

## **Creating this service from scratch**
- Ensure you have node and npm installed (I am on Node v8.12.0)
- Install nodemon (development server with live-reload): `npm install -g nodemon`
- Create empty directory and go into it
- type `npm init` in terminal to initiate
- create `app.js` as main entry point for the files
- This code below is needed to start a simple http server
    ```
    const http = require('http');
    const port = 3000;
    
    // creating server object
    const app = http.createServer(function(req, res) => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Hello World!);
        res.end();
    })

    // start server and pick listening port
    app.listen(port, () => {
        console.log(`Listening at port`, port);
    });

    ```
- In `app.js`, there is more detailed variation on multiple endpoints ("`/about`", "`/contact`"), routing, and serving static files