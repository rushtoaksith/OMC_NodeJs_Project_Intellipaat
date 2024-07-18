const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
  res.sendFile('index.html', { root: './views' });
});

// API route example
router.post('/api/submit', (req, res) => {
  const { name, email, phone, address, dob } = req.body;
  
  // Process data (e.g., save to database)
  console.log('Form data received:', { name, email, phone, address, dob });
  
  res.json({ status: 'success', message: 'Data submitted successfully' });
});

module.exports = router;

