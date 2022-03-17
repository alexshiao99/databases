var db = require('../db/');

module.exports = {
  getAll: function () {
    console.log('getAll called models/messages.js line 5');
  }, // a function which produces all the messages, connect to db
  create: function () {} // a function which can be used to insert a message into the database
};
