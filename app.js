let winningText = document.getElementById("winningText")
let easyBtn = document.getElementById("easy")
let hardBtn = document.getElementById("hard")
let resultBtn = document.getElementById("result")
let allBoxes = document.querySelectorAll("div")
let startBtn = document.getElementById("start")
let section = document.querySelector("section")
let gameIndicator = "hard"

let colorList = []

 
function fillArray(quantity) {
    for (let i = 0; i< quantity; i++) {
        let r = Math.round(Math.random() * 255)
        let g = Math.round(Math.random() * 255)
        let b = Math.round(Math.random() * 255)
        let rgb = `rgb(${r}, ${g}, ${b})`;
        colorList.push(rgb)
    }
    

}


function getRandomRGB(list) {
    let randomColor = Math.round(Math.random() * (list.length - 1))
    return list[randomColor]

}


    
    startBtn.addEventListener("click", function() {
        if (gameIndicator == "easy") {
         
            easyMode()
            section.style.height = "200px"
         section.style.overflow = "hidden"
        }
        else {
            hardMode()
            section.style.height = "auto"
         section.style.overflow = "hidden"
        }
        
        resultBtn.innerText = "Result"
        resultBtn.classList.remove("success")
        resultBtn.classList.remove("false")
        winningText.innerText = getRandomRGB(colorList)
        allBoxes.forEach(box => {
            box.style.visibility = "visible"
            box.style.backgroundColor = colorList.pop()
            
            box.addEventListener("click", () => {
                
                
                if(box.style.backgroundColor == winningText.innerText) {
                    resultBtn.classList.remove("false")
                    resultBtn.classList.add("success")
                    resultBtn.innerText = "Success"
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
                box.style.visibility = "hidden"
              }

              
            })
        })

    })

    easyBtn.addEventListener("click", function () {
        gameIndicator = "easy"
    })

    hardBtn.addEventListener("click", function () {
        gameIndicator = "hard"
    })


    function easyMode() {
        fillArray(3)
        console.log(colorList);
    }

    function hardMode() {
        fillArray(6)
        console.log(colorList);
    }
    