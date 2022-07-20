const getPatient = 'SELECT * FROM patientbasicinfo';
const addPatient = `INSERT INTO patientbasicinfo (motherName, babyName, babyDOB,
  address, email, phone, babyGender) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
const addPatientFollowUpAppointments = `INSERT INTO patientfollowupappointments (patient_id,
  pFollowupAppointment, childFollowupAppointment) VALUES ($1, $2, $3)`;
const addPatientVisit = `INSERT INTO patientvisit (patient_id, dateOfService,
  vitalSigns, smokeStatus) VALUES ($1, $2, $3, $4)`;
const addPatientBreastFeeding = `INSERT INTO patientbreastfeeding (patient_id, isBreastfeeding, feedLength, feedFrequency, supplimentFormula,
  feedingComfort, isNippleCracked) VALUES ($1, $2, $3, $4, $5, $6, $7)`;
const addPatientSafeSpacing = `INSERT INTO patientsafespacing (patient_id, birthControl, birthControlAssess) VALUES ($1, $2, $3)`;
const addPatientPsychoSocialAssess = `INSERT INTO patientpsychosocialassess (patient_id, relationWithBaby, houseMemberStatus, fatherStatus,
  safety, unsafeRelationStatus, resourceStatus) VALUES ($1, $2, $3, $4, $5, $6, $7)`;
const addPatientEducationalMaterial = `INSERT INTO patienteducationalmaterial (patient_id, depressionScreening, contraceptionMethod, peripheralBloodGlucose,
  doctorAppointment, carSeatSafety, immunizationSchedule, breastFeeding, infantSafety, familyPlanning,
  checkups, details) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`;
const getPatientById = `SELECT * FROM patientbasicinfo INNER JOIN patientfollowupappointments ON
  patientbasicinfo.patient_id = patientfollowupappointments.patient_id
  INNER JOIN patientbreastfeeding
  ON
  patientbasicinfo.patient_id = patientbreastfeeding.patient_id
  INNER JOIN patientpsychosocialassess
  ON
  patientbasicinfo.patient_id = patientpsychosocialassess.patient_id
  INNER JOIN patientsafespacing
  ON
  patientbasicinfo.patient_id = patientsafespacing.patient_id
  INNER JOIN patientvisit
  ON
  patientbasicinfo.patient_id = patientvisit.patient_id
  INNER JOIN patienteducationalmaterial
  ON
  patientbasicinfo.patient_id = patienteducationalmaterial.patient_id
  WHERE patientfollowupappointments.patient_id = $1`;

module.exports = {
  getPatient,
  addPatient,
  addPatientFollowUpAppointments,
  addPatientVisit,
  addPatientBreastFeeding,
  addPatientSafeSpacing,
  addPatientPsychoSocialAssess,
  addPatientEducationalMaterial,
  getPatientById,
};
