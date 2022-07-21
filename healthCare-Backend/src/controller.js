const pool = require('../db');
const queries = require('./queries');

const getPatient = (req, res) => {
  try{
    pool.query(queries.getPatient, (error, result) => {
      if (error) throw error;
      const allPatient = [];
      result.rows.forEach(patient => {
        const { patient_id, mothername, babyname, babydob, address, email, phone, babygender} = patient;
        allPatient.push({
          patient_id,
          motherName: mothername,
          babyName: babyname,
          babyDOB: babydob,
          address,
          email,
          phone,
          babyGender: babygender,
        });
      });
      res.status(200).json(allPatient);
    })
  } catch(err) {
    console.log('error', err);
    res.status(500);
  }

};

const getPatientById = (req, res) => {
  try {
    const patient_id = req.params.patient_id;
    pool.query(queries.getPatientById, [patient_id], (error, result) => {
      if (error) throw error;
      const {pfollowupappointment, childfollowupappointment, dateofservice, vitalsigns,
        smokestatus, isbreastfeeding, feedlength, feedfrequency, supplimentformula,
        feedingcomfort, isnipplecracked, birthcontrol, birthcontrolassess,
        relationwithbaby, housememberstatus, fatherstatus,
        safety, unsaferelationstatus, resourcestatus, depressionscreening, contraceptionmethod, peripheralbloodglucose,
        doctorappointment, carseatsafety, immunizationschedule, breastfeeding,
        infantsafety, familyplanning, checkups, details, mothername, babyname, babydob, address, email, phone, babygender} = result.rows[0];
      const response = {
        patientBasicInfo:{
          patient_id,
          motherName: mothername,
          babyName: babyname,
          babyDOB: babydob,
          address,
          email,
          phone,
          babyGender: babygender,
        },
        patientVisit: {
          dateOfService: dateofservice,
          vitalSigns: vitalsigns,
          smokeStatus: smokestatus,
        },
        patientBreastFeeding: {
          isBreastfeeding: isbreastfeeding,
          feedLength: feedlength,
          feedFrequency: feedfrequency,
          supplimentFormula: supplimentformula,
          feedingComfort: feedingcomfort,
          isNippleCracked: isnipplecracked,
        },
        patientSafeSpacing: {
          birthControl: birthcontrol,
          birthControlAssess: birthcontrolassess,
        },
        patientPsychoSocialAssess: {
          relationWithBaby: relationwithbaby,
          houseMemberStatus: housememberstatus,
          fatherStatus: fatherstatus,
          safety,
          unsafeRelationStatus: unsaferelationstatus,
          resourceStatus: resourcestatus,
        },
        patientEducationalMaterial: {
          depressionScreening: depressionscreening,
          contraceptionMethod: contraceptionmethod,
          peripheralBloodGlucose: peripheralbloodglucose,
          doctorAppointment: doctorappointment,
          carSeatSafety: carseatsafety,
          immunizationSchedule: immunizationschedule,
          breastFeeding: breastfeeding,
          infantSafety: infantsafety,
          familyPlanning: familyplanning,
          checkups,
          details,
        },
        patientFollowUpAppointments: {
          pFollowupAppointment: pfollowupappointment,
          childFollowupAppointment: childfollowupappointment,
        },
      }
      res.status(200).json(response);
    })
  } catch (err) {
    console.log('error', err);
    res.status(500);
  }
};

const addPatientFollowUpAppointments = (patient_id, patientFollowUpAppointments) => {
  const {pFollowupAppointment, childFollowupAppointment} = patientFollowUpAppointments;

  pool.query(queries.addPatientFollowUpAppointments, [patient_id, pFollowupAppointment, childFollowupAppointment], (error, result) => {
    if (error) throw error;
    return result;
  });
};

const addPatientVisit = (patient_id, patientVisit) => {
  const {dateOfService, vitalSigns, smokeStatus} = patientVisit;

  pool.query(queries.addPatientVisit, [patient_id, dateOfService, vitalSigns, smokeStatus], (error, result) => {
    if (error) throw error;
    return result;
  });
};

const addPatientBreastFeeding = (patient_id, patientBreastFeeding) => {

  const {isBreastfeeding, feedLength, feedFrequency, supplimentFormula,
    feedingComfort, isNippleCracked} = patientBreastFeeding;

  pool.query(queries.addPatientBreastFeeding, [patient_id, isBreastfeeding, feedLength,
    feedFrequency, supplimentFormula, feedingComfort, isNippleCracked], (error, result) => {
      if (error) throw error;
      return result;
  });
};

const addPatientSafeSpacing = (patient_id, patientSafeSpacing) => {
  const {birthControl, birthControlAssess} = patientSafeSpacing;

  pool.query(queries.addPatientSafeSpacing, [patient_id, birthControl, birthControlAssess], (error, result) => {
    if (error) throw error;
    return result;
  });
};

const addPatientPsychoSocialAssess = (patient_id, patientPsychoSocialAssess) => {
  const {relationWithBaby, houseMemberStatus, fatherStatus,
    safety, unsafeRelationStatus, resourceStatus} = patientPsychoSocialAssess;

  pool.query(queries.addPatientPsychoSocialAssess, [patient_id, relationWithBaby, houseMemberStatus, fatherStatus,
    safety, unsafeRelationStatus, resourceStatus], (error, result) => {
      if (error) throw error;
      return result;
  });
};

const addPatientEducationalMaterial = (patient_id, patientEducationalMaterial) => {
  const {depressionScreening, contraceptionMethod, peripheralBloodGlucose,
    doctorAppointment, carSeatSafety, immunizationSchedule, breastFeeding,
    infantSafety, familyPlanning, checkups, details} = patientEducationalMaterial;

  pool.query(queries.addPatientEducationalMaterial, [patient_id, depressionScreening, contraceptionMethod, peripheralBloodGlucose,
    doctorAppointment, carSeatSafety, immunizationSchedule, breastFeeding,
    infantSafety, familyPlanning, checkups, details], (error, result) => {
      if (error) throw error;
      return result;
  });
};

const addPatient = async(req, res) => {
  try{
    const {patientBasicInfo:{motherName, babyName, babyDOB, address, email, phone, babyGender},
      patientFollowUpAppointments, patientVisit, patientBreastFeeding, patientSafeSpacing,
      patientPsychoSocialAssess, patientEducationalMaterial} = req.body;

    //TODO: write middleware to validate input.
    const patient = await pool.query(queries.addPatient, [motherName, babyName, babyDOB, address, email, phone, babyGender]);
    const patient_id = patient.rows.length ? patient.rows[0].patient_id : 0;
    if(patient_id){
      addPatientFollowUpAppointments(patient_id, patientFollowUpAppointments);
      addPatientVisit(patient_id, patientVisit);
      addPatientBreastFeeding(patient_id, patientBreastFeeding);
      addPatientSafeSpacing(patient_id, patientSafeSpacing);
      addPatientPsychoSocialAssess(patient_id, patientPsychoSocialAssess);
      addPatientEducationalMaterial(patient_id, patientEducationalMaterial);
    }

    res.json({
      patient: patient.rows[0],
    });
  } catch(err){
    console.log('error',err);
    res.status(500);
  }
};

const removePatient = async(req, res) => {
  try {
    const patient_id = req.params.patient_id;
    const deletedPatient = await pool.query(queries.removePatientBasicInfo, [patient_id]);
    if(deletedPatient.fields.length) {
      //TODO: Optimize this to single query to delete data from all tables.
      pool.query(queries.removePatientBreastFeeding, [patient_id]);
      pool.query(queries.removePatientEducationalMaterial, [patient_id]);
      pool.query(queries.removePatientFollowupAppointments, [patient_id]);
      pool.query(queries.removePatientPsychoSocialAssess, [patient_id]);
      pool.query(queries.removePatientSafeSpacing, [patient_id]);
      pool.query(queries.removepatientVisit, [patient_id]);
    }
    res.status(200).send(`Patient removed successfully`);
  } catch(err){
    console.log('error',err);
    res.status(500);
  }
};

const updatePatient = async (req, res) => {
  try{
    const patient_id = req.params.patient_id;
    const {patientBasicInfo:{motherName, babyName, babyDOB, address, email, phone, babyGender},
    patientFollowUpAppointments, patientVisit, patientBreastFeeding, patientSafeSpacing,
    patientPsychoSocialAssess, patientEducationalMaterial} = req.body;
    const {depressionScreening, contraceptionMethod, peripheralBloodGlucose,
      doctorAppointment, carSeatSafety, immunizationSchedule, breastFeeding,
      infantSafety, familyPlanning, checkups, details} = patientEducationalMaterial;
    const {relationWithBaby, houseMemberStatus, fatherStatus,
      safety, unsafeRelationStatus, resourceStatus} = patientPsychoSocialAssess;
    const {birthControl, birthControlAssess} = patientSafeSpacing;
    const {isBreastfeeding, feedLength, feedFrequency, supplimentFormula,
      feedingComfort, isNippleCracked} = patientBreastFeeding;
    const {dateOfService, vitalSigns, smokeStatus} = patientVisit;
    const {pFollowupAppointment, childFollowupAppointment} = patientFollowUpAppointments;

    //TODO: write middleware to validate input.
    const patient = await pool.query(queries.updatePatient, [motherName, babyName, babyDOB, address, email, phone, babyGender, patient_id]);
    const patientDetails = patient.rows.length ? patient.rows[0].patient_id : 0;
    if(patientDetails){
      pool.query(queries.updatePatientEducationalMaterial, [depressionScreening, contraceptionMethod, peripheralBloodGlucose,
        doctorAppointment, carSeatSafety, immunizationSchedule, breastFeeding,
        infantSafety, familyPlanning, checkups, details, patient_id]);

      pool.query(queries.updatePatientPsychoSocialAssess, [relationWithBaby, houseMemberStatus, fatherStatus,
        safety, unsafeRelationStatus, resourceStatus, patient_id]);

      pool.query(queries.updatePatientSafeSpacing, [birthControl, birthControlAssess, patient_id]);

      pool.query(queries.updatePatientBreastFeeding, [isBreastfeeding, feedLength,
        feedFrequency, supplimentFormula, feedingComfort, isNippleCracked, patient_id]);

      pool.query(queries.updatePatientVisit, [dateOfService, vitalSigns, smokeStatus, patient_id]);

      pool.query(queries.updatePatientFollowUpAppointments, [pFollowupAppointment, childFollowupAppointment, patient_id]);
    }
    res.status(200).send(`Record Updated.`)
  }catch(err){
    console.log('error', err);
    res.status(500);
  }
};

module.exports = {
  getPatient,
  addPatient,
  getPatientById,
  removePatient,
  updatePatient,
};