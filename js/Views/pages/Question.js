import Page_comp from "../composants/pagecomposer.js";
import getTotalQuestions from "../../utils/Scorestotal.js";
import {ENDPOINT}  from "../../configs.js";
// Dictionnaire des réponses par ID
let reponseQuestionParId = new Map([
  ["Y0XD04dQY8", "Un Poussin (poux-sain) !"],
  ["4LsA2_Oku1", "Tu en pousse un !"],
  ["xtqpP5Bds1", "John John Deuf (jaune d'oeuf) !"],
  ["aoUIwJCVtr", "Des chocolats (chaud-colle-a) !"],
  ["pfUnU_fEsR", "Les chocolats de Pâques (lait-chaud-col-a-deux-pas-queue) !"],
  ["lIoQ9plaaF", "3    (6-2-1=3) !"],
  ["6yVjOqskO~", "Une tulipe (tu-lit-peu) !"],
  ["Pu6Cog495", "Un lapin (LA-pain) !"],
  ["Ii4NHw5aWd", "Panier (pas-nid-haie) !"],
  ["fNKzp-kTNE", "Pâques (pas queue) !"]
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
          window.location.href = `${ENDPOINT}#/resultat`;
        }
        
        } else{
          window.location.href = `${ENDPOINT}#/dejatrouver`;
          console.log(localStorage);
          

        }


      } else if (id) {
        reponse = `Cette Oeuf n'existe pas !`;
      }
    }

      if (total === 0) {
        return Page_comp.renderPage(() => `
            <h2>Réponse :</h2>
            <p>${reponse}</p>
        `);
      } 
      
      else {
        return Page_comp.renderPage(() => `
            <h2>Réponse :</h2>
            <p>${reponse}</p>
            <div class="explosion">
              <div class="piece piece1"></div>
              <div class="piece piece2"></div>
              <div class="piece piece3"></div>
              <div class="piece piece4"></div>
            </div>
            <div class="score-box">
                Oeuf total : <span id="scoreDisplay">${total}/10</span>
            </div>
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



//  http://localhost:8080/#/question?id=Y0XD04dQY8
//  http://localhost:8080/#/question?id=4LsA2_Oku1
//  http://localhost:8080/#/question?id=xtqpP5Bds1
//  http://localhost:8080/#/question?id=aoUIwJCVtr
//  http://localhost:8080/#/question?id=pfUnU_fEsR
//  http://localhost:8080/#/question?id=lIoQ9plaaF
//  http://localhost:8080/#/question?id=6yVjOqskO~
//  http://localhost:8080/#/question?id=Pu6Cog495.
//  http://localhost:8080/#/question?id=Ii4NHw5aWd
//  http://localhost:8080/#/question?id=fNKzp-kTNE