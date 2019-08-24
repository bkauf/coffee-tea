//var http         = require("http");
var express      = require('express');
var app          = express();
const port       = 8080;
var path         = require('path');
var favicon      = require('serve-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');

/* pages */
var index       = require('./routes/index');
var coffee      = require('./routes/coffee');
var tea         = require('./routes/tea');
var health      = require('./routes/health');
var kill        = require('./routes/kill');
var loaderPage   = require('./routes/loaderio');



//app.set('views', path.join(__dirname, 'views'));
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/coffee', coffee);
app.use('/tea', tea);
app.use('/health', health);
app.use('/kill', kill);
app.use('/loaderio-b1551541d32815292dec8c22ec8c1972', loaderPage);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
//app.listen(port, () => console.log(`Example app listening on port ${port}!`))
