import Page_comp from "../composants/pagecomposer.js";

export default class Errors extends Page_comp {
    async render() {
      
        return Page_comp.renderPage(() => `
      <section class="main-content">
        <p> help </p>
      </section>
    `);
    }
}