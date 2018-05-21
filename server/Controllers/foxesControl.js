const fetch = ("node-fetch");

// mongoose step by step

// module.exports.list = function list(request, response) {
//     order.find({}).exec()
//    .then(orders => {
//      response.json(orders);
//    });
//   };

  module.exports.show = function show(request, response) {
      fetch("https://randomfox.ca/floof");
      .then(res => res.json());
      .then(res => response.json(json.image));
  };
   
//   module.exports.create = function create(request, response) {
//     const newOrder = new Order({
//       name: request.body.name,
//       date: new Date(),
//       order: request.body.orders
//     })
//     newOrder.save().then(savedOrders => {
//       response.json(savedOrders);
//     });
  };
  