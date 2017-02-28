var data = require("../data.json");

exports.removeCategory = function(req, res) {   
    // Your code goes here
    var cname = req.query.cname;

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

    data.categories.splice(cindex, 1); 

    res.render('index', data);
}