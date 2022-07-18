const getPatient = 'SELECT * FROM patientbasicinfo';
const addPatient = `INSERT INTO patientbasicinfo (motherName, babyName, babyDOB,
  address, email, phone, babyGender) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;

module.exports = {
  getPatient,
  addPatient
};