//var express = require('express');
var fs = require('fs');

//var app = express.createServer(express.logger());

/*app.get('/', function(request, response) {
  response.send('Hello World 2!');
});*/

var indexFile = fs.readFileSync('index.html');

console.log(indexFile.toString('utf-8', 0, 27));
//process.stdout.write(indexFile.toString("utf-8", 0,27));

/*var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});*/
