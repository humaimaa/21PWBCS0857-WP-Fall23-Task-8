// passwordStrengthRoutes.js
const express = require('express');
const router = express.Router();
const passwordStrengthController = require('../controllers/passwordStrengthController');

// Endpoint to check password strength
router.post('/check-password', passwordStrengthController.checkPasswordStrength);

// Export the router
module.exports = router;
