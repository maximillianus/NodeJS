const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/health', (req, res) => {
    res.json({
        'health':'OK',
        'status': 200
    });
});

app.get('/cats/:id?', (req, res) => {
    console.log(`params:`, req.params);
    if (!req.params.id) {
        // if no params, send default
        res.sendFile(path.join(__dirname, '/public/images/cats/cat_pic1.jpeg'));    
    } else {
        // otherwise send pics as per the params id
        res.sendFile(path.join(__dirname, '/public/images/cats/', 'cat_pic' + req.params.id + '.jpeg'));
    }

});

// Implementing static files. User can navigate through the files in static files dir.
// this actually works
// app.use('/static', express.static('public'));

// but this is safer and more flexible
app.use('/static', express.static(path.join(__dirname, 'public'))); 

app.listen(port, () => {
    console.log(`ExpressJS listening on port: %s`, port);
})