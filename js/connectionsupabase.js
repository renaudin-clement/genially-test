// Importer le client Supabase
const { createClient } = require('@supabase/supabase-js');

// URL de ton projet et clé d'API (retrouvables dans la console Supabase)
const SUPABASE_URL = 'https://cjipxdtykivrxbcysuor.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqaXB4ZHR5a2l2cnhiY3lzdW9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3MDIwMjksImV4cCI6MjA2MDI3ODAyOX0.AUasaoc0LAIBgfb14YdiXcu-CcTEVfDfcfCCwDlyFV8';

// Créer une instance du client Supabase
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Exemple de requête : récupérer des données depuis une table 'users'
async function getUsers() {
    const { data, error } = await supabase
        .from('users') // le nom de ta table dans Supabase
        .select('*');

    if (error) {
        console.error('Erreur:', error);
        return;
    }

    console.log('Données récupérées:', data);
}

getUsers();



async function addUser() {
    const { data, error } = await supabase
        .from('users')
        .insert([
            { username: 'nouvelutilisateur', email: 'exemple@domaine.com' }
        ]);

    if (error) {
        console.error('Erreur lors de l\'ajout:', error);
        return;
    }

    console.log('Nouvel utilisateur ajouté:', data);
}

addUser();