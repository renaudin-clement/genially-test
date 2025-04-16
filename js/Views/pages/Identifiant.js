
import Page_comp from "../composants/pagecomposer.js";

export default class Identifier extends Page_comp {
    async render() {
        
        return Page_comp.renderPage(() => `
        <input type="button" value="getidentifiant" />

        <label for="emailAddress">Adresse mail</label><br />
        <input
        id="emailAddress"
        type="email"
        placeholder="user@example.gov"
        list="defaultEmails"
        size="64"
        maxlength="256"
        />
        
    `);
    }
    
}