// Get all of our task data
var data = require('../data.json');

exports.viewCategory = function(req, res) {
  // controller code goes here
  var cid = req.params.cid;

  // Find this category
  var index = 0;
  for (i = 0; i < data.categories.length; i++) { 
   	if (data.categories[i].cid == cid) {
   		//console.log(data.categories[i].name + "===" + name);
   		index = i;
   		break;
   	}
   	//console.log(data.categories[i].name + "!=" + name);
   }

  var thiscategory = data.categories[index];
  console.log(thiscategory);
  res.render('category', thiscategory);
};