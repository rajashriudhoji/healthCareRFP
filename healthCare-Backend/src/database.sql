CREATE DATABASE healthcare;

CREATE TABLE patientBasicInfo (
	patient_id SERIAL PRIMARY KEY,
	motherName VARCHAR(255),
	babyName VARCHAR(255),
	babyDOB DATE NOT NULL,
	address VARCHAR(355),
	email VARCHAR(255) NOT NULL,
	phone VARCHAR(10) NOT NULL,
	babyGender CHAR(1) NOT NULL
);

CREATE TABLE patientFollowUpAppointments (
	patient_id NUMERIC(5) NOT NULL,
	pFollowupAppointment json NOT NULL,
	childFollowupAppointment json NOT NULL
);
