var db = require('../db/');

module.exports = {
  getAll: function (callback) {
    console.log('getAll called models/messages.js line 5');
    db.connection.query(`SELECT messages.message_id, messages.text, users.username, rooms.roomname
    FROM users
    INNER JOIN messages
    INNER JOIN rooms
    WHERE messages.username_id = users.username_id AND messages.roomname_id = rooms.roomname_id;`
    , callback);
  }, // a function which produces all the messages, connect to db
  create: function (message, callback) {
    let username = message['username'];
    let messageBody = message.text;
    let roomname = message.roomname;
    // db.connection.query('INSERT INTO users VALUES (NULL , "' + username + '")');
    db.connection.query(`INSERT IGNORE INTO users VALUES (NULL , "${username}")`, callback);
    db.connection.query(`INSERT IGNORE INTO rooms VALUES (NULL , "${roomname}")`, callback);
    db.connection.query(`INSERT INTO messages
      VALUES (
        NULL ,
        "${messageBody}",
        (SELECT username_id FROM users WHERE username = "${username}"),
        (SELECT roomname_id FROM rooms WHERE roomname = "${roomname}")
        )
      `, callback);

    console.log(' line 12 here');
  } // a function which can be used to insert a message into the database
};

//INSERT INTO table(c1,c2,...)
//VALUES (v1,v2,...);

//INSERT INTO table_name
//VALUES (value1, value2, value3, ...);