import Page_comp from "../composants/pagecomposer.js";

// Dictionnaire des réponses par ID
let reponseQuestionParId = new Map([
  ["1", "coq corico"],
  ["2", "i don't know why i am here"],
  ["3", "trop cool"],
  ["4", "tu peux le faire"],
  ["5", "serpincroyable"],
  ["6", "sois pas volatile"],
  ["7", "rapide comme un wallabies"],
  ["8", "tu ravi roux !"],
  ["9", "tapis tapis tapis"],
  ["10", "oeil de lynx"],
  ["11", "presque à la fin"]
]);

export default class Question extends Page_comp {
  async render() {
    
    const queryString = window.location.hash.split("?")[1];
    let reponse = "Comment on en est arriver la ?";
    let id = null;
    let score = null;

    if (queryString) {
      const params = new URLSearchParams(queryString);
      id = params.get("id");
      score = params.get("score");

      if (id && reponseQuestionParId.has(id)) {
        reponse = reponseQuestionParId.get(id);

        // Récupérer la liste existante ou créer une nouvelle
        let questions = JSON.parse(localStorage.getItem("questions")) || [];

        if (questions == []){

        // Ajouter la question actuelle dans le localStorage
        questions.push({
          id: id,
          texte: reponse,
          //score: parseInt(score) || 0,
        });

        // Sauvegarder
        localStorage.setItem("questions", JSON.stringify(questions));
        
        } else{
          console.log("elle existe deja")
          reponse = " oeuf deja visiter "
          //score = "deja attribuer"

        }


      } else if (id) {
        reponse = `Aucune réponse trouvée pour la question ID: ${id}`;
      }
    }

    return Page_comp.renderPage(() => `
      <section class="main-content">
        <h2>Réponse :</h2>
        <p>${reponse}</p>
        
      </section>
    `);
    //${score !== null ? `<p>Score reçu : ${score}</p>` : ""}
  }
}

//avec score 
// retour = https://zoodefis.netlify.app/#/question?id=5&score=3

//sans score 
// retour = https://zoodefis.netlify.app/#/question?id=5
