import Page_comp from "../composants/pagecomposer.js";

export default class Home extends Page_comp {
  async render() {

    // Affichage de la page
    return Page_comp.renderPage(() => `
      <section class="main-content">
        <p>Bienvenue sur la page d'accueil !</p>
      </section>
    `);
  }
}