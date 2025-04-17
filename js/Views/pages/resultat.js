
import Page_comp from "../composants/pagecomposer.js";
import getTotalQuestions from "../../utils/Scorestotal.js";



export default class Resultat extends Page_comp {

    
    async render() {
        let total = getTotalQuestions();

        console.log("Nombre total de questions :", total);
        return Page_comp.renderPage(() => `
   
                    <div class="score-box">
                        Oeuf total : <span id="scoreDisplay">${total}/10</span>
                    </div>


    `);

    /*
    <div class="score-box">
        point total : <span id="scoreDisplay">-/10</span>
    </div>
    */
    }
    
}