let min=1;
let max=3;
let player_count=0;
let computer_count=0;


document.getElementById("rock").style.backgroundColor = "#474747";
document.getElementById("paper").style.backgroundColor = "#474747";
document.getElementById("scissors").style.backgroundColor = "#474747";


let player_pick;

const rock_button=document.getElementById("rock");
const paper_button=document.getElementById("paper");
const scissor_button=document.getElementById("scissors");

rock_button.addEventListener('click',event=>{
    let computer_pick=Math.floor(Math.random()*(max-min+1)+min);
    player_pick=1;
    document.getElementById("player").textContent="player chose: rock";
    if(computer_pick==1){
        document.getElementById("computer").textContent="computer chose: rock";
        document.getElementById("sub_hero").textContent="TIE!";


        document.getElementById("rock").style.backgroundColor="black";
    }
    else if(computer_pick==2){
        document.getElementById("computer").textContent="computer chose: paper";
        document.getElementById("sub_hero").textContent="COMPUTER WINS!";
        computer_count++
        document.getElementById("computer_score").textContent=`computer wins: ${computer_count}`;

        document.getElementById("rock").style.backgroundColor="red";
        document.getElementById("paper").style.backgroundColor="green";
    }
    else if(computer_pick==3){
        document.getElementById("computer").textContent="computer chose: scissors";
        document.getElementById("sub_hero").textContent="PLAYER WINS!";
        player_count++;
        document.getElementById("player_score").textContent=`player wins: ${player_count}`;

        document.getElementById("rock").style.backgroundColor="green";
        document.getElementById("scissors").style.backgroundColor="red";
    }


    setTimeout(()=>{
        document.getElementById("rock").style.backgroundColor = "#474747";
        document.getElementById("paper").style.backgroundColor = "#474747";
        document.getElementById("scissors").style.backgroundColor = "#474747";
    },500);
    
})


paper_button.addEventListener('click',event=>{
    let computer_pick=Math.floor(Math.random()*(max-min+1)+min);
    player_pick=2;
    document.getElementById("player").textContent="player chose: paper";
    if(computer_pick==2){
        document.getElementById("computer").textContent="computer chose: paper";
        document.getElementById("sub_hero").textContent="TIE!";
        document.getElementById("paper").style.backgroundColor="black";
    }
    else if(computer_pick==3){
        document.getElementById("computer").textContent="computer chose: scissors";
        document.getElementById("sub_hero").textContent="COMPUTER WINS!";
        computer_count++
        document.getElementById("computer_score").textContent=`computer wins: ${computer_count}`;
        document.getElementById("paper").style.backgroundColor="red";
        document.getElementById("scissors").style.backgroundColor="green";
    }
    else if(computer_pick==1){
        document.getElementById("computer").textContent="computer chose: rock";
        document.getElementById("sub_hero").textContent="PLAYER WINS!";
        player_count++;
        document.getElementById("player_score").textContent=`player wins: ${player_count}`;
        document.getElementById("paper").style.backgroundColor="green";
        document.getElementById("rock").style.backgroundColor="red";
    }

    setTimeout(()=>{
        document.getElementById("rock").style.backgroundColor = "#474747";
        document.getElementById("paper").style.backgroundColor = "#474747";
        document.getElementById("scissors").style.backgroundColor = "#474747";
    },500);
})


scissor_button.addEventListener('click',event=>{
    let computer_pick=Math.floor(Math.random()*(max-min+1)+min);
    player_pick=3;
    document.getElementById("player").textContent="player chose: scissors";
    if(computer_pick==3){
        document.getElementById("computer").textContent="computer chose: scissors";
        document.getElementById("sub_hero").textContent="TIE!";
        document.getElementById("scissors").style.backgroundColor="black";
    }
    else if(computer_pick==1){
        document.getElementById("computer").textContent="computer chose: rock";
        document.getElementById("sub_hero").textContent="COMPUTER WINS!";
        computer_count++
        document.getElementById("computer_score").textContent=`computer wins: ${computer_count}`;
        document.getElementById("scissors").style.backgroundColor="red";
        document.getElementById("rock").style.backgroundColor="green";
    }
    else if(computer_pick==2){
        document.getElementById("computer").textContent="computer chose: paper";
        document.getElementById("sub_hero").textContent="PLAYER WINS!";
        player_count++;
        document.getElementById("player_score").textContent=`player wins: ${player_count}`;
        document.getElementById("scissors").style.backgroundColor="green";
        document.getElementById("paper").style.backgroundColor="red";
    }

    setTimeout(()=>{
        document.getElementById("rock").style.backgroundColor = "#474747";
        document.getElementById("paper").style.backgroundColor = "#474747";
        document.getElementById("scissors").style.backgroundColor = "#474747";
    },500);
})


