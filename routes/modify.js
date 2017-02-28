var data = require("../data.json");

exports.modifyTask = function(req, res) {   
	// Your code goes here
  var cid = req.query.cid;
  var tid = req.query.tid;
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

  console.log(cid);
  console.log(tid);

    // Find this category
    var cindex = 0;
    for (i = 0; i < data.categories.length; i++) { 
    //console.log(data.categories[i].cid + "===" + cid);
      if (data.categories[i].cid == cid) {
        cindex = i;
        break;
      }
      //console.log(data.categories[i].name + "!=" + name);
     }

    // Find this task
    var index = 0;
    for (i = 0; i < data.categories[cindex].tasks.length; i++) {
    // console.log(data.categories[cindex].tasks[i].tname + "==" + tname); 
      if (data.categories[cindex].tasks[i].tid == tid) {
          // console.log(data.categories[cindex].tasks[i].tname + "==" + tname);
          index = i;
          break;
      }
      //console.log(data.tasks[i].name + "!=" + name);
     }
      
    console.log("Overwriting: " + data.categories[cindex].tasks[index].name);

    data.categories[cindex].tasks[index] = {tid: tid,
                                  tname: tname, category: cname, 
                        					difficulty: diff, duration: dur, startdate: startd, 
                        					startreminder: startr, enddate: endd, 
                        					endreminder: endr, progress: prog, complete: comp};

    res.render('category', data.categories[cindex]);
}
