var data = require("../data.json");

exports.modifyTask = function(req, res) {   
	// Your code goes here
		var name = req.query.name;
		var sub1 = req.query.subtask1;
		var sub2 = req.query.subtask2;
		var sub3 = req.query.subtask3;
        var sub1s = req.query.subtask1status;
        var sub2s = req.query.subtask2status;
        var sub3s = req.query.subtask3status;
		var diff = req.query.difficulty;
		var dur = req.query.duration;
		var startd = req.query.startdate;
		var startr = req.query.startreminder;
		var endd = req.query.enddate;
		var endr = req.query.endreminder;
		var prog = req.query.progress;
        var comp = req.query.complete;
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

    data.tasks[index] = {name: name, subtask1: sub1, subtask2: sub2, subtask3: sub3, 
                        subtask1status: sub1s, subtask2status: sub2s, subtask3status: sub3s, 
    					difficulty: diff, duration: dur, startdate: startd, 
    					startreminder: startr, enddate: endd, 
    					endreminder: endr, progress: prog, complete: comp};

    // Count completed tasks for challenges
    var completed = 0;
    for (i = 0; i < data.tasks.length; i++) { 
        if (data.tasks[i].complete === "yes") {
            completed++;
        }
    }

    // Update challenges data
    for (i = 0; i < data.challenges.length; i++) { 
        if (completed >= data.challenges[i].required) {
            data.challenges[i] = {name: data.challenges[i].name, 
                                 required: data.challenges[i].required,
                                 complete: "yes"};
        }
        else {
            data.challenges[i] = {name: data.challenges[i].name, 
                                 required: data.challenges[i].required,
                                 complete: ""};
        }
    }

    // Update user data
    data.users[0] = {name: data.users[0].name, streak: data.users[0].streak, 
                    hours: data.users[0].hours, completedtasks: completed};
  
    res.render('index', data);
}
