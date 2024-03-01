const crypto = require('crypto');

const generateKey = () => {
    return crypto.randomBytes(32).toString('hex');
}

module.exports = { generateKey };
