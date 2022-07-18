const pool = require('../db');
const queries = require('./queries');

const getPatient = (req, res) => {
  pool.query(queries.getPatient, (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  })
};

const addPatient = (req, res) => {
  const {motherName, babyName, babyDOB, address, email, phone, babyGender} = req.body;

  //TODO: write middleware to validate input.

  pool.query(queries.addPatient, [motherName, babyName, babyDOB, address, email, phone, babyGender], (error, result) => {
    if (error) throw error;
    res.status(201). send('Patient added with id'+ result.rows[0].patient_id);
  });
};

module.exports = {
  getPatient,
  addPatient,
};