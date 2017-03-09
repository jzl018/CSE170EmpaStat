// Will need to get history data in the future
var data = require('../data.json');

exports.viewHistory = function(req, res){
	data["side"] = req.session.side;
	console.log(req.session.side)
	res.render('history', data);
};

/*exports.viewHistoryBottom = function(req, res){
	data["side"] = false;
	res.render('history', data)
};
*/