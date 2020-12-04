BEGIN;

DROP TABLE IF EXISTS nurses, patients, treatments CASCADE;

CREATE TABLE nurses (
  id SERIAL PRIMARY KEY,
  id_num SERIAL NOT NULL UNIQUE,
  full_name VARCHAR(255) NOT NULL,
  password VARCHAR(250),
  subscription JSON
);

CREATE TABLE patients (
 id SERIAL PRIMARY KEY,
 id_num SERIAL NOT NULL UNIQUE,
 full_name VARCHAR(255) NOT NULL,
 room INTEGER,
 bed INTEGER,
 nurse_id INTEGER REFERENCES nurses(id)
);

CREATE TABLE treatments (
  id SERIAL PRIMARY KEY,
  treatment_time timestamptz NOT NULL,
  description TEXT,
  patient_id INTEGER REFERENCES patients(id),
  status boolean
);

INSERT INTO nurses (id_num,full_name,password) VALUES
('123456789','abeer riziq','lala'),
('234567890','raneen bransi','1234');

INSERT INTO patients (id_num,full_name,room,bed,nurse_id) VALUES
('45721346','tala amoury','15','3',1),
('213497569','hanan hassan','1','2',1),
('311487956','ahmad hassan','1','2',2),
('311466589','reem jad','4','1',2);

INSERT INTO treatments(treatment_time,description,patient_id,status) VALUES
('2020-12-04T20:24:00+02','2 pills of antibiotics',1,false),
('2020-12-04T19:56:00+02','2 pills of antibiotics',3,false),
('2020-12-04T19:59:00+02','2 pills of antibiotics',3,false),
('2020-12-04T19:50:00+02','3 pills of antibiotics',1,false);

COMMIT;
