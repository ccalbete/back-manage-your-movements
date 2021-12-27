CREATE DATABASE MANAGE-YOUR-MOVEMENTS

CREATE TABLE users(
  id SERIAL NOT NULL PRIMARY KEY,
  username VARCHAR(200) NOT NULL UNIQUE,
  password VARCHAR(200) NOT NULL
);

INSERT INTO users (username, password) VALUES ('test', '$2b$10$0OLogE.KEIefHFGATP3K6.irldRqcapHg15FNVRD..7X5pjLpw/we');

INSERT INTO users (username, password) VALUES ('user', '$2b$10$uS.ekKPXgnx6JKpgTr42U.AtVw7eor2PIGEzTxBDQ.523RUy2r63C');


CREATE TABLE transfers(
  id SERIAL NOT NULL PRIMARY KEY,
  user_id int NOT NULL, 
  date VARCHAR(200),
  origin VARCHAR(200),
  amount VARCHAR(200),
  destination VARCHAR(200),
	FOREIGN KEY (user_id) REFERENCES users(id)
);

