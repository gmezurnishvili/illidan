var express = require('express')
 
var app = express()

app.set('port', (process.env.PORT || 5000));
 
app.get('/notes', function(req, res) {
  console.log(req);
  res.json({notes: "Hello World"});
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
