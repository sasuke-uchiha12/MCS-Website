const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const eventsRouter = require('./routes/events');
const authRouter = require('./routes/auth');
const uploadRouter = require('./routes/upload');
const contactRouter = require('./routes/contact');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/events', eventsRouter);
app.use('/auth', authRouter);
app.use('/upload', uploadRouter);
app.use('/contact', contactRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
