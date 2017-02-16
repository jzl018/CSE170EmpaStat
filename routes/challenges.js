// Will need to get challenges data in the future
var data = require('../data.json');

exports.viewChallenges = function(req, res){
	res.render('challenges', data);
};