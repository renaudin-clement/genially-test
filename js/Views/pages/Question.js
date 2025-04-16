import Page_comp from "../composants/pagecomposer.js";
import getTotalQuestions from "../../utils/Scorestotal.js";

// Dictionnaire des réponses par ID
let reponseQuestionParId = new Map([
  ["Y0XD04dQY8", "phrase 1"],
  ["4LsA2_Oku1", "phrase 2"],
  ["xtqpP5Bds1", "phrase 3"],
  ["aoUIwJCVtr", "phrase 4"],
  ["pfUnU_fEsR", "phrase 5"],
  ["lIoQ9plaaF", "phrase 6"],
  ["6yVjOqskO~", "phrase 7"],
  ["Pu6Cog495.", "phrase 8"],
  ["Ii4NHw5aWd", "phrase 9"],
  ["fNKzp-kTNE", "phrase 10"]
]);





export default class Question extends Page_comp {
  async render() {
    
    const queryString = window.location.hash.split("?")[1];
    let reponse = "Comment on en est arriver la ?";
    let id = null;
    let score = null;
    let total = 0;

    if (queryString) {
      const params = new URLSearchParams(queryString);
      id = params.get("id");
      score = params.get("score");

      total = getTotalQuestions();

      if(total == 10){
        window.location.href = "genially";
      }

      if (id && reponseQuestionParId.has(id)) {
        reponse = reponseQuestionParId.get(id);

        // Récupérer la liste existante ou créer une nouvelle
        let questions = JSON.parse(localStorage.getItem("questions")) || [];
        console.log(questions);

        let dejaVisite = questions.some(q => q.id === id);

        if (questions.length === 0 || !dejaVisite ){
        console.log("existe?");
        // Ajouter la question actuelle dans le localStorage
        questions.push({
          id: id,
          texte: reponse,
          //score: parseInt(score) || 0,
        });

        // Sauvegarder
        localStorage.setItem("questions", JSON.stringify(questions));

        total = getTotalQuestions();

        if(total == 10){
          window.location.href = "genially";
        }
        
        } else{
          window.location.href = "https://zoodefis.netlify.app/#/dejatrouver";
          console.log(localStorage);
          

        }


      } else if (id) {
        reponse = `Cette Oeuf n'existe pas !`;
      }
    }

      if (total === 0) {
        return Page_comp.renderPage(() => `
          <section class="main-content">
            <h2>Réponse :</h2>
            <p>${reponse}</p>
          </section>
        `);
      } 
      
      else {
        return Page_comp.renderPage(() => `
          <section class="main-content">
            <h2>Réponse :</h2>
            <p>${reponse}</p>
            <div class="score-box">
                Oeuf total : <span id="scoreDisplay">${total}/10</span>
            </div>
            </section>
        `);

      }

    }
  }


//avec score 
// retour = https://zoodefis.netlify.app/#/question?id=5&score=3

//sans score 


//  https://zoodefis.netlify.app/#/question?id=Y0XD04dQY8
//  https://zoodefis.netlify.app/#/question?id=4LsA2_Oku1
//  https://zoodefis.netlify.app/#/question?id=xtqpP5Bds1
//  https://zoodefis.netlify.app/#/question?id=aoUIwJCVtr
//  https://zoodefis.netlify.app/#/question?id=pfUnU_fEsR
//  https://zoodefis.netlify.app/#/question?id=lIoQ9plaaF
//  https://zoodefis.netlify.app/#/question?id=6yVjOqskO~
//  https://zoodefis.netlify.app/#/question?id=Pu6Cog495.
//  https://zoodefis.netlify.app/#/question?id=Ii4NHw5aWd
//  https://zoodefis.netlify.app/#/question?id=fNKzp-kTNE
