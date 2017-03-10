// Get all of our task data
var data = require('../data.json');

exports.viewReminder = function(req, res) {
  // controller code goes here
  var cid = req.params.cid;
  var tid = req.params.tid;

  // Find this category
  var cindex = 0;
  for (i = 0; i < data.categories.length; i++) { 
    if (data.categories[i].cid == cid) {
      //console.log(data.categories[i].name + "===" + name);
      cindex = i;
      break;
    }
    //console.log(data.categories[i].name + "!=" + name);
   }

  // Find this task
  var index = 0;
  for (i = 0; i < data.categories[cindex].tasks.length; i++) {
   //console.log(data.categories[cindex].tasks[i].tname + "==" + tname); 
   	if (data.categories[cindex].tasks[i].tid == tid) {
   		// console.log(data.categories[cindex].tasks[i].tname + "==" + tname);
   		index = i;
   		break;
   	}
   	//console.log(data.tasks[i].name + "!=" + name);
   }

  var thistask = data.categories[cindex].tasks[index];
  //var categoryid = {cid: data.categories[cindex].cid};
  //thistask.push(categoryid);
  thistask.cid = data.categories[cindex].cid;
  thistask.cname = data.categories[cindex].cname;
  console.log(thistask);
  res.render('reminder', thistask);
};