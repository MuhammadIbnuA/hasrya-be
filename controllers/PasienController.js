import Pasien from '../models/PasienModel.js';

export const getPasiens = async (req, res) => {
  try {
    const pasiens = await Pasien.find();
    res.json(pasiens);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPasienById = async (req, res) => {
  try {
    const pasien = await Pasien.findById(req.params.id);
    res.json(pasien);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const savePasien = async (req, res) => {
  const pasien = new Pasien(req.body);
  try {
    const insertedpasien = await pasien.save();
    res.status(201).json(insertedpasien);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updatePasien = async (req, res) => {
  try {
    const updatedpasien = await Pasien.updateOne({ _id: req.params.id }, { $set: req.body });
    res.status(200).json(updatedpasien);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deletePasien = async (req, res) => {
  try {
    const deletedpasien = await Pasien.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedpasien);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
