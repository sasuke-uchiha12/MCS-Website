const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
const authenticateToken = require('../middleware/authenticateToken');

// Get all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new event
router.post('/', authenticateToken, async (req, res) => {
  const event = new Event({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    category: req.body.category,
    date: req.body.date
  });

  try {
    const newEvent = await event.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update an event
// router.patch('/:id', authenticateToken, async (req, res) => {
//   try {
//     const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(updatedEvent);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });
// PUT request to update an event
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!event) {
      return res.status(404).send({ error: 'Event not found' });
    }
    res.json(event);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// Delete an event
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: 'Event deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
