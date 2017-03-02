// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	//console.log(data);
	data["side"] = true;
	res.render('index', data);
};

exports.viewBottom = function(req, res){
	data["side"] = false;
	res.render('index', data);
}