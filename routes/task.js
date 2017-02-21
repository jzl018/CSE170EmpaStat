exports.viewTask = function(req, res) {
  // controller code goes here
  var name = req.params.name;
  var subtask = req.params.subtask1;
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

  console.log("The subtask name is: " + subtask);
  res.render('task', {
    'taskName': name, 
    'test': subtask,
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
};