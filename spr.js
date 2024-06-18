let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const genCompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame=()=>{
    console.log("game was tie");
    msg.innerText="Draw,play again!";
    msg.style.backgroundColor="#081b31";

};
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerHTML=`You Win ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
       
    }
    else
    {   
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerHTML=`You Lose ${userChoice} loses to ${compChoice}`;
        msg.style.backgroundColor="red";
        
    }
};
const playGame=(userChoice)=>{
    console.log("user choice",userChoice);
    const compChoice=genCompchoice();
    console.log("computer choice=",compChoice);
    
    if (userChoice===compChoice) {
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true; 
        }
        else (userChoice==="scissors")
        {
           userWin=compChoice==="rock"?false:true;    
        }
      showWinner(userWin ,userChoice,compChoice);  
};
};
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>
    {   
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});