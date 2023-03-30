const {
  quantumSafeEncrypt,
  quantumSafeDecrypt,
  hashPassword,
} = require('./index');

const username = 'myusername';
const password = 'mypassword';
const text = 'hello world';

const hashedPassword = hashPassword(password, username);
console.log('Hashed password:', hashedPassword);

const encryptedText = quantumSafeEncrypt(text, hashedPassword);
console.log('Encrypted text:', encryptedText);

const decryptedText = quantumSafeDecrypt(encryptedText, hashedPassword);
console.log('Decrypted text:', decryptedText);
