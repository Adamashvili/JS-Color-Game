let winningText = document.getElementById("winningText");
let easyBtn = document.getElementById("easy");
let hardBtn = document.getElementById("hard");
let resultBtn = document.getElementById("result");
let allBoxes = document.querySelectorAll(".box");
let startBtn = document.getElementById("start");
let section = document.querySelector("section");
let main = document.querySelector("main");
let winningCount = document.getElementById("pointNumber");

let colorList = [];
let winner = false;
let attempt = 3;
winningCount.innerHTML = sessionStorage.getItem("winCount") || 0;

function fillArray(quantity) {
  reset();
  for (let i = 0; i < quantity; i++) {
    let r = Math.round(Math.random() * 256);
    let g = Math.round(Math.random() * 256);
    let b = Math.round(Math.random() * 256);
    let rgb = `rgb(${r}, ${g}, ${b})`;
    colorList.push(rgb);
  }

  winningText.innerHTML = getRandomRGB(colorList);
  colorList.forEach(
    (color) =>
      (section.innerHTML += `<div onclick="guessColor(event)" style="background-color: ${color}" class="box"></div>`),
  );
}

function getRandomRGB(list) {
  let randomColor = Math.round(Math.random() * (list.length - 1));
  return list[randomColor];
}

function startGame() {
  main.style.visibility = "visible";
}

function guessColor(e) {
  if (!winner && resultBtn.innerHTML != "Game Over") {
    let currentDivColor = e.target.style.backgroundColor;
    let currentDiv = e.target;
    if (currentDivColor == winningText.innerHTML) {
      resultBtn.className = "success";
      resultBtn.innerHTML = "winner";
      currentDiv.innerHTML = "Winner";
      currentDiv.className = "winnerBox";
      winner = true;
      winningCount.innerHTML++;
      sessionStorage.setItem("winCount", winningCount.innerHTML);
    } else {
      currentDiv.style.opacity = 0;
      currentDiv.style.visibility = "hidden";
      resultBtn.innerHTML = "failed";
      resultBtn.className = "false";
      attempt--;
      if (attempt == 0) {
        resultBtn.innerHTML = "Game Over";
      }
    }
  }
}

function reset() {
  colorList = [];
  section.innerHTML = "";
  resultBtn.innerHTML = "Result";
  resultBtn.className = "";
  winningText.innerText = " - - - - -";
  winner = false;
  attempt = 3;
}

