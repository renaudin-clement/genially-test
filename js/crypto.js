/*
const { createHash } = require('crypto');

function hash(string) {
  return createHash('sha256').update(string).digest('hex');
}

// Fonction pour générer un SHA-256 hash en JavaScript
async function generateSHA256Hash(input) {
    const encoder = new TextEncoder();  // Encode l'entrée en bytes
    const data = encoder.encode(input);  // Convertit l'entrée en un tableau de bytes
    
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);  // Effectue le hachage SHA-256
    const hashArray = Array.from(new Uint8Array(hashBuffer));  // Convertit le buffer en tableau de bytes
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');  // Convertit les bytes en chaîne hexadécimale
    
    return hashHex;  // Renvoie le hash sous forme hexadécimale
  }
  
  // Exemple d'utilisation
  generateSHA256Hash('Hello, world!')
    .then(hash => console.log(hash));  





async function hash(string) {
    const utf8 = new TextEncoder().encode(string);
    const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
        .map((bytes) => bytes.toString(16).padStart(2, '0'))
        .join('');
    return hashHex;
    }

hash('foo').then((hex) => console.log(hex));
SHA-256 pas trop securiseret non possibiliter de reccuperation 
*/

PGP (Pretty Good Privacy) en js

