// Will need to get login data in the future
var data = require('../data.json');

exports.viewHelp = function(req, res){
	res.render('help', data);
};