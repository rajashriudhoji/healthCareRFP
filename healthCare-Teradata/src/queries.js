const getPatient = (cursor) => {
    const sQuery = 'SELECT * FROM patientbasicinfo';

    try {
        cursor.execute(sQuery);
        const fetchedRows = cursor.fetchall();
        console.log("Fetched Rows Count: " + fetchedRows.length);
    } catch (error) {
        if (!anIgnoreError(error)) {
            throw error;
        }
    }
};

const addPatient = (req, res, cursor) => {
    try {
        const iQuery = 'INSERT patientbasicinfo values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        const values = [motherName, babyName, babyDOB, address, email, phone, babyGender,
            patientFollowUpAppointments, patientVisit, patientBreastFeeding, patientSafeSpacing,
            patientPsychoSocialAssess, patientEducationalMaterial] = req.body;

        cursor.execute(iQuery, values);
    } catch (error) {
        if (!anIgnoreError(error)) {
            throw error;
        }
    }
}

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
