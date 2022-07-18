const pool = require('../db');
const queries = require('./queries');

const getPatient = (req, res) => {
  pool.query(queries.getPatient, (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  })
};

const addPatient = (req, res) => {
  // const { motherName, babyName, babyDOB, address, email, phone, babyGender } = req.body;
  const { name } = req.body;

  //TODO: write middleware to validate input.

  pool.query(queries.addPatient, [name], (err, result) => {
    res.json(newPatient.rows[0]);
  })
};

module.exports = {
  getPatient,
  addPatient,
};