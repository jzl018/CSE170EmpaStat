
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var login = require('./routes/login');
var help = require('./routes/help');
var newtask = require('./routes/newTask');
var task = require('./routes/task');
var add = require('./routes/add');
var modify = require('./routes/modify');
var remove = require('./routes/remove');
var challenges = require('./routes/challenges');
var profile = require('./routes/profile');
var history = require('./routes/history');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/login', login.viewLogin);
app.get('/help', help.viewHelp);
app.get('/newtask', newtask.viewNewTask)
app.get('/task/:name', task.viewTask);
app.get('/add', add.addTask);
app.get('/modify', modify.modifyTask);
app.get('/remove', remove.removeTask);
app.get('/challenges', challenges.viewChallenges);
app.get('/profile', profile.viewProfile);
app.get('/history', history.viewHistory);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
