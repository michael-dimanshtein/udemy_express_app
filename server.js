var express = require('express');
var app = express();
var port = 3000;

var middleware = require('./middleware.js')

// var middleware = {
//     requireAuthentication: function(req, res, next){
//         console.log('private route hit!');
//         next();
//     },
//     logger: function(req,res, next){
//         console.log('Request: '+ new Date().toString()+ ' ' + req.method + ' ' + req.originalUrl);
//         next();
//     }
// };

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req,res){
    res.send('About us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(port, function(){
    console.log(`server running on port number ${port}`);
});