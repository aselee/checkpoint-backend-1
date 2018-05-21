const message = require("../Models/messageModel");

module.exports.list = function list(request, response) {
  message.find({}).exec()
 .then(messages => {
   response.json(messages);
 });
};

module.exports.show = function show(request, response) {
  message.findById(request.params.id).exec()
  .then(messages => {
    response.json(messages);
  });
};
 
module.exports.create = function create(request, response) {
  const newMessage = new Message({
    name: request.body.name,
    date: new Date(),
    message: request.body.messages
  })
  newMessage.save().then(savedMessages => {
    response.json(savedMessages);
  });
};
