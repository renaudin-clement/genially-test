import Page_comp from "../composants/pagecomposer.js";

export default class Errors extends Page_comp {
    async render() {
      
        return Page_comp.renderPage(() => `
        <p> help </p>
    `);
    }
}