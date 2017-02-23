// Get all of our task data
var data = require('../data.json');

exports.viewTask = function(req, res) {
  // controller code goes here
  var name = req.params.name;

  var index = 0;
    for (i = 0; i < data.tasks.length; i++) { 
    	if (data.tasks[i].name === name) {
    		//console.log(data.tasks[i].name + "===" + name);
    		index = i;
    		break;
    	}
    	//console.log(data.tasks[i].name + "!=" + name);
    }

  var thistask = data.tasks[index];
  console.log(thistask);
  res.render('task', thistask);
  /*
  var subtask1 = req.params.subtask1;
  var subtask2 = req.params.subtask2;
  var subtask3 = req.params.subtask3;
  var difficulty = req.params.difficulty;
  var duration = req.params.duration;
  var startdate = req.params.startdate;
  var starttime = req.params.starttime;
  var startreminder = req.params.startreminder;
  var enddate = req.params.enddate;
  var endtime = req.params.endtime;
  var endreminder = req.params.endreminder;
  var progress = req.params.progress;

  console.log("The subtask name is: " + subtask1);
  res.render('task', { 
    'taskName': name, 
    'tsubtask1': subtask1,
		'tsubtask2': subtask2,
		'tsubtask3': subtask3,
		'tdifficulty': difficulty,
		'tduration': duration,
		'tstartdate': startdate,
		'tstarttime': starttime,
		'tstartreminder': startreminder,
		'tenddate': enddate,
		'tendtime': endtime,
		'tendreminder': endreminder,
		'tprogress': progress
  });
*/
};