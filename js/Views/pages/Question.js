import Page_comp from "../composants/pagecomposer.js";

//dictionnaire des question

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
  ["11", "presque a la fin"]
]);


// changer reponse reponseQuestionParId.set("1", "woof");


/*
console.log(reponseQuestionParId.size);
console.log(reponseQuestionParId.get("2"));
console.log(reponseQuestionParId.has("2"));
reponseQuestionParId.delete("1");
*/


for (let [key, value] of reponseQuestionParId) {
console.log(key + " dis a la personne " + value);
}


export default class Question extends Page_comp {
    async render() {
      
        return Page_comp.renderPage(() => `
      <section class="main-content">
        <p> ${reponseQuestionParId.get("1")} </p>

      </section>
    `);
    }
}



