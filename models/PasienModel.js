import mongoose from 'mongoose';

const Pasien = mongoose.Schema({
  nik: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  alamat: {
    type: String,
    required: true,
  },
  telp: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Pasiens', Pasien);
