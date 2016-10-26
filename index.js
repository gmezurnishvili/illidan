var express = require('express')
 
var app = express()

app.set('port', (process.env.PORT || 5000));

app.use(express.static('views'));

app.get('/api', function(req, res) {
  res.json({data: "Hello World"});
})

app.get('/view', function(req, res) {
  res.render('index.html');
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
