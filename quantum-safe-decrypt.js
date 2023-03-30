const crypto = require('crypto');

function quantumSafeDecrypt(text, password) {
  const algorithm = 'aes-256-cbc';
  const key = crypto.scryptSync(password, 'salt', 32);
  const iv = Buffer.from(text.substring(0, 32), 'hex');
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(text.substring(32), 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

module.exports = { quantumSafeDecrypt };
