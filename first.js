let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;
const disableboxes=()=>{
    for (const box of boxes) {
        box.disabled=true;
    }
};
const enableboxes=()=>{
    for (const box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
};

const resetGame=()=>{
    turnO=true;
    enableboxes();
    msgContainer.classList.add("hide");

};
const showWinner= (winner) =>{
msg.innerText=`congrats winner is ${winner}`;
msgContainer.classList.remove("hide");
disableboxes();
};
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if (turnO) {
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
const checkWinner = () =>{
   for(let pattern of winPatterns){
   let pos1=boxes[pattern[0]].innerText;
   let pos2=boxes[pattern[1]].innerText;
   let pos3=boxes[pattern[2]].innerText;

    if(pos1!="" &&pos2!="" && pos3!="" ){
        if(pos1===pos2 && pos2===pos3){
            console.log(`winner is ${pos1}`);
            showWinner(pos1);
        }
    }
   } 
};
newbtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
