const express = require('express');
const router = express.Router();

const { encryptData, decryptData } = require('../utils/cryptoUtils');
const { generateKey } = require('../utils/keyManagment');

// Encrypt endpoint
router.post('/encrypt', (req, res) => {
    const { data } = req.body;
    // Generate a key
    const key = generateKey();
    // Encrypt the data using the generated key
    const encryptedData = encryptData(data, key);
    res.json({ encryptedData, key });
});

// Decrypt endpoint
router.post('/decrypt', (req, res) => {
    const { encryptedData, key } = req.body;
    // Decrypt the data using the provided key
    const decryptedData = decryptData(encryptedData, key);
    res.json({ decryptedData });
});



// Root endpoint
router.get('/', (req, res) => {
    res.send('Server is running!');
});

module.exports = router;
