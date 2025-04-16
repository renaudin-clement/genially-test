import Page_comp from "../composants/pagecomposer.js";

export default class OeufDejaTrouver extends Page_comp {
  async render() {

    // Affichage de la page
    return Page_comp.renderPage(() => `
      <section class="main-content">
        <p>Oeuf deja trouver</p>
      </section>
    `);
  }
}