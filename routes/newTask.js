// Get all of our friend data
var data = require('../data.json');

exports.viewNewTask = function(req, res){
  // controller code goes here
  var cid = req.params.cid;

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

  var thiscat = data.categories[cindex];
  console.log(thiscat);
  res.render('newTask', thiscat);
};