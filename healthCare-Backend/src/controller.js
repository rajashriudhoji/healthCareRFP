const pool = require('../db');
const queries = require('./queries');

const getPatient = (req, res) => {
  pool.query(queries.getPatient, (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  })
};

const addPatientFollowUpAppointments = (patient_id, folowUpAppointments) => {
  const {pFollowupAppointment, childFollowupAppointment} = folowUpAppointments;

  pool.query(queries.addPatientFollowUpAppointments, [patient_id, pFollowupAppointment, childFollowupAppointment], (error, result) => {
    if (error) throw error;
    return result;
  });

};

const addPatient = async(req, res) => {
  try{
    const {motherName, babyName, babyDOB, address, email, phone, babyGender, folowUpAppointments} = req.body;

    //TODO: write middleware to validate input.
    const patient = await pool.query(queries.addPatient, [motherName, babyName, babyDOB, address, email, phone, babyGender]);
    const patient_id = patient.rows.length ? patient.rows[0].patient_id : 0;
    if(patient_id){
      addPatientFollowUpAppointments(patient_id, folowUpAppointments);
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