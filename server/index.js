var express = require('express');
// var bodyParser = require('body-parser');
var path = require('path');
var port = 3000;
const fs = require('fs');
const Bunny = require('../db/index.js');

var app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));
// app.use(bodyParser.json());



app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});

var bunnies = '';
//var body = '';
app.get('/bunnies', function(req, res) {

  Bunny.readFromFile((data) => {
    res.send(data);
  });
});