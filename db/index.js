var mongoose = require('mongoose');
var fs = require('fs');

var readFromFile = (callback) => {
  fs.readFile(__dirname + '/data.js', function(err, data) {

    if(err) console.error(err);
    else {
      var body ='';
      body += data;
      body = JSON.parse(body);
      callback(body);
    }
  })
}

module.exports = {readFromFile}