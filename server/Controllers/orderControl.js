const order = require("../Models/orderModel");

module.exports.list = function list(request, response) {
  order.find({}).exec()
 .then(orders => {
   response.json(orders);
 });
};

module.exports.show = function show(request, response) {
  order.findById(request.params.id).exec()
  .then(orders => {
    response.json(orders);
  });
};
 
module.exports.create = function create(request, response) {
  const newOrder = new Order({
    name: request.body.name,
    date: new Date(),
    order: request.body.orders
  })
  newOrder.save().then(savedOrders => {
    response.json(savedOrders);
  });
};
