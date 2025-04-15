import Page_comp from "../componants/Page_comp.js";

export default class Home extends Page_comp {
    async render() {
      
        return Page_comp.renderPage(() => `
      <section class="main-content">
        <p> test </p>

      </section>
    `);
    }
}