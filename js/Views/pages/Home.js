import Page_comp from "../composants/pagecomposer.js";

export default class Home extends Page_comp {
  
  async render() {
    localStorage.clear();
    console.log("clear all");
    // Affichage de la page
    return Page_comp.renderPage(() => `
      <section class="main-content">
        <p>Bienvenue sur la page d'accueil !</p>
      </section>
    `);
  }
}