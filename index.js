var express = require('express')
var app = express()
var port = process.env.PORT || 8081;

app.use(express.static('public'));
app.set('view engine','ejs');
app.set('views','./views');

app.get('/', function(req, res){
  res.render('index')
});
app.get('/demo', function(req, res){
  res.render('demo')
});

app.listen(port);
console.log('The magic happens on port ' + port);
