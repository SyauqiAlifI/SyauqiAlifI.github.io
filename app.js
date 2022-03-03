// Create a web server that listens on port 3000.
// When a user visits the site, send them a simple HTML document.
// Start coding here.

const http = require('http');
const fs = require('fs');

function renderHTML(path, response) {
    fs.readFile(path, null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
}

// Create a server
http.createServer((req, res) => {

    const url = req.url;
    // Make a route for the root path
    if (url === '/' || url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        renderHTML('./home.html', res);
        res.end();
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        renderHTML('./about.html', res);
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        renderHTML('./404.html', res);
        res.end();
    }
}).listen(3000);