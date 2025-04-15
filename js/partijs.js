const urlParams = new URLSearchParams(window.location.search);
const score = urlParams.get("score");
document.getElementById("scoreDisplay").textContent = score ? score : "--";

localStorage.setItem("myCat", "Tom");
const cat = localStorage.getItem("myCat");


localStorage.removeItem("myCat");
localStorage.clear();