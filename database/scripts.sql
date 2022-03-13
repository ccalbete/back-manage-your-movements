CREATE DATABASE MANAGE-YOUR-MOVEMENTS

--> setup tables

CREATE TABLE users(
  id SERIAL NOT NULL PRIMARY KEY,
  username VARCHAR(200) NOT NULL UNIQUE,
  password VARCHAR(200) NOT NULL
);

INSERT INTO users (username, password) VALUES ('test', '$2b$10$0OLogE.KEIefHFGATP3K6.irldRqcapHg15FNVRD..7X5pjLpw/we');
INSERT INTO users (username, password) VALUES ('user', '$2b$10$uS.ekKPXgnx6JKpgTr42U.AtVw7eor2PIGEzTxBDQ.523RUy2r63C');


CREATE TABLE categories(
  id SERIAL NOT NULL UNIQUE,
  user_id int NOT NULL, 
  name VARCHAR(200) NOT NULL,
	is_fixed_expense boolean,
	spent int NOT NULL,
	PRIMARY KEY (user_id, name),
	FOREIGN KEY (user_id) REFERENCES users(id)
);

insert into categories(user_id, name, is_fixed_expense, spent) values(1, 'Food', false, 0);
insert into categories(user_id, name, is_fixed_expense, spent) values(1, 'Outings', false, 500);
insert into categories(user_id, name, is_fixed_expense, spent) values(1, 'Clothes', false, 500); 
insert into categories(user_id, name, is_fixed_expense, spent) values(1, 'Transportation', false, 150); 
insert into categories(user_id, name, is_fixed_expense, spent) values(1, 'Cleaning', false, 50); 
insert into categories(user_id, name, is_fixed_expense, spent) values(1, 'Pharmacy', false, 130); 
insert into categories(user_id, name, is_fixed_expense, spent) values(1, 'University', true, 600); 
insert into categories(user_id, name, is_fixed_expense, spent) values(1, 'Booking', true, 752); 
insert into categories(user_id, name, is_fixed_expense, spent) values(1, 'Credit card', true, 0); 
insert into categories(user_id, name, is_fixed_expense, spent) values(1, 'English course', true, 0); 
insert into categories(user_id, name, is_fixed_expense, spent) values(1, 'Gym', true, 0); 
insert into categories(user_id, name, is_fixed_expense, spent) values(1, 'Internet', true, 200); 
insert into categories(user_id, name, is_fixed_expense, spent) values(2, 'Clothes', false, 165); 
insert into categories(user_id, name, is_fixed_expense, spent) values(2, 'Booking', true, 325); 



CREATE TABLE reasons(
  id SERIAL NOT NULL UNIQUE,
  user_id int NOT NULL, 
  name VARCHAR(200) NOT NULL,
	PRIMARY KEY (user_id, name),
	FOREIGN KEY (user_id) REFERENCES users(id)
)

insert into reasons(user_id, name) values(1, 'Salary');
insert into reasons(user_id, name) values(1, 'Gift');
insert into reasons(user_id, name) values(1, 'Leftover last month');
insert into reasons(user_id, name) values(2, 'Leftover last month');

CREATE TABLE places(
  id SERIAL NOT NULL UNIQUE,
  user_id int NOT NULL, 
  name VARCHAR(200) NOT NULL,
	PRIMARY KEY (user_id, name),
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

CREATE TABLE currencies(
  id SERIAL NOT NULL UNIQUE,
  user_id int NOT NULL,
  name VARCHAR(200) NOT NULL,
  symbol VARCHAR(200) NOT NULL,
  PRIMARY KEY (user_id, symbol)
);

insert into currencies(user_id, name, symbol) values(1, 'pesos', '$');
insert into currencies(user_id, name, symbol) values(1, 'dolares', 'USD');


CREATE TABLE payment_modes(
  id SERIAL NOT NULL UNIQUE,
  user_id int NOT NULL, 
  name VARCHAR(200) NOT NULL,
	spent int NOT NULL,
	is_debit boolean NOT NULL,
	available int,
  currency_id int NOT NULL,
	PRIMARY KEY (user_id, name),
	FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (currency_id) REFERENCES currencies(id)
);

insert into payment_modes(user_id, name, spent, is_debit, available, currency_id) values(1, 'Cash', 60, true, 300, 1);
insert into payment_modes(user_id, name, spent, is_debit, available, currency_id) values(1, 'Brou debit card', 30, true, 200, 1);
insert into payment_modes(user_id, name, spent, is_debit, available, currency_id) values(1, 'Santander debit card', 100, true, 500, 1);
insert into payment_modes(user_id, name, spent, is_debit, available, currency_id) values(1, 'Food card', 130, true, 430, 1);
insert into payment_modes(user_id, name, spent, is_debit, currency_id) values(1, 'Santander credit card', 350, false, 1);
insert into payment_modes(user_id, name, spent, is_debit, currency_id) values(1, 'Itau credit card', 180, false, 1);
insert into payment_modes(user_id, name, spent, is_debit, currency_id) values(1, 'Scotiabank credit card', 0, false, 1);
insert into payment_modes(user_id, name, spent, is_debit, available, currency_id) values(2, 'Brou debit card', 85, true, 215, 1);
insert into payment_modes(user_id, name, spent, is_debit, available, currency_id) values(1, 'Santander dolares', 85, true, 215, 2);

--> history tables

CREATE TABLE expenses(
  id SERIAL NOT NULL PRIMARY KEY,
  user_id int NOT NULL, 
  amount int NOT NULL,
  payment_mode_id int NOT NULL,
  currency_id int NOT NULL,
  place_id int,
  category_id int,
  date VARCHAR(200) NOT NULL,
	FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (payment_mode_id) REFERENCES payment_modes(id),
  FOREIGN KEY (place_id) REFERENCES places(id),
  FOREIGN KEY (category_id) REFERENCES categories(id),
  FOREIGN KEY (currency_id) REFERENCES currencies(id)
);

CREATE TABLE incomes(
   id SERIAL NOT NULL PRIMARY KEY,
  user_id int NOT NULL,
  reason_id int NOT NULL,
  payment_mode_id int NOT NULL,
  currency_id int NOT NULL,
  date VARCHAR(200) NOT NULL,
	amount int NOT NULL,
	FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (reason_id) REFERENCES reasons(id),
  FOREIGN KEY (payment_mode_id) REFERENCES payment_modes(id),
  FOREIGN KEY (currency_id) REFERENCES currencies(id)
);

CREATE TABLE transfers(
  id SERIAL NOT NULL PRIMARY KEY,
  user_id int NOT NULL, 
  date VARCHAR(200),
  origin_payment_mode_id int NOT NULL,
  origin_currency_id int NOT NULL,
  origin_amount int NOT NULL,
  destination_payment_mode_id int NOT NULL,
  destination_amount int,
	FOREIGN KEY (user_id) REFERENCES users(id),
	FOREIGN KEY (origin_payment_mode_id) REFERENCES payment_modes(id),
	FOREIGN KEY (destination_payment_mode_id) REFERENCES payment_modes(id),
  FOREIGN KEY (origin_currency_id) REFERENCES currencies(id)
);


