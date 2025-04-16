
import Page_comp from "../composants/pagecomposer.js";
import getTotalQuestions from "../../utils/Scorestotal.js";



export default class Resultat extends Page_comp {

    
    async render() {
        let total = getTotalQuestions();

        if(total == 10){
            window.location.href = "genially";
        }

        console.log("Nombre total de questions :", total);
        return Page_comp.renderPage(() => `

                <section>    
                    <div class="score-box">
                        Oeuf total : <span id="scoreDisplay">${total}/10</span>
                    </div>

                </section>

    `);

    /*
    <div class="score-box">
        point total : <span id="scoreDisplay">-/10</span>
    </div>
    */
    }
    
}