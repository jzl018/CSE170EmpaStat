var data = require("../data.json");

exports.removeTask = function(req, res) {   
	// Your code goes here
		var name = req.query.name;
		var sub1 = req.query.subtask1;
		var sub2 = req.query.subtask2;
		var sub3 = req.query.subtask3;
		var diff = req.query.difficulty;
		var dur = req.query.duration;
		var startd = req.query.startdate;
		var startr = req.query.startreminder;
		var endd = req.query.enddate;
		var endr = req.query.endreminder;
		var prog = req.query.progress;
    //var desc = req.query.description;
    //var img = 'http://lorempixel.com/400/400/people';

    // Find the current task
    var index = 0;
    for (i = 0; i < data.tasks.length; i++) { 
    	if (data.tasks[i].name === name) {
    		//console.log(data.tasks[i].name + "===" + name);
    		index = i;
    		break;
    	}
    	//console.log(data.tasks[i].name + "!=" + name);
    }

    data.tasks.splice(index, 1);

    //console.log(data);
  
    res.render('index', data);
}
