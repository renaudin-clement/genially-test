import Page_comp from "../composants/pagecomposer.js";

export default class Home extends Page_comp {
  async render() {
    // Incrémentation du compteur de visites
    let compteur = localStorage.getItem("visitCounter");
    if (compteur === null) {
      compteur = 1;
    } else {
      compteur = parseInt(compteur) + 1;
    }
    localStorage.setItem("visitCounter", compteur);

    // Affichage de la page
    return Page_comp.renderPage(() => `
      <section class="main-content">
        <p>Bienvenue sur la page d'accueil !</p>
        <p>Tu es venu ici <strong>${compteur}</strong> fois.</p>
      </section>
    `);
  }
}