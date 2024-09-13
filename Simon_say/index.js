let  gameSeq = [];
let  userSeq = [];
 let btn=["yellow", "red","purple","green"];
 let h2=document.querySelector("h2");
let started =false;
 let level = 0;
 document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started");
        started=true;

        levelUp();
    }
 });

function gameflash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash");
   },300);

}

function userflash(btn){
   btn.classList.add("userflash");
   setTimeout(function(){
    btn.classList.remove("userflash");
   },300);

}



 function levelUp() {
   userSeq=[];
    level++;
    h2.innerText=`Level${level}`;

    let randIdx=Math.floor(Math.random() *3);
    let randColor= btn[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameflash(randBtn);
 }
function checkAns(idx){
   
   if(userSeq[idx] ===gameSeq[idx]){
     if(userSeq.length==gameSeq.length){
      setTimeout(levelUp,700);
     }
   }
   else{
      h2.innerHTML=`Game over! <b>${level} </b> <br> Press any key to start`;
      document.querySelector("body").style.backgroundColor="red";
      setTimeout(function(){
 document.querySelector("body").style.backgroundColor="white";
      },500);
      reset();
   }
}

 function btnPress() {
   let btn=this;
   userflash(btn);
    userColor= btn.getAttribute("id");
    userSeq.push(userColor);
 checkAns(userSeq.length-1);
 };

 let AllBtns=document.querySelectorAll(".btn");
 for(Btn of AllBtns){
   Btn.addEventListener("click",btnPress);
 }

 function reset(){
   started =false;
   gameSeq = [];
    userSeq = [];
    level=0;
 
 }