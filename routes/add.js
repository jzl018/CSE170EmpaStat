var data = require("../data.json");

exports.addTask = function(req, res) {   
	// Your code goes here
		var name = req.query.name;
		var sub1 = req.query.subtask1;
		var sub2 = req.query.subtask2;
		var sub3 = req.query.subtask3;
		var diff = req.query.difficulty;
		var dur = req.query.duration;
		var startd = req.query.startdate;
		var startt = req.query.starttime;
		var startr = req.query.startreminder;
		var endd = req.query.enddate;
		var endt = req.query.endtime;
		var endr = req.query.endreminder;
		var prog = req.query.progress;
    //var desc = req.query.description;
    //var img = 'http://lorempixel.com/400/400/people';
    data.tasks.push({name: name, subtask1: sub1, subtask2: sub2, subtask3: sub3, 
    									difficulty: diff, duration: dur, startdate: startd, 
    									starttime: startt, startreminder: startr, enddate: endd, 
    									endtime: endt, endreminder: endr, progress: prog});

    console.log(data);
  
    res.render('index', data);
}
