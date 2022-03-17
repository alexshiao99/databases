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
    models.messages.getAll((err, result) => {
      if (err) {
        res.status(404).send();
      } else {
        console.log(result);
        // res.status(200).send()
        res.status(200).send(JSON.stringify(result));
      }
      res.end();
    });
  }, // a function which handles a get request for all messages, use whats in the model as part of the request
  post: function (req, res) { // a function which handles posting a message to the database
    // console.log(' in here line 15', req);
    var body = '';
    req.on('data', (chunk) => {
      body += chunk;
    }).on('end', () => {
      // console.log('line 20 BODY', body);
      // console.log('typeof body', typeof(body));
      models.messages.create(JSON.parse(body), callBackFn);
    });
    res.status(201).end();
  }
};



// module.exports.post(() => {});
