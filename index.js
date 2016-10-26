var express = require('express')
 
var app = express()

app.set('port', (process.env.PORT || 5000));

app.use('/static', express.static(__dirname + '/views'));

app.get('/api', function(req, res) {
  res.json({data: "Hello World",id:"1"});
})

app.get('/index', function(req, res) {
  res.sendFile('/views/index.html');
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
