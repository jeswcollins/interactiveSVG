/* app.js */
//Source for original version of this file: http://stackoverflow.com/a/4720770/895065

//Delete cache so node reloads pages on each request 
//ref for Object.keys line below: http://stackoverflow.com/questions/1972242/auto-reload-of-files-in-node-js
Object.keys(require.cache).forEach(function(key) { delete require.cache[key]; 
	console.log("Key deleted: "+key)}); 

// Load the built-in 'http' module.
var http = require('http'),
    fs = require('fs');   

var port = 8080;   

var fidArray = ['./interactiveSVG.html','./data.js','./style.css']

http.createServer(function(request, response) {  
        fidArray.forEach(function(fid) {
          //console.log(fid+" in fidArray for loop");
          delete require.cache[require.resolve(fid)];
          }
          );
        var fid=request.url
        console.log("request.url: "+request.url);
        //response.writeHeader(200, {"Content-Type": "text/html"});
        if (request.url=='/interactiveSVG.html') {
          response.writeHeader(200, {"Content-Type": "text/html"});
          fs.readFile('./interactiveSVG.html', function (err, html){
            if (err) {
              console.log('interactiveSVG error')
              throw err;
            }
            response.write(html);
            response.end();})
          }
        if (request.url=='/data.js') {
          fs.readFile('./data.js', function (err, html){
            if (err) {
              console.log('data.js read error')
              throw err;
            }
            //response.write(html);
            response.end();})
          }
        if (request.url=='/style.css') {
          //response.writeHeader(200, {"Content-Type": "text/html"});
          fs.readFile('./style.css', function (err, html){
            if (err) {
              throw err;
            }
            response.write(html);
            response.end();})
          }
    }).listen(port);

console.log('Listening on http://localhost:' + port);