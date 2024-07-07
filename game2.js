let choices = document.querySelectorAll(".choice");
let myPoint = 0;
let computerPoint = 0;
let userWin = true;
let btn = document.querySelector(".btn");
let user = document.querySelector(".user-point");
let computer = document.querySelector(".computer-point");

const showWinner = (userWin) =>{
    if(userWin === true){
    
        btn.innerText = "You are Win! You beats Computer"
        btn.style.backgroundColor = "green";
        myPoint++;
        user.innerText = myPoint;
    }
    else{
        computerPoint++;
        btn.innerText = "You are Lose! Computer beats You"
        btn.style.backgroundColor = "yellowgreen";
        computer.innerText = computerPoint;
    }
}
const palyGame = (userChoice) =>{

    const comChoice = genComputerChoice();

    if(userChoice === comChoice){
        btn.innerText = "You are Draw!"
        btn.style.backgroundColor = "red";
    }
    else{
        if(userChoice === "rock"){
            //paper , scissore
            userWin = comChoice === "paper"?false:true;
        }
        else if(userChoice === "paper"){
            //rock,scissore
            userWin = comChoice === "rock"?true:false;
        }
        else{
            //rock , paper
            userWin = comChoice === "rock"?false:true;
        }
        showWinner(userWin);
    }
};
const genComputerChoice = () =>{
    const options = ["rock" , "paper" , "scissore"];
    const comIdx = Math.floor(Math.random() * 3);
    // console.log(options[comIdx]);
    return options[comIdx];
}

choices.forEach((choice) =>{

    choice.addEventListener("click" , () =>{
        const userChoice = choice.getAttribute("id");
        palyGame(userChoice);
    })
});