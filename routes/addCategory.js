var data = require("../data.json");

exports.addNewCategory = function(req, res) {   
	// Your code goes here
		var cname = req.query.cname;
		var prog = req.query.progress;
		var comp = req.query.complete;
		var taskarr = [];

    //var desc = req.query.description;
    //var img = 'http://lorempixel.com/400/400/people';
    /*
    data.tasks.push({name: name, subtask1: sub1, subtask2: sub2, subtask3: sub3,
    									subtask1status: sub1s, subtask2status: sub2s, subtask3status: sub3s,  
    									difficulty: diff, duration: dur, startdate: startd, 
    									startreminder: startr, enddate: endd, 
    									endreminder: endr, progress: prog, complete: comp}); */

		data.categories.push({cname: cname, progress: prog, complete: comp, tasks: taskarr});

    console.log(data.categories);
  
    res.render('index', data);
}