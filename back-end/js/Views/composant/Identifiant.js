export default class Idenrifiant {
    static async render() {
        return `
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
        `;
    }
}