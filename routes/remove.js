var data = require("../data.json");

exports.removeTask = function(req, res) {   
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
    //var desc = req.query.description;
    //var img = 'http://lorempixel.com/400/400/people';

    // Find this category
    var cindex = 0;
    for (i = 0; i < data.categories.length; i++) { 
    console.log(data.categories[i].cname + "===" + cname);
      if (data.categories[i].cname === cname) {
        cindex = i;
        break;
      }
      //console.log(data.categories[i].name + "!=" + name);
     }

    // Find this task
    var index = 0;
    for (i = 0; i < data.categories[cindex].tasks.length; i++) {
     console.log(data.categories[cindex].tasks[i].tname + "==" + tname); 
      if (data.categories[cindex].tasks[i].tname === tname) {
          // console.log(data.categories[cindex].tasks[i].tname + "==" + tname);
          index = i;
          break;
      }
      //console.log(data.tasks[i].name + "!=" + name);
     }

    data.categories[cindex].tasks.splice(index, 1); 

    res.render('category', data.categories[cindex]);
}
