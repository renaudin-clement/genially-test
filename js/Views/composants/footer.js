export default class Footer {
    static async render() {
        return `
        <footer>
         <div class="footer-content">
            <img src="../../asset/lapin.png" alt="poulet">
            <ul>
                <li> <a href="/#/question">Question</a> </li>
                <li> <a href="/#/resultat">Resultat</a> </li>    
            </ul>
            <img src="../../asset/lapin.png" alt="poulet">
         </div>
        </footer>
        `;
    }
}

