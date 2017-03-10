// Will need to get profile data in the future
var data = require('../data.json');

exports.viewProfile = function(req, res){
	res.render('profile', data);
};