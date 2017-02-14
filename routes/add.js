var data = require("../data.json");

exports.addFriend = function(req, res) {   
	// Your code goes here
		var name = req.query.name;
    var desc = req.query.description;
    var img = 'http://lorempixel.com/400/400/people';
    data.friends.push({name: name, description: desc, imageURL: img});

    console.log(data);
  
    res.render('index', data);
}
