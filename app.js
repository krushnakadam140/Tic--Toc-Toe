let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgcontiner = document.querySelector(".msg-container");
let msg =document.querySelector("#msg");

let turnO = true;
let count = 0;
let b;
const winPattern =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO =true;
    count=0;
    enableBoxes();
    msgcontiner.classList.add("hide");
}

boxes.forEach( (box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O"
            box.classList.add("Ocolor");
            turnO = false;
        }else{
            box.innerText = "X"
            box.classList.add("Xcolor");
            turnO = true;
        }
        box.disabled = true;
        count++;

       let iswinner = checkWinner();
       
       if(count === 9 && !iswinner){
        gamedraw();
       }
     
    });
});

const gamedraw = () => {
    msg.innerText = `Game was a draw!`;
    msgcontiner.classList.remove("hide");
    disableBoxes();

}

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled =true;
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled =false;
        box.innerText="";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontiner.classList.remove("hide");
    disableBoxes();
}

function checkWinner () {
   for(box of winPattern){
    let pos1val = boxes[box[0]].innerText;
    let pos2val = boxes[box[1]].innerText;
    let pos3val = boxes[box[2]].innerText;
   

   if ( pos1val != "" && pos2val != "" && pos3val != "") {
     if( pos1val == pos2val && pos2val == pos3val ) {
      
        showWinner(pos1val);
       
     }
   }
 }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
