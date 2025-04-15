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

// PGP (Pretty Good Privacy) en js

import * as openpgp from 'openpgp';


(async () => {
  await openpgp.initWorker({ path: 'openpgp.worker.js' }); // set the relative web worker path

  const publicKeyArmored = `-----BEGIN PGP PUBLIC KEY BLOCK-----

  mQENBGf+TUUBCAC3wX4ais/FCavelN0QtALkTNTeLyrYjG0sXEmADcEaw8K870jG
  p5f8iiYL1ttQfLt4Rr6HPRdL5WtHG3l4Z3Rp5ixV/h97ba31hRC3LKhIMWgPOg67
  nJ5QNqp9CnjexR3iBUblF74JzlsJjMp/2Z/ovADeFEru6IUhZKXqy/VPFg5I/TgD
  mkzijyfbtUTB5Ensuj5SyWWnr2B3zS+GP2MsSZ0VTnMjYNv1QfL7ecj8Hp7bJXhN
  +w4tVFIIWFVi3WhICJ40ri54FfDvjESXPKO3Oyq4FSKTJ7sCmE3lUqCKBfg6t7CA
  rR1iJ1PFScPSN43ODv3VIcV8GgtC+qIAQPrPABEBAAG0RXJlbmF1ZGluICh0ZXN0
  IHBvdXIgc2VjdXJpc2VyIG1haWxzKSA8cHJvLnJlbmF1ZGluLmNsZW1lbnRAZ21h
  aWwuY29tPokBUQQTAQoAOxYhBNmtkq0/9jXbYha64vQpwcIbkcbeBQJn/k1FAhsD
  BQsJCAcCAiICBhUKCQgLAgQWAgMBAh4HAheAAAoJEPQpwcIbkcbeKUkH/jgiOJJn
  zbzdO5dOpJMS2xecXdyK6bbtHoYBgmADlw4K3p/nWagLmIlmQ2rTuIGHpZPBNyWf
  H+g3rSjyvs0aWgosWB+k58kAgTQe5E8YQ9JgIHVHZawDo1l/3DVlu7iAaTal/y2f
  n4Sxqh/HObYTbhan8oN7RhSTYddNq02XyWhg+SlzOnGt2Z8ECu4VbMYnnSIPk8EQ
  S0a0P7dH6bS7RnYnOodwX7X+p3k3f3gN6Es7h4/vnMc/hOA8Wet/2dXpYHLRthDK
  tTH7O/NS1TyCwye4ekZJFlCdi5MgUen8LyhTb1hiid31c7660LS+zPG9d2aFk4l/
  qsD+XukaRDmBOoq5AQ0EZ/5NRQEIAPLQxOki7zDmJhEGAv/42C/1tMTd+UxX3B1k
  IIh3FKYI3IGhpkKEz7VthIDp6c2WkcCmFMXSyRrsdmpJE9XIkPlqiZAKx+6FDaty
  suOslg/TZORJfz9+3GAh5hqF3XrnLy/EC8dCQO7sABGhwqsv/A53e+N2lKIgL0rJ
  iIGuew8vGdIzKG5Wrgca2CoqHp5HPo82Pz7k3eE015F281j3+UTVQEcWA56Y0xO8
  qkLngNxY8w4DbMRPpzniQy4gINkrS60Oa/nxYTawgu/YpHT2QuJsMgVKo1mV43dp
  vHXP6D+Mf3iR0YeAvuec7xwiznn+kZIMvZ9794VObdBoXXhZ+xUAEQEAAYkBNgQY
  AQoAIBYhBNmtkq0/9jXbYha64vQpwcIbkcbeBQJn/k1FAhsMAAoJEPQpwcIbkcbe
  nP8H/AwmSnoB0I6jV9kpIXkzrauwbvSAWsQOR7h93twCm9jAhb4seZy8wGZmMz8U
  zfko9fdSmdGej+hZ9f2JFjht+wQgSDNAq213jre7pQlox4xHrm+v6cHyWQ2EAGLQ
  6cgIJXDibNrJbIwK6dfwKsWGnHPd3DQfQUNthnRz4WU3wTGbpRDkWXsy2/QKmu+k
  1UcABzPZr84Nk+NX8GhvBZ3kX+nItnNI+M5aRRhY87a9GUrm3gKnGpYIH+c2h9Wu
  yOp80e7IZkWsUeEda/87H1zWvwFJYHEqOeJD4Zue02H4KU+/oam4/VV/hsUblZkP
  txJW5rkV2GHw5rMSXgmypuNnSi0=
  =uMOR
  -----END PGP PUBLIC KEY BLOCK-----`;
  
  //a rempalcer avec public dans key.txt
      const privateKeyArmored = `-----BEGIN PGP PRIVATE KEY BLOCK-----
  
  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
  mQ+3ElbmuRXYYfDmsxJeCbKm42dKLQ==
  =5Utf
  -----END PGP PRIVATE KEY BLOCK-----`; // encrypted private key

  const passphrase = `Gibbon72?`; // Passphrase pour déverrouiller la clé privée

  // Lecture et déchiffrement de la clé privée
  const { keys: [privateKey] } = await openpgp.key.readArmored(privateKeyArmored);
  await privateKey.decrypt(passphrase);  // Déverrouillage de la clé privée

  // Fonction pour chiffrer un message
  async function crypted(messageToEncrypt) {
      const { data: encrypted } = await openpgp.encrypt({
          message: openpgp.message.fromText(messageToEncrypt),          // Message à chiffrer
          publicKeys: (await openpgp.key.readArmored(publicKeyArmored)).keys, // Clé publique pour le chiffrement
          privateKeys: [privateKey]                                     // Clé privée pour la signature (si besoin)
      });

      console.log("Message chiffré : ", encrypted);
      return encrypted;  // Retourne le message chiffré pour une utilisation ultérieure
  }

  // Fonction pour déchiffrer un message
  async function decrypted(encryptedMessage) {
      const { data: decrypted } = await openpgp.decrypt({
          message: await openpgp.message.readArmored(encryptedMessage),  // Message chiffré à déchiffrer
          publicKeys: (await openpgp.key.readArmored(publicKeyArmored)).keys, // Pour la vérification (facultatif)
          privateKeys: [privateKey]                                      // Clé privée pour déchiffrer
      });

      console.log("Message déchiffré : ", decrypted); // Affiche le message déchiffré
  }

  // Exemple d'utilisation
  const message = "Ceci est un message secret.";
  const encryptedMessage = await crypted(message);  // Chiffre le message
  await decrypted(encryptedMessage);  // Déchiffre le message
})();