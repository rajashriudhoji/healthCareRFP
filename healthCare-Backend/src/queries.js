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
const removePatientBasicInfo = `DELETE FROM patientbasicinfo WHERE patient_id = $1 RETURNING *`;
const removePatientBreastFeeding = `DELETE FROM patientbreastfeeding WHERE patient_id = $1`;
const removePatientEducationalMaterial = `DELETE FROM patienteducationalmaterial WHERE patient_id = $1`;
const removePatientFollowupAppointments = `DELETE FROM patientfollowupappointments WHERE patient_id = $1`;
const removePatientPsychoSocialAssess = `DELETE FROM patientpsychosocialassess WHERE patient_id = $1`;
const removePatientSafeSpacing = `DELETE FROM patientsafespacing WHERE patient_id = $1`;
const removepatientVisit = `DELETE FROM patientvisit WHERE patient_id = $1`;
const updatePatient = `UPDATE patientbasicinfo
  SET motherName = $1, babyName = $2, babyDOB = $3, address = $4, email = $5, phone = $6, babyGender = $7
  WHERE patient_id = $8 RETURNING *`;
const updatePatientFollowUpAppointments = `UPDATE patientfollowupappointments
  SET pFollowupAppointment = $1, childFollowupAppointment = $2
  WHERE patient_id = $3`;
const updatePatientVisit = `UPDATE patientvisit
  SET dateOfService = $1, vitalSigns = $2, smokeStatus = $3
  WHERE patient_id = $4`;
const updatePatientBreastFeeding = `UPDATE patientbreastfeeding
  SET isBreastfeeding = $1, feedLength = $2, feedFrequency = $3, supplimentFormula = $4, feedingComfort = $5, isNippleCracked = $6
  WHERE patient_id = $7`;
const updatePatientSafeSpacing = `UPDATE patientsafespacing
  SET birthControl = $1, birthControlAssess = $2
  WHERE patient_id = $3`;
const updatePatientPsychoSocialAssess = `UPDATE patientpsychosocialassess
  SET relationWithBaby = $1, houseMemberStatus = $2, fatherStatus = $3, safety = $4, unsafeRelationStatus = $5, resourceStatus = $6
  WHERE patient_id = $7`;
const updatePatientEducationalMaterial = `UPDATE patienteducationalmaterial
  SET depressionScreening = $1, contraceptionMethod = $2, peripheralBloodGlucose = $3,
  doctorAppointment = $4, carSeatSafety = $5, immunizationSchedule = $6, breastFeeding = $7,
  infantSafety = $8, familyPlanning = $9, checkups = $10, details = $11
  WHERE patient_id = $12`;

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
  removePatientBasicInfo,
  removePatientBreastFeeding,
  removePatientEducationalMaterial,
  removePatientFollowupAppointments,
  removePatientPsychoSocialAssess,
  removePatientSafeSpacing,
  removepatientVisit,
  updatePatient,
  updatePatientFollowUpAppointments,
  updatePatientVisit,
  updatePatientBreastFeeding,
  updatePatientSafeSpacing,
  updatePatientPsychoSocialAssess,
  updatePatientEducationalMaterial,
};
