import mongoose from 'mongoose';

const Dokter = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  str: {
    type: String,
    required: true,
  },
  spesialis: {
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

export default mongoose.model('Dokters', Dokter);
