// Will need to get login data in the future
var data = require('../data.json');

exports.viewLogin = function(req, res){
	res.render('login', data);
};