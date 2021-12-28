CREATE DATABASE MANAGE-YOUR-MOVEMENTS

--> setup tables

CREATE TABLE users(
  id SERIAL NOT NULL PRIMARY KEY,
  username VARCHAR(200) NOT NULL UNIQUE,
  password VARCHAR(200) NOT NULL
);

INSERT INTO users (username, password) VALUES ('test', '$2b$10$0OLogE.KEIefHFGATP3K6.irldRqcapHg15FNVRD..7X5pjLpw/we');
INSERT INTO users (username, password) VALUES ('user', '$2b$10$uS.ekKPXgnx6JKpgTr42U.AtVw7eor2PIGEzTxBDQ.523RUy2r63C');

CREATE TABLE reasons(
  id SERIAL NOT NULL UNIQUE,
  user_id int NOT NULL, 
  name VARCHAR(200) NOT NULL,
	PRIMARY KEY (id, user_id, name),
	FOREIGN KEY (user_id) REFERENCES users(id)
)

insert into reasons(user_id, name) values(1, 'Salary');
insert into reasons(user_id, name) values(1, 'Gift');
insert into reasons(user_id, name) values(1, 'Leftover last month');
insert into reasons(user_id, name) values(2, 'Leftover last month');

CREATE TABLE places(
  id SERIAL NOT NULL,
  user_id int NOT NULL, 
  name VARCHAR(200) NOT NULL,
	PRIMARY KEY (id, user_id, name),
	FOREIGN KEY (user_id) REFERENCES users(id)
);

insert into places(user_id, name) values(1, 'Supermarket Frog');
insert into places(user_id, name) values(1, 'Supermarket Disco');
insert into places(user_id, name) values(1, 'Brou webpage');
insert into places(user_id, name) values(1, 'Santander webpage');
insert into places(user_id, name) values(1, 'Pharmacy Farmashop');
insert into places(user_id, name) values(1, 'Pharmacy San Roque');
insert into places(user_id, name) values(1, 'University ORT');
insert into places(user_id, name) values(1, 'Abitab');
insert into places(user_id, name) values(2, 'Pharmacy');
insert into places(user_id, name) values(3, 'Surpermarket');



CREATE TABLE payment_modes(
  id SERIAL NOT NULL UNIQUE,
  user_id int NOT NULL, 
  name VARCHAR(200) NOT NULL,
	spent int NOT NULL,
	is_debit boolean NOT NULL,
	available int,
	PRIMARY KEY (id, user_id, name),
	FOREIGN KEY (user_id) REFERENCES users(id)
);

insert into payment_modes(user_id, name, spent, is_debit, available) values(1, 'Cash', 60, true, 300);
insert into payment_modes(user_id, name, spent, is_debit, available) values(1, 'Brou debit card', 30, true, 200);
insert into payment_modes(user_id, name, spent, is_debit, available) values(1, 'Santander debit card', 100, true, 500);
insert into payment_modes(user_id, name, spent, is_debit, available) values(1, 'Food card', 130, true, 430);
insert into payment_modes(user_id, name, spent, is_debit) values(1, 'Santander credit card', 350, false);
insert into payment_modes(user_id, name, spent, is_debit) values(1, 'Itau credit card', 180, false);
insert into payment_modes(user_id, name, spent, is_debit) values(1, 'Scotiabank credit card', 0, false);
insert into payment_modes(user_id, name, spent, is_debit, available) values(2, 'Brou debit card', 85, true, 215);


--> history tables

CREATE TABLE transfers(
  id SERIAL NOT NULL PRIMARY KEY,
  user_id int NOT NULL, 
  date VARCHAR(200),
  origin VARCHAR(200),
  amount VARCHAR(200),
  destination VARCHAR(200),
	FOREIGN KEY (user_id) REFERENCES users(id)
);


CREATE TABLE incomes(
  id SERIAL NOT NULL,
  user_id int NOT NULL,
  reason_id int NOT NULL,
  payment_mode_id int NOT NULL,
  date VARCHAR(200) NOT NULL,
	amount int NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (reason_id) REFERENCES reasons(id),
  FOREIGN KEY (payment_mode_id) REFERENCES payment_modes(id)
);



