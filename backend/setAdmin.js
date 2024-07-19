const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('dotenv').config();

const User = require('./models/User');

const username = 'admin';
const password = 'sasuke123'; // Change this to the desired admin password

const setAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected');

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username: username,
      password: hashedPassword
    });

    await user.save();
    console.log('Admin user created');
    mongoose.disconnect();
  } catch (err) {
    console.error('Error setting admin user:', err);
  }
};

setAdmin();
