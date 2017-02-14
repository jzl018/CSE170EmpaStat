// Get all of our friend data
var data = require('../data.json');

exports.viewNewTask = function(req, res){
	console.log(data);
	res.render('newTask', data);
};