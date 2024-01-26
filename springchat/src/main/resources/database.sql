CREATE DATABASE SpringChat;

USE SpringChat;

CREATE TABLE User (
    userid VARCHAR(255) PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(255)
);

CREATE TABLE Message(
    messageid VARCHAR(255) PRIMARY KEY,
    message VARCHAR(255),
    date DATETIME DEFAULT CURRENT_TIMESTAMP,
    userid VARCHAR(255),
    CONSTRAINT FOREIGN KEY (userid) REFERENCES User(userid)
);