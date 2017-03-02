// Will need to get login data in the future
var data = require('../data.json');

exports.viewHelp = function(req, res){
	data["side"] = true;
	res.render('help', data);
};

exports.viewHelpBottom = function(req, res){
	data["side"] = false;
	res.render('help', data);
};