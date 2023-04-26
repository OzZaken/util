# [bcrypt](https://www.npmjs.com/package/cryptr)
bcrypt is a widely-used algorithm for secure password hashing. It is a popular choice for password storage because it is designed to be slow and computationally intensive, making it difficult for attackers to crack passwords through brute force or dictionary attacks. In this guide, we will explore the best practices for using bcrypt to securely store passwords.
1. Use a Strong Password Policy
Before even discussing how to store passwords securely, it is important to emphasize the importance of a strong password policy. A strong password policy includes requirements for password length, complexity, and expiration. A good password policy should require users to choose a password that is at least 12 characters long, includes uppercase and lowercase letters, numbers, and special characters, and expires every 90 days.

2. Use a Salt
A salt is a random value added to a password before it is hashed. Salting passwords can help protect against dictionary and rainbow table attacks. bcrypt automatically generates a random salt and adds it to the hash output.

3. Use a High Work Factor
The work factor determines how many rounds of hashing are performed on the password. A higher work factor increases the time it takes to generate a hash, making it more difficult for an attacker to guess the password. A work factor of at least 12 is recommended, but a work factor of 14 or higher is even more secure.

4. Use a Cryptographically Secure Random Number Generator
The salt and work factor should be generated using a cryptographically secure random number generator to ensure that they are truly random and unpredictable. A good random number generator should produce values that are not only unpredictable, but also statistically independent.

5. Test for Timing Attacks
A timing attack is a type of attack where an attacker measures the time it takes to compute a hash and uses that information to guess the password. This can be mitigated by using a constant-time comparison function when comparing the password hash to a user inputted password.

6. Store Passwords in a Secure Database
It is important to store password hashes in a secure database with appropriate access controls. Password hashes should never be stored in plain text or in an easily reversible format. The database should also be protected against SQL injection attacks.

7. Implement Password Reset Policies
It is important to have policies in place for resetting passwords in case they are forgotten or compromised. Password reset policies should require multi-factor authentication and

### simple
````javascript
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey');

const encryptedString = cryptr.encrypt('bacon');
const decryptedString = cryptr.decrypt(encryptedString);

console.log(encryptedString); // 2a3260f5ac4754b8ee3021ad413ddbc11f04138d01fe0c5889a0dd7b4a97e342a4f43bb43f3c83033626a76f7ace2479705ec7579e4c151f2e2196455be09b29bfc9055f82cdc92a1fe735825af1f75cfb9c94ad765c06a8abe9668fca5c42d45a7ec233f0
console.log(decryptedString); // bacon
````
### with options

```javascript
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey', { pbkdf2Iterations: 10000, saltLength: 10 });

const encryptedString = cryptr.encrypt('bacon');
const decryptedString = cryptr.decrypt(encryptedString);

console.log(encryptedString); // 33b2c319908e72e899db0cad10dd1e24a999cd4922d64c6fbe261020f97ed4fdfe07124268df34bae00ee09f9d91a7
console.log(decryptedString); // bacon
```