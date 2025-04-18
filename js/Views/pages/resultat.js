
import Page_comp from "../composants/pagecomposer.js";
import getTotalQuestions from "../../utils/Scorestotal.js";



export default class Resultat extends Page_comp {

    
    async render() {
        let total = getTotalQuestions();

        console.log("Nombre total de questions :", total);
        return Page_comp.renderPage(() => `
                    <h3>Bravo, tu as trouvé tous ces œufs !</h3>
                    <div class="score-box">
                        🐰  Oeuf total : <span id="scoreDisplay">${total}/10 🥚</span>
                    </div>
                    <img class = "oeufquigigotte"    src="../../asset/sunflower-easter-egg-watercolor-png-5692308.png" alt="oeufquigigotte">


    `);

    /*
    <div class="score-box">
        point total : <span id="scoreDisplay">-/10</span>
    </div>
    */
    }
    
}