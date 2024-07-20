const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST request to save contact message
router.post('/', async (req, res) => {
  const { name, subject, email, message } = req.body;

  const newContact = new Contact({
    name,
    subject,
    email,
    message
  });

  try {
    const savedContact = await newContact.save();
    res.status(200).send({ message: 'Message saved successfully', contact: savedContact });
  } catch (error) {
    res.status(500).send({ message: 'Error saving message', error });
  }
});

// GET request to fetch all contact messages
router.get('/messages', async (req, res) => {
  try {
    const messages = await Contact.find();
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
