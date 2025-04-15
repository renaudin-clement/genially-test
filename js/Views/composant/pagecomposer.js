import HeaderBar from './HeaderBar.js';
import Footer from './Footer.js';

export default class Page_comp {
    async render(){;};
    static async renderPage(contentCallback) {
        return `
          ${await HeaderBar.render()}

          
          <section class ="centrer">
                ${await contentCallback()}
          </section>

          ${await Footer.render()}
        `;
      }
}