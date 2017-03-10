// Will need to get login data in the future
var data = require('../data.json');

exports.viewLogin = function(req, res){
	data["side"] = req.session.side;
	res.render('login', data);
};