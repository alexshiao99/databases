var models = require('../models');
//handles the get http req from client

let callBackFn = (err, result)=>{
  if (err) {
    console.error('error', err);
  } else {
    console.log('success!', result);
  }
};

module.exports = {
  get: function (req, res) {
    new Promise ((resolve, reject) => {
      models.messages.getAll((err, result) => {
       if (err) {
         reject(err);
       } else {
         resolve(result);
       }
    })
    }).then((result) => {res.status(200).send(result); })
    .catch((error) => {res.send(error); });
  },
  // a function which handles a get request for all messages, use whats in the model as part of the request
  post: function (req, res) { // a function which handles posting a message to the database
    // console.log(' in here line 15', req);
    var body = '';
    console.log('got the request', req.body)
      new Promise ((resolve, reject) => {
        models.messages.create(req.body, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      }).then((result) => {res.status(201).send(result); })
      .catch((error) => {res.send(error); })
  }
};



// module.exports.post(() => {});
