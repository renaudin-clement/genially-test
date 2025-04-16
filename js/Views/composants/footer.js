export default class Footer {
    static async render() {
        return `
        <footer>
            <img src="../../asset/lapin.png" alt="poulet">
            <ul>
                <li> <a href="/#/home">Home</a> </li>
                <li> <a href="/#/question">Question</a> </li>
                <li> <a href="/#/resultat">Resultat</a> </li>    
            </ul>
            <img src="../../asset/lapin.png" alt="poulet">
        </footer>
        `;
    }
}

