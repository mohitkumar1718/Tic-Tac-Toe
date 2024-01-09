const boxes=document.querySelectorAll(".box");
const resetBtn=document.querySelector("#reset-btn");
const newGameBtn=document.querySelector("#new-btn");
const msgContainer=document.querySelector(".msg-container");

let turnO=true;
const winningPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const reset=()=>{
    turnO=true;
    for(box of boxes){
        box.innerText="";
        box.disabled=false;
    }
    msgContainer.classList.add("hide");
}

resetBtn.addEventListener("click",reset);
newGameBtn.addEventListener("click",reset);
// console.log(winningPatterns);
// console.log(boxes);
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        // console.log("Button was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
      })
    
})

const disableBoxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winner)=>{
    document.querySelector(".msg").innerText=`Congratulation Winner is ${winner}`;
    document.querySelector(".msg-container").classList.remove("hide");
    disableBoxes();
}

const checkWinner=()=>{
    for(pattern of winningPatterns){
        // console.log(pattern);
        let value1=boxes[pattern[0]].innerText;
        let value2=boxes[pattern[1]].innerText;
        let value3=boxes[pattern[2]].innerText;
        if(value1!="" && value2!="" && value3!=""){
            if(value1===value2 && value2==value3){
                showWinner(value1);
            }
        }
    
    }
}
