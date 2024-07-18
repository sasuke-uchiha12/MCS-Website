const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const eventsRouter = require('./routes/events');
const authRouter = require('./routes/auth');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/MSC_admin', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/events', eventsRouter);
app.use('/auth', authRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
