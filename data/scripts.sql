CREATE DATABASE MANAGE-YOUR-MOVEMENTS

CREATE TABLE users(
  id SERIAL NOT NULL PRIMARY KEY,
  username VARCHAR(200) NOT NULL UNIQUE,
  password VARCHAR(200) NOT NULL
);

INSERT INTO users (username, password) VALUES ('test', '$2b$10$FP28QaANbELDLWGGtP19buncOSvpOVDo8/G9qhS0ID30Lfa5Q2UD6');

INSERT INTO users (username, password) VALUES ('user', '$2b$10$uS.ekKPXgnx6JKpgTr42U.AtVw7eor2PIGEzTxBDQ.523RUy2r63C');

