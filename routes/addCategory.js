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

    // Update challenges data
    for (i = 0; i < data.challenges.length; i++) { 
        if (data.users[0].completedtasks >= data.challenges[i].rcompletetasks && 
            data.users[0].createdcategories >= data.challenges[i].rcreatecategories &&
            data.users[0].createdtasks >= data.challenges[i].rcreatetasks) {
            data.challenges[i] = {name: data.challenges[i].name, 
                                    rcreatecategories: data.challenges[i].rcreatecategories,
                                    rcreatetasks: data.challenges[i].rcreatetasks,
                                    rcompletetasks: data.challenges[i].rcompletetasks,
                                    complete: "yes"};
        }
        else {
            data.challenges[i] = {name: data.challenges[i].name, 
                                    rcreatecategories: data.challenges[i].rcreatecategories,
                                    rcreatetasks: data.challenges[i].rcreatetasks,
                                    rcompletetasks: data.challenges[i].rcompletetasks,
                                    complete: ""};
        }
    }

    console.log(data);
  
    res.render('index', data);
}