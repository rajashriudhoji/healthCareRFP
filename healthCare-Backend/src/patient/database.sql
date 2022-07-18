CREATE DATABASE healthcare;

CREATE TABLE patientBasicInfo(
    patient_id SERIAL PRIMARY KEY,
    motherName VARCHAR(255),
    babyName VARCHAR(255),
    babyDOB DATE NOT NULL,
    address VARCHAR(355),
);