// Will need to get history data in the future
var data = require('../data.json');

exports.viewHistory = function(req, res){
	res.render('history', data);
};

/*exports.viewHistoryBottom = function(req, res){
	data["side"] = false;
	res.render('history', data)
};
*/