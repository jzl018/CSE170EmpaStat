var data = require("../data.json");

exports.addTask = function(req, res) {   
	// Your code goes here
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

		// Find this category
	  var cindex = 0;
	  for (i = 0; i < data.categories.length; i++) { 
	    if (data.categories[i].cname === cname) {
	      //console.log(data.categories[i].name + "===" + name);
	      cindex = i;
	      break;
	    }
	    //console.log(data.categories[i].name + "!=" + name);
	   }

    //var desc = req.query.description;
    //var img = 'http://lorempixel.com/400/400/people';
    data.categories[cindex].tasks.push({tname: tname, category: cname, 
								    									difficulty: diff, duration: dur, startdate: startd, 
								    									startreminder: startr, enddate: endd, 
								    									endreminder: endr, progress: prog, complete: comp});

    console.log(data);
  
    res.render('category', data.categories[cindex]);
}
