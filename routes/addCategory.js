var data = require("../data.json");

exports.addNewCategory = function(req, res) {   
	// Your code goes here
	var cname = req.query.cname;
	var prog = req.query.progress;
	var comp = req.query.complete;
	var taskarr = [];

    var createdcategories = data.users[0].createdcategories + 1
    
    // Add category
	data.categories.push({cid: createdcategories,
                        cname: cname, progress: prog, complete: comp, tasks: taskarr});

    // Increment category count
    data.users[0] = {name: data.users[0].name, 
                                    createdcategories: createdcategories,
                                    createdtasks: data.users[0].createdtasks,
                                    completedtasks: data.users[0].completedtasks};

    console.log(data);
  
    res.render('index', data);
}