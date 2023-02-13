class GameSuit {
    cOptions;
    
    
    constructor(){
        this.cOptions = [];
      }
    }
        const options = document.querySelectorAll(".options");
        const tulisan = document.getElementById("versus");
        const comp = document.querySelectorAll(".komputer");
        const ichi = document.getElementById("satu")
        const ni = document.getElementById("dua")
        const san = document.getElementById("tiga")
    
    
          options.forEach((option) => {
              option.addEventListener("click", function() {
            const pInput = this.value;
            const cOptions = [ichi, ni, san];
            const cInput = cOptions[Math.floor(Math.random() * 3)].value;
            option.classList.add("choiceBorder")
            tulisan.classList.remove("midText");
            compareInputs(pInput, cInput);
            backGroundComputer(cInput);
            options.forEach(elem=> {
            elem.disabled = true;
               });       
            });
          });   
    
          function backGroundComputer (cInput) {
            if (cInput === "Rock") {
                ichi.classList.add("choiceBorder");
                return;
            }
            if (cInput === "Scissors") {
                san.classList.add("choiceBorder");
                return;
            } 
            if (cInput === "Paper") {
                ni.classList.add("choiceBorder");
                return;
            }
        }
    
          function compareInputs(pInput, cInput) {
            if (pInput === cInput) {
                tulisan.innerHTML = `DRAW`;
          tulisan.classList.add("draw");
            return;
            }
      
            if (pInput === "Rock") {
              if (cInput === "Scissors") {
          tulisan.innerHTML = `PLAYER 1 <br> WIN`;
          tulisan.classList.add("playerWin");
              } else {
          tulisan.innerHTML = `C O M <br> W I N`;
          tulisan.classList.add("comWin");	
              }
            }
            //Check for Paper
            else if (pInput === "Paper") {
              if (cInput === "Rock") {
            tulisan.innerHTML = `PLAYER 1 <br> WIN`;
        tulisan.classList.add("playerWin");
              } else {
            tulisan.innerHTML = `C O M <br> W I N`;	
        tulisan.classList.add("comWin");
              }
            }
            //Check for Scissors
            else {
              if (cInput === "Paper") {
            tulisan.innerHTML = `PLAYER 1 <br> WIN`;
        tulisan.classList.add("playerWin");
              } else {
            tulisan.innerHTML = `C O M <br> W I N`;	
        tulisan.classList.add("comWin");
              }
            }
        }
    