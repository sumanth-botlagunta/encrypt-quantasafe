# My Quantum-Safe Package

This package provides quantum-safe encryption and password hashing functions in JavaScript. It also includes a function to decode a user's date of birth string into day, month, and year integers.

## Installation

```bash
npm install encrypt-quantasafe
```

## Usage

## quantum-safe encryption

To encrypt a message using the quantum-safe encryption algorithm, you can use the _quantumSafeEncrypt_ function:

```javascript
const { quantumSafeEncrypt } = require('encrypt-quantasafe');

const message = 'Hello, world!';
const key = 'mysecretkey';

const encryptedMessage = quantumSafeEncrypt(message, key);

console.log(encryptedMessage);
```

## quantum-safe decryption

To decrypt an encrypted message using the quantum-safe encryption algorithm, you can use the _quantumSafeDecrypt_ function:

```javascript
const { quantumSafeDecrypt } = require('encrypt-quantasafe');

const encryptedMessage = '...'; // Insert encrypted message here
const key = 'mysecretkey';

const decryptedMessage = quantumSafeDecrypt(encryptedMessage, key);

console.log(decryptedMessage);
```

## password hashing

To hash a password using the SHA-256 hashing algorithm, you can use the _hashPassword_ function:

```javascript
const { hashPassword } = require('encrypt-quantasafe');

const password = 'mypassword';

const hashedPassword = hashPassword(password);

console.log(hashedPassword);
```
