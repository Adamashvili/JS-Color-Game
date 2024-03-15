let winningText = document.getElementById("winningText")
let easyBtn = document.getElementById("easy")
let hardBtn = document.getElementById("hard")
let resultBtn = document.getElementById("result")
let allBoxes = document.querySelectorAll(".box")
let startBtn = document.getElementById("start")
let section = document.querySelector("section")
let winningCount = document.getElementById("pointNumber")
let gameIndicator = "hard"
let gameLogic = false

let colorList = []


function fillArray(quantity) {
    for (let i = 0; i < quantity; i++) {
        let r = Math.round(Math.random() * 256)
        let g = Math.round(Math.random() * 256)
        let b = Math.round(Math.random() * 256)
        let rgb = `rgb(${r}, ${g}, ${b})`;
        colorList.push(rgb)
    }


}


function getRandomRGB(list) {
    let randomColor = Math.round(Math.random() * (list.length -1))
    return list[randomColor]

}

boxNumber = 6

function startGame() {
    gameLogic = true

    fillArray(boxNumber)
    resultBtn.innerText = "Result"
    resultBtn.classList.remove("success")
    resultBtn.classList.remove("false")
    winningText.innerText = getRandomRGB(colorList)
    console.log(colorList);
    allBoxes.forEach(box => {
        box.style.opacity = "1"
        box.style.visibility = "visible"
        box.innerText = ""
        box.style.backgroundColor = colorList.shift()
        console.log(colorList);
        box.addEventListener("click", () => {
            
            if (gameLogic) {
                if (box.style.backgroundColor == winningText.innerText) {
                    resultBtn.classList.remove("false")
                    resultBtn.classList.add("success")
                    resultBtn.innerText = "Success"
                    box.style.backgroundColor = "green"
                    box.innerText = "Winner!"
                    box.className = "winnerBox"
                    winningCount.innerText++
                    gameLogic = false
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "You Have Won The Game!",
                        showConfirmButton: true,
                        timer: 3500
                    });
                }
                else {
                    resultBtn.classList.remove("success")
                    resultBtn.classList.add("false")
                    resultBtn.innerText = "Failed"
                    box.style.opacity = "0"
                    box.style.visibility = "hidden"
                }
            }

        })
    })
}


startBtn.addEventListener("click", startGame)

easyBtn.addEventListener("click", function () {
    boxNumber = 3
    gameLogic = false
    gameIndicator = "easy"
    section.style.height = "200px"
    section.style.overflow = "hidden";
    resultBtn.innerText = "Result"
    resultBtn.classList.remove("success")
    resultBtn.classList.remove("false")
    winningText.innerText = " - - - - -" 
    colorList = []
    allBoxes.forEach(box => {
        box.innerText = ""
        box.style.backgroundColor = "blueviolet";
        box.style.visibility = "visible"
        box.style.opacity = 1;
        resultBtn.innerText = "Result"
        resultBtn.classList.remove("success")
        resultBtn.classList.remove("false")
    })
})



hardBtn.addEventListener("click", function () {
    hardBtn = 6
    gameLogic = false
    gameIndicator = "hard";
    section.style.height = "auto"
    section.style.overflow = "none"
    resultBtn.innerText = "Result"
    resultBtn.classList.remove("success")
    resultBtn.classList.remove("false")
    winningText.innerText = " - - - - -"   
    colorList = []
    allBoxes.forEach(box => {
        box.innerText = ""
        box.style.backgroundColor = "blueviolet";
        box.style.visibility = "visible";
        box.style.opacity = 1
    })


})


