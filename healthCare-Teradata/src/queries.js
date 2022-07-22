const getPatient = 'SELECT * FROM patientbasicinfo';
const addPatient = `INSERT INTO patientbasicinfo (motherName, babyName, babyDOB,
  address, email, phone, babyGender) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
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
    getPatientById,
};
