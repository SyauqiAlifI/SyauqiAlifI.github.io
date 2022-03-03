// Create a web server that listens on port 3000.
// When a user visits the site, send them a simple HTML document.
// Start coding here.

const http = require('http');
const fs = require('fs');

// Create a server
const server = http.createServer((req, res) => {
    // Make a route for the root path
    if (req.url === '/' || req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + './home.html').pipe(res);
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + './about.html').pipe(res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + './404.html').pipe(res);
    }
}
);

// Listen on port 3000
server.listen(3000);