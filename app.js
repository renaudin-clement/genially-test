//import Home_page from "./js/Views/pages/Home.js";
import Error_Page from "./js/Views/pages/Errors.js";
import Question from "./js/Views/pages/Question.js";

import Identifiant from "./js/Views/pages/Identifiant.js";
import Resultat from "./js/Views/pages/resultat.js";
import DejaPresent from "./js/Views/pages/OeufDejaTrouver.js"

import Utils from "./js/services/Utils.js";


const routes = {
    ""             : Question,
    "/"            : Question,
    "/home"        : Question,
    //"/home"        : Home_page,
    "/question" : Question,
    "/resultat" : Resultat,
    "/identifiant" : Identifiant,
    "/dejatrouver" : DejaPresent,
    
}

const router = async () => {
    const content   = document.querySelector("#content");
    let   request   = Utils.parseRequestURL();
    console.log("router request :",request);
    let   parsedurl = `/${request.resource || ""}${request.id ? "" : ""}${request.verb ? `/${request.verb}` : ""}`;
    console.log("router parsedURL :",parsedurl);
    let   page      = routes[parsedurl] ? (new routes[parsedurl]()) : (new Error_Page()); 
    console.log("PAGE : ",page);
    console.log("TYPEOF PAGE : ",typeof page);
    content.innerHTML = await page.render();
};

window.addEventListener("load",router);
window.addEventListener("hashchange",router);




function incrementVisitCounter() {
    let compteur = localStorage.getItem("visitCounter");
  
    if (compteur === null) {
      compteur = 1;
    } else {
      compteur = parseInt(compteur) + 1;
    }
  
    localStorage.setItem("visitCounter", compteur);
    console.log(`Nombre de visites : ${compteur}`);
  }
  
  incrementVisitCounter();