var express = require('express')
var guid = require('guid')
var mongoose = require('mongoose');
mongoose.connect('mongodb://gmezurnishvili:ASDasd123@ds055895.mlab.com:55895/doza');

var app = express()

app.set('port', (process.env.PORT || 5000));

app.use('/static', express.static(__dirname + '/views'));

app.get('/api', function(req, res) {
  var data = mongoose.Urls.find();
  res.json({data: "Hello World",id:guid.raw()});
})

app.get('/index', function(req, res) {
  res.sendFile('/views/index.html');
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
