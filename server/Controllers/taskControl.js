const task = require("../Models/taskModel");

module.exports.list = function list(request, response) {
  task.find({}).exec()
 .then(tasks => {
   response.json(tasks);
 });
};

module.exports.show = function show(request, response) {
  task.findById(request.params.id).exec()
  .then(tasks => {
    response.json(tasks);
  });
};
 
module.exports.create = function create(request, response) {
  const newTask = new Task({
    name: request.body.name,
    date: new Date(),
    order: request.body.tasks
  })
  newTask.save().then(savedTasks => {
    response.json(savedTasks);
  });
};
