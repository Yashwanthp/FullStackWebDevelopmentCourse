var http = require('http');
var fs = require('fs');
var path = require('path'); // Ensure that path issues are resolved for different OS.

var hostname = 'localhost';
var port = 3000;

// Create Server
var server = http.createServer(function (req, res) {
    //1. 
    // console.log(req.headers);

    // res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.end('<h1>Hello World</h1>');

    //2. 
    // Server can handle only get request
    console.log('Request for: ' + req.url + ' by method ' + req.method);
    if (req.method === 'GET') {
        // construct file url
        var fileurl;
        if (req.url === '/') {
            fileurl = '/index.html';
        } else {
            fileurl = req.url;
        }

        var filepath = path.resolve('./public' + fileurl);  // This is what file system uses to server up the files.
        var fileExt = path.extname(filepath);
        if (fileExt === ".html") {
            fs.exists(filepath, function (exists) {
                if (!exists) {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end('<h1>Error 404:' + fileurl + 'not found</h1>')
                }
                res.writeHead(200, { 'Content-Type': 'text/html' });
                fs.createReadStream(filepath).pipe(res);
            })
        } else {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>Error 404:' + fileurl + 'not a html file</h1>')
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Error 404:' + fileurl + 'not supported</h1>')
    }
});

server.listen(port, hostname, function () {
    console.log(`Server running at http://${hostname}:${port}`);
});