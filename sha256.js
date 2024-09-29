const crypto = require('crypto');

function calculateSHA256(data) {
    const hash = crypto.createHash('sha256');
    hash.update(data);
    return hash.digest('hex');
}

const data1 = 'PSE2023';
const data2 = 'PSE2024';
const hash1 = calculateSHA256(data1);
const hash2 = calculateSHA256(data2);
console.log(`input ${data1} -> SHA-256 hash: ${hash1}`);
console.log(`input ${data2} -> SHA-256 hash: ${hash2}`);
