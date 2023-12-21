const startButton = document.querySelector("#startButton");
const resetButton = document.querySelector("#resetButton")
const endButton = document.querySelector("#endButton");
const target = document.querySelector("#target");

let isStartClicked = true;
let isEndClicked = true;
let isResetClicked = true;
let start;
let end;

startButton.addEventListener("click", () => {
    if(isStartClicked){
        target.innerText = "wating for response...";
        start = new Date();
        isStartClicked = false;
    }
});

endButton.addEventListener("click", () => {
    if(isEndClicked){
        end = new Date();
        diff = end-start;
        if(diff<1100 && 900<=diff){
            target.innerText = `success :)`;
        }
        else{
            target.innerText = `failed :(`;
        }
        isEndClicked = false;
    }
});

resetButton.addEventListener("click", () => {
    if(isResetClicked){
        target.innerText = "press start";
        isStartClicked = true;
        isEndClicked = true;
        
    }
});