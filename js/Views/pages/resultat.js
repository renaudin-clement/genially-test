
import Page_comp from "../composants/pagecomposer.js";

export default class Resultat extends Page_comp {
    async render() {
        
        return Page_comp.renderPage(() => `

<section>    
    <div class="score-box">
        Oeuf total : <span id="scoreDisplay">-/10</span>
    </div>

    <div class="score-box">
        point total : <span id="scoreDisplay">-/10</span>
    </div>

 
    </section>

    `);
    }
    
}