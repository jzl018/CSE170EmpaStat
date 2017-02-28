
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
var category = require('./routes/category');
var addcategory = require('./routes/addCategory');
var removecategory = require('./routes/removeCategory');
var newtask = require('./routes/newTask');
var task = require('./routes/task');
var add = require('./routes/add');
var modify = require('./routes/modify');
var remove = require('./routes/remove');
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
app.get('/category/:cname', category.viewCategory);
app.get('/addcategory', addcategory.addNewCategory);
app.get('/removecategory', removecategory.removeCategory);
app.get('/category/:cname/newtask', newtask.viewNewTask)
app.get('/category/:cname/task/:tname', task.viewTask);
app.get('/category/:cname/add', add.addTask);
app.get('/category/:cname/modify', modify.modifyTask);
app.get('/category/:cname/remove', remove.removeTask);
app.get('/profile', profile.viewProfile);
app.get('/history', history.viewHistory);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
