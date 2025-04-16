
import Page_comp from "../composants/pagecomposer.js";


function getTotalQuestions() {
    let questions = JSON.parse(localStorage.getItem("questions")) || [];
    return questions.length;
}

// Utilisation :
let total = getTotalQuestions();
console.log("Nombre total de questions :", total);


export default class Resultat extends Page_comp {
    async render() {
        
        return Page_comp.renderPage(() => `

<section>    
    <div class="score-box">
        Oeuf total : <span id="scoreDisplay">${total}/10</span>
    </div>

    <div class="score-box">
        point total : <span id="scoreDisplay">-/10</span>
    </div>

 
    </section>

    `);
    }
    
}