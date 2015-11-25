var express = require('express');
var app = express();
var url = require('url');
var bodyParser = require('body-parser');
var multer = require('multer');
var util = require('util');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(multer({dest:'./'}));

app.get('/', function(req, res){
    res.sendFile('./index.html', {root: __dirname});
});


app.get('/test', function(req, res){
    res.send('test');
});


app.use('/money', function(req, res, next){
    res.money = 100;
    next();
});
app.use('/money', function(req, res, next){
    res.money = res.money - 10;
    next();
});
app.use('/money', function(req, res, next){
    res.money = res.money - 10;
    next();
});
app.use('/money', function(req, res, next){
    res.money = res.money - 20;
    next();
});
app.get('/money', function(req, res){
    res.end(res.money + '');
});

/*
app.get('/reg', function(req, res){
    var oUrl = url.parse(req.url, true);
    res.end(JSON.stringify(oUrl.query));
});
*/



app.post('/reg', function(req, res){
    res.write(util.parse(req.files));
    res.end(JSON.stringify(req.body));
});


app.listen(8080);