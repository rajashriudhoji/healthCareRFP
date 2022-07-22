const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getPatient);
router.post('/', controller.addPatient);
router.get('/:patient_id', controller.getPatientById);

module.exports = router;