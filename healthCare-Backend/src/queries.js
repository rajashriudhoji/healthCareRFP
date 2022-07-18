const getPatient = 'SELECT * FROM patientbasicinfo';
const addPatient = `INSERT INTO patientbasicinfo (motherName, babyName, babyDOB,
  address, email, phone, babyGender) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
const addPatientFollowUpAppointments = `INSERT INTO patientfollowupappointments (patient_id,
  pFollowupAppointment, childFollowupAppointment) VALUES ($1, $2, $3)`;

module.exports = {
  getPatient,
  addPatient,
  addPatientFollowUpAppointments,
};