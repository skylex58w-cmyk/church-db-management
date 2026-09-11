const express = require('express');
const router = express.Router();

// Report endpoints
router.get('/members', (req, res) => {
  res.status(501).json({ message: 'Not implemented' });
});

router.get('/attendance', (req, res) => {
  res.status(501).json({ message: 'Not implemented' });
});

router.get('/giving', (req, res) => {
  res.status(501).json({ message: 'Not implemented' });
});

router.get('/ministries', (req, res) => {
  res.status(501).json({ message: 'Not implemented' });
});

// Export endpoints
router.get('/export/members', (req, res) => {
  res.status(501).json({ message: 'Not implemented' });
});

router.get('/export/attendance', (req, res) => {
  res.status(501).json({ message: 'Not implemented' });
});

router.get('/export/giving', (req, res) => {
  res.status(501).json({ message: 'Not implemented' });
});

module.exports = router;
