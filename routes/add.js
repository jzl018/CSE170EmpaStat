var data = require("../data.json");

exports.addTask = function(req, res) {   
	// Your code goes here
		var cid = req.query.cid;
		var cname = req.query.cname;
		var tname = req.query.tname;
		var diff = req.query.difficulty;
		var dur = req.query.duration;
		var startd = req.query.startdate;
		var startr = req.query.startreminder;
		var endd = req.query.enddate;
		var endr = req.query.endreminder;
		var prog = req.query.progress;
		var comp = req.query.complete;

		var createdtasks = data.users[0].createdtasks + 1

		console.log(cid);

		// Find this category
	  var cindex = 0;
	  for (i = 0; i < data.categories.length; i++) { 
	  	//console.log(data.categories[i].cid + "==" + cid);
	    if (data.categories[i].cid == cid) {
	      //console.log(data.categories[i].name + "===" + name);
	      cindex = i;
	      break;
	    }
	    //console.log(data.categories[i].name + "!=" + name);
	   }

    // Add task
    data.categories[cindex].tasks.push({tid: createdtasks, 
    																	tname: tname, cid: cid, category: cname, 
								    									difficulty: diff, duration: dur, startdate: startd, 
								    									startreminder: startr, enddate: endd, 
								    									endreminder: endr, progress: prog, complete: comp});

    // Increment task count
    data.users[0] = {name: data.users[0].name,
    								createdcategories: data.users[0].createdcategories,
    								createdtasks: createdtasks,
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
  
    res.render('category', data.categories[cindex]);
}
