var express = require('express')
 
var app = express()
 
app.get('/notes', function(req, res) {
  res.json({notes: "Hello World"})
})
 
app.listen(3000)