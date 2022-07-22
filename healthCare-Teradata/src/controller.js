const queries = require('./queries');
const { setupAndRun } = require('./helpers');

const cursor = setupAndRun();

const getPatient = (req, res) => {
    queries.getPatient(cursor);
};

const getPatientById = (req, res) => {

};


const addPatient = async (req, res) => {
    queries.addPatient(req, res, cursor);
};

module.exports = {
    getPatient,
    addPatient,
    getPatientById,
};