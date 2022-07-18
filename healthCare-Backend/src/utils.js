const pool = require('../db');
const queries = require('./queries');

const addPatientFollowUpAppointments = (patient_id, folowUpAppointments) => {
  const {pFollowupAppointment, childFollowupAppointment} = folowUpAppointments;

  pool.query(queries.addPatientFollowUpAppointments, [patient_id, pFollowupAppointment, childFollowupAppointment], (error, result) => {
    if (error) throw error;
    return result;
  });

};

module.exports = {
  addPatientFollowUpAppointments,
};