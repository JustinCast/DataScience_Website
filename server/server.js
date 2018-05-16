var express = require('express');
var config = require('config');
var bodyParser = require('body-parser');
var tediousExpress = require('express4-tedious');

var app = express();
app.use(function (req, res, next) {
    req.sql = tediousExpress(config.get('connection'));
    next();
});

app.use(bodyParser.text()); 
app.use('/available-dataset', require('./routes/AvailableDataset'));
app.use('/blog', require('./routes/Blog'));
app.use('/code', require('./routes/Code'));
app.use('/feedback', require('./routes/Feedback'));
app.use('/filter', require('./routes/Filter'));
app.use('/investigation', require('./routes/Investigation'));
app.use('/member', require('./routes/Member'));
app.use('/milestone', require('./routes/Milestone'));
app.use('/page', require('./routes/Page'));
app.use('/project', require('./routes/Project'));
app.use('/proposal', require('./routes/Reference'));
app.use('/review', require('./routes/Review'));
app.use('/role', require('./routes/Role'));
app.use('/thematic', require('./routes/Thematic'));
app.use('/user-site', require('./routes/UserSite'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found: '+ req.method + ":" + req.originalUrl);
    err.status = 404;
    next(err);
});
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});

module.exports = app;