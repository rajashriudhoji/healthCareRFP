const getPatient = 'SELECT * FROM patient';
const addPatient = '"INSERT INTO patient (name) VALUES($1) RETURNING *"';

module.exports = {
  getPatient,
  addPatient,
};