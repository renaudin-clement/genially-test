import Page_comp from "../composants/pagecomposer.js";

export default class Ha extends Page_comp {
    async render() {
      
        return Page_comp.renderPage(() => `
        <h1> Run !! </h1>
    `);
    }
}