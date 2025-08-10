const Package = require('../models/PackageModel');

exports.addPackageAndDoctor = async (req, res) => {
  try {
    const { packageName, doctorName } = req.body;
    const newPackage = new Package({ packageName });
    const newDoctor = new Doctor({ doctorName });
    const data = await PackageModel.find({});

    await newPackage.save();
    await newDoctor.save();
    
    res.json({ message: 'Package and Doctor added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while adding the package and doctor' });
  }
};
exports.getPackageAndDoctor = async (req, res) => {
  try {
    const data = await Package.find({}); // Use the correct model name
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch packages and doctor.' });
  }
};

