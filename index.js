import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
const uri = "mongodb+srv://krisnaharsya:sptr1234@cluster0.2dlsh5a.mongodb.net/fullstack1"
import cookieParser from 'cookie-parser';
import { getDokters, getDokterById, saveDokter, updateDokter, deleteDokter } from './controllers/DokterController.js';
import { getPasiens, getPasienById, savePasien, updatePasien, deletePasien } from './controllers/PasienController.js';
import { registerUser, login } from './controllers/UserController.js';


const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server after successfully connecting to the database
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });

// Routes
app.get('/dokters', getDokters);
app.get('/dokters/:id', getDokterById);
app.post('/dokters', saveDokter);
app.patch('/dokters/:id', updateDokter);
app.delete('/dokters/:id', deleteDokter);
app.get('/pasiens', getPasiens);
app.get('/pasiens/:id', getPasienById);
app.post('/pasiens', savePasien);
app.patch('/pasiens/:id', updatePasien);
app.delete('/pasiens/:id', deletePasien);
app.post('/register', registerUser);
app.post('/login', login);

