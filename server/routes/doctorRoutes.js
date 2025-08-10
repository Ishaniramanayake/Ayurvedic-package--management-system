const express = require('express');
//const multer = require('multer');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

router.post('/create', doctorController.createDoctor);
router.get('/getData', doctorController.getDoctorData);
router.put('/update/:id', doctorController.updateDoctor);
router.delete('/delete/:id', doctorController.deleteDoctor);





module.exports = router;
