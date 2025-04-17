import HeaderBar from './Headbar.js';
import Footer from './footer.js';

export default class Page_comp {
    async render(){;};
    static async renderPage(contentCallback) {
        return `
          ${await HeaderBar.render()}

          
          <main class ="centrer">
                ${await contentCallback()}
          </main>

          ${await Footer.render()}
        `;
      }
}