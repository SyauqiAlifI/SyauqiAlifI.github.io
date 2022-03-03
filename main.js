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
const server = http.createServer((req, res) => {
    // Make a route for the root path
    if (req.url === '/' || req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        renderHTML('./home.html', res);
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        renderHTML('./about.html', res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        renderHTML('./404.html', res);
    }
}
);

// Listen on port 3000
server.listen(3000);