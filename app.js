
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
var modifycategory = require('./routes/modifyCategory');
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
app.get('/category/:cid', category.viewCategory);
app.get('/addcategory', addcategory.addNewCategory);
app.get('/modifycategory', modifycategory.modifyCategory);
app.get('/removecategory', removecategory.removeCategory);
app.get('/category/:cid/newtask', newtask.viewNewTask)
app.get('/category/:cid/task/:tid', task.viewTask);
app.get('/category/:cid/add', add.addTask);
app.get('/category/:cid/modify', modify.modifyTask);
app.get('/category/:cid/remove', remove.removeTask);
app.get('/profile', profile.viewProfile);
app.get('/history', history.viewHistory);
//for A/B Testing
app.get('/home_B', index.viewBottom);
app.get('/home_A', index.view);
//app.get('/help_B', help.viewHelpBottom);
//app.get('/profile_B', profile.viewProfileBottom);
//app.get('/history_B', history.viewHistoryBottom);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
