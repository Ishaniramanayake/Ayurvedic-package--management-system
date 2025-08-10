const doctorModel = require('../models/doctorModel');

exports.createDoctor = async (req, res) => {
  const { name, specialization, schedule, date, fees } = req.body;
 // const image = req.file ? req.file.filename : null;

  //if (!image) {
  //  return res.status(400).json({ success: false, message: 'Invalid image.' });
 // }

  const data = new doctorModel({
    name,
    specialization,
    schedule,
    date,
    fees,
   // image,
  });

  try {
    await data.save();
    res.json({ success: true, message: 'Doctor data saved successfully', data });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to save doctor data.' });
  }
};


exports.getDoctorData = async (req, res) => {
  try {
    const data = await doctorModel.find({});
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch doctor data.' });
  }
};




exports.updateDoctor = async (req, res) => {
  const { name, specialization, schedule, date, fees } = req.body;
  const id = req.params.id;

  try {
    const existingData = await doctorModel.findById(id);

    if (!existingData) {
      return res.status(404).json({ success: false, message: 'Doctor data not found.' });
    }

    let updatedData = {
      name,
      specialization,
      schedule,
      date,
      fees,
    };


    // Update the doctor data
    const data = await doctorModel.findByIdAndUpdate(id, updatedData, { new: true });

    res.json({ success: true, message: 'Doctor data updated successfully', data });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to update doctor data.', error: error.message });
  }
};
exports.deleteDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedData = await doctorModel.findOneAndDelete({ _id: id });

    if (!deletedData) {
      return res.status(404).json({ success: false, message: 'Doctor data not found.' });
    }

    res.json({ success: true, message: 'Doctor data deleted successfully', data: deletedData });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to delete doctor data.', error: error.message });
  }
};

