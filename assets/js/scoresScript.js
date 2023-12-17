let textInput = document.querySelector("#name");
let scoresFormEl = document.querySelector("#scores-form");
let scoresOl = document.querySelector("#scores-list");
let scoreMsgEl = document.querySelector("#score-msg");

var backBtn = document.querySelector("#back-btn");
var clearBtn = document.querySelector("#clear-btn");

let prevScores = JSON.parse(localStorage.getItem("scores"));

function renderScores() {
  prevScores = JSON.parse(localStorage.getItem("scores"));

  scoresOl.classList.add("hidden");
  scoreMsgEl.classList.remove("hidden");

  scoresOl.innerHTML = "";
  if (prevScores) {
    let sortedScores = prevScores.sort((a, b) => b.score - a.score);
    scoresOl.classList.remove("hidden");
    scoreMsgEl.classList.add("hidden");
    for (let i = 0; i < prevScores.length; i++) {
      let scoreItem = document.createElement("li");
      scoreItem.textContent = sortedScores[i].name + " - " + sortedScores[i].score;
      scoresOl.append(scoreItem);
    }
  }
}

renderScores();

backBtn.addEventListener("click", () => {
  window.location.href = "./index.html";
});
clearBtn.addEventListener("click", () => {
  localStorage.removeItem("scores");
  renderScores();
});
