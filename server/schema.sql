CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  /* Describe your table here.*/
  username_id INT NOT NULL,
  username VARCHAR(30) NOT NULL,
  PRIMARY KEY (username_id)
);

CREATE TABLE rooms (
  /* Describe your table here.*/
  roomname_id INT NOT NULL,
  roomname VARCHAR(30) NOT NULL,
  PRIMARY KEY(roomname_id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  messages_id INT NOT NULL,
  message_body VARCHAR(255) NOT NULL,
  username_id INT NOT NULL,
  roomname_id INT NOT NULL,
  PRIMARY KEY (messages_id),
  FOREIGN KEY (username_id) REFERENCES users(username_id),
  FOREIGN KEY (roomname_id) REFERENCES rooms(roomname_id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
