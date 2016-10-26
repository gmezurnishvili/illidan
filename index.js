var express = require('express')
 
var app = express()

app.set('port', (process.env.PORT || 5000));
 
app.get('/notes', function(req, res) {
  res.json({notes: "Hello World"})
})
