import Dokter from '../models/DokterModel.js';

export const getDokters = async (req, res) => {
  try {
    const dokters = await Dokter.find();
    res.json(dokters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getDokterById = async (req, res) => {
  try {
    const dokter = await Dokter.findById(req.params.id);
    res.json(dokter);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const saveDokter = async (req, res) => {
  const dokter = new Dokter(req.body);
  try {
    const inserteddokter = await dokter.save();
    res.status(201).json(inserteddokter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateDokter = async (req, res) => {
  try {
    const updateddokter = await Dokter.updateOne({ _id: req.params.id }, { $set: req.body });
    res.status(200).json(updateddokter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteDokter = async (req, res) => {
  try {
    const deleteddokter = await Dokter.deleteOne({ _id: req.params.id });
    res.status(200).json(deleteddokter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
