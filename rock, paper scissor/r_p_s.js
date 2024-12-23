let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");



const genCompChoice =() =>{
    //rock, paper and scissors
    const options= ["rock","paper","scissors"];
    
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};


const drawGame= ()=>{
    console.log("game was draw");
     msg.innerText="game was draw.Play again.";
     msg.style.backgroundColor="#081b31";
     
}

const showWinner =(userwin) =>{
    if(userwin){
        userScore++;
        userScorePara.innerText=userScore;
        
        msg.innerText="you win";
        msg.style.backgroundColor="green";
    }
    else{
        console.log("you lose");
        compScore++;
        compScorePara.innerText=compScore;
         msg.innerText="you lose";
         msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice) =>{
    console.log("user choice =",userChoice);
    //generate computer choice
    const compChoice =genCompChoice();
    console.log("comp choice =",compChoice);

    if(userChoice== compChoice){
       drawGame();
    }
    else{
        let userwin= true;
        if(userChoice ==="rock"){
            //scissors,paper
            userwin=compChoice ==="paper"?false:true;
        }
    else if(userChoice==="paper"){
        //rock,scissors
        userwin=compChoice==="scissors"?false:true;
        }
        else{
            //rock,paper
            compChoice==="rock"? false: true
        }

        showWinner(userwin);
}


};




choices.forEach((choice) => {
   
    choice.addEventListener("click", ()=>{
        const userChoice= choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);

    });
});


