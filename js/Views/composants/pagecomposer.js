import HeaderBar from './Headbar.js';
import Footer from './footer.js';

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