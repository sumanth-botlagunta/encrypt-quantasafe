const { quantumSafeEncrypt } = require('./quantum-safe-encrypt');
const { quantumSafeDecrypt } = require('./quantum-safe-decrypt');
const { hashPassword } = require('./hash-password');

module.exports = {
  quantumSafeEncrypt,
  quantumSafeDecrypt,
  hashPassword,
};
