exports.viewTask = function(req, res) {
  // controller code goes here
  var name = req.params.name;
  console.log("The task name is: " + name);
  res.render('task', {
    'taskName': name
  });
};