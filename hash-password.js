const crypto = require('crypto');

function hashPassword(password, username) {
  const hash = crypto.createHash('sha256');
  hash.update(username + password);
  return hash.digest('hex');
}

module.exports = { hashPassword };
