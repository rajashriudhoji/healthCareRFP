const pool = require('../db');
const queries = require('./queries');
const utils = require('./utils');

const getPatient = (req, res) => {
  pool.query(queries.getPatient, (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  })
};

const addPatient = async(req, res) => {
  try{
    const {motherName, babyName, babyDOB, address, email, phone, babyGender, folowUpAppointments} = req.body;

    //TODO: write middleware to validate input.
    const patient = await pool.query(queries.addPatient, [motherName, babyName, babyDOB, address, email, phone, babyGender]);
    if(patient.rows.length){
      const patient_id = patient.rows[0].patient_id;
      await utils.addPatientFollowUpAppointments(patient_id, folowUpAppointments);
    }

    res.json({
      patient: patient.rows[0],
    });
  } catch(err){
    console.log('error',err);
    res.status(500);
  }
};

module.exports = {
  getPatient,
  addPatient,
};