import * as openpgp from 'openpgp';

export async function initOpenPGP() {
    // Initialisation de l'OpenPGP worker
    await openpgp.initWorker({ path: 'openpgp.worker.js' });
}

// Fonction pour charger la clé privée
export async function loadPrivateKey(privateKeyArmored, passphrase) {
    const { keys: [privateKey] } = await openpgp.key.readArmored(privateKeyArmored);
    await privateKey.decrypt(passphrase);  // Déverrouiller la clé privée avec le passphrase
    return privateKey;
}

// Fonction pour chiffrer un message
export async function crypted(messageToEncrypt, publicKeyArmored, privateKey) {
    const { data: encrypted } = await openpgp.encrypt({
        message: openpgp.message.fromText(messageToEncrypt),
        publicKeys: (await openpgp.key.readArmored(publicKeyArmored)).keys,
        privateKeys: [privateKey]
    });
    return encrypted;
}

// Fonction pour déchiffrer un message
export async function decrypted(encryptedMessage, publicKeyArmored, privateKey) {
    const { data: decrypted } = await openpgp.decrypt({
        message: await openpgp.message.readArmored(encryptedMessage),
        publicKeys: (await openpgp.key.readArmored(publicKeyArmored)).keys,
        privateKeys: [privateKey]
    });
    return decrypted;
}