let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newGame = document.querySelector(".new");
let msgCon = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turnO = true;  

const winPatterns = [
    [0 , 1 , 2],
    [3 , 4 , 5],
    [6 , 7 , 8],
    [0 , 3 , 6],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [0 , 4 , 8],
    [2 , 4 , 6],
];

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        console.log("Box was clicked");
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else
        {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBox = () => {
    for(let box of boxes)
    {
        box.disabled = true;
    }
};

const enableBox = () => {
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulation , Winner is ${winner}`;
    msgCon.classList.remove("hide");
    disableBox();
};

const checkWinner = () => {
    for(let pattern of winPatterns) {
        //console.log(pattern[0] , pattern[1] , pattern[2]);
        //console.log(
           // boxes[pattern[0]].innerText , 
           // boxes[pattern[1]].innerText , 
          //  boxes[pattern[2]].innerText);

            let posVal1 = boxes[pattern[0]].innerText;
            let posVal2 = boxes[pattern[1]].innerText;
            let posVal3 = boxes[pattern[2]].innerText;

            if(posVal1 !== "" && posVal2 !== "" && posVal3 !== "")
            {
                if(posVal1 === posVal2 && posVal2 === posVal3)
                {
                    showWinner(posVal1);
                    return true;
                }
            }
    }
};

const resetGame = () => {
    turnO = true;
    enableBox();
    msgCon.classList.add("hide");

};

newGame.addEventListener("click" , resetGame);
reset.addEventListener("click" , resetGame);