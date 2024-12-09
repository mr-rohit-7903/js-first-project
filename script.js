let boxes = document.querySelectorAll(".box");
let turnX = true;
let count = 0;

winBack = document.querySelector(".winBack");
winBox = document.querySelector(".winBox");
winText = document.querySelector("#winText");

let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnX){
            box.innerText = "X";
            turnX = false;
            count++;
        }
        else{
            box.innerText = "O";
            turnX = true;
            count++;
        }
        box.disabled = true;
        checkWinner();
        if (count === 9){
            winBack.style.display  = 'inherit';
            winBox.style.display = 'inherit';
            winText.innerText = "Its a Tie!";
        }
    });
});

const checkWinner = () => {
    for(let pattern of win){
        
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText; 
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 !== "" && pos2 !== "" && pos3 !== ""){
            if(pos1 === pos2 && pos2 === pos3){
                winBack.style.display  = 'inherit';
                winBox.style.display = 'inherit';
                winText.innerText = "Player " + pos1 + " Won";
            }
        }
    }
}
