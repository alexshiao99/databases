var models = require('../models');
//handles the get http req from client

module.exports = {
  get: function (req, res) {
    console.log(req.method);
    console.log(req.url);
  }, // a function which handles a get request for all messages, use whats in the model as part of the request
  post: function (req, res) {} // a function which handles posting a message to the database
};
