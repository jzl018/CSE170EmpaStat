var data = require("../data.json");

exports.modifyCategory = function(req, res) {   
	// Your code goes here
  var cid = req.query.cid;
  var cname = req.query.cname;
	var prog = req.query.progress;
  var comp = req.query.complete;

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
      
    console.log("Overwriting: " + data.categories[cindex].cname);

    data.categories[cindex] = {cid: cid,
                              cname: cname, progress: prog, 
                        			complete: comp, 
                              tasks: data.categories[cindex].tasks};

    res.render('index', data);
}