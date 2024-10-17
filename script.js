let gameSeq=[];
let userseq=[];

let btns =["red","yellow","green","purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2")

document.addEventListener("keypress",function(){
    if(started ==false){
        started =true;
        levelup();
    }
})
//level up and flash Button

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
     btn.classList.remove("flash")
    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
     btn.classList.remove("userflash")
    },250);
}


function levelup(){
    userseq =[];
    level++;
    h2.innerText = `Level ${level}`;
    
    let randIdx = Math.floor(Math.random()*3);
    let randcolor = btns[randIdx];
    let randBtn = document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    gameflash(randBtn);
}

function checkans(idx){
 if(userseq[idx] == gameSeq[idx]){
    if(userseq.length == gameSeq.length){
        setTimeout(levelup ,1000);
    }
 }
 else{
    h2.innerHTML =`Game Over! Your Score was <b>${level}</b> <br> Press any key to Start.`;
    document.querySelector("body").style.backgroundColor ="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor ="white";
    },150);
    reset();
 }
}

function btnPress(){
  let btn =this;
  userflash(btn);

  usercolor = btn.getAttribute("id");
  userseq.push(usercolor);

  checkans(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started =false;
    gameSeq=[];
    userseq =[];
    level =0;

}