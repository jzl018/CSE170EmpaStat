// Will need to get profile data in the future
var data = require('../data.json');

exports.viewProfile = function(req, res){
	data["side"] = true;
	res.render('profile', data);
};

exports.viewProfileBottom = function(req, res){
	data["side"] = false;
	res.render('profile', data);
};