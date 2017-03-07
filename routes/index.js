// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	//console.log(data);
	data["side"] = true;
	req.session.side = true;
	console.log(req.session.side)
	// localStorage.setItem('storedSide', data["side"]);
	res.render('index', data);
};

exports.viewBottom = function(req, res){
	data["side"] = false;
	req.session.side = false;
	console.log(req.session.side)
	// localStorage.setItem('storedSide', data["side"]);
	res.render('index', data);
};