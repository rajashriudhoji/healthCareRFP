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

CREATE TABLE patientVisit (
	patient_id NUMERIC(5) NOT NULL,
	dateOfService DATE,
	abdomen json,
	vitalSigns json,
	babyDOB DATE
);

CREATE TABLE patientClinicalAssess (
	patient_id NUMERIC(5) NOT NULL,
	smokeStatus BOOLEAN,
	neuro json,
	skin json,
	lungs json,
	abdomen json,
	elimination json,
	perimeum json,
	lochia json,
	pain json,
);

CREATE TABLE patientBreastFeeding (
	patient_id NUMERIC(5) NOT NULL,
	isBreastfeeding BOOLEAN,
	feedLength NUMERIC(5),
	sfeedFrequencykin NUMERIC(5),
	supplimentFormula BOOLEAN,
	feedingComfort BOOLEAN,
	isNippleCracked BOOLEAN,
);

CREATE TABLE patientSafeSpacing (
	patient_id NUMERIC(5) NOT NULL,
	birthControl json,
	birthControlAssess json,
);

CREATE TABLE patientPsychoSocialAssess (
	patient_id NUMERIC(5) NOT NULL,
	relationWithBaby json,
	houseMemberStatus json,
	fatherStatus json,
	safety json,
	unsafeRelationStatus json,
	resourceStatus json,
);

CREATE TABLE patientClinicalAssess (
	patient_id NUMERIC(5) NOT NULL,
	depressionScreening json,
	contraceptionMethod json,
	peripheralBloodGlucose json,
	doctorAppointment json,
	carSeatSafety json,
	immunizationSchedule json,
	breastFeeding json,
	infantSafety json,
	familyPlanning json,
	checkups json,
	details VARCHAR(355),
);
