//track score 
let userScore = 0;
let compScore = 0;


const msg = document.querySelector("#msg") 
const choices = document.querySelectorAll(".choice"); // Get all the choices

const userScorepara = document.querySelector("#userscore")
const compScorepara = document.querySelector("#compscore")

// Generate a random computer choice
const genCompChoice = () => {
    const option = ["Rock", "Paper", "Scissor"];  //aaray of choice
    const randIdx = Math.floor(Math.random() * 3); //generate an random number access array
    return option[randIdx];  // return comp choice
}; 

const drawGame = () => {
    console.log("Game was draw.");
    msg.innerText = "Game was draw."
    msg.style.backgroundColor="#87A2FF";
    
}

const showWinner = (userwin , userChoice , compChoice) => {
    if (userwin) {
        userScore++;
        userScorepara.innerText = userScore;     //update score
 
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;   //dispaly winner message 
        msg.style.backgroundColor="#86D293"
    } else {
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You Lose. ${compChoice} beats Your ${userChoice}`
        msg.style.backgroundColor= "#D91656"
    } 
    
}
// Function to play the game
const playGame = (userChoice ) => {
    console.log("user choice = ", userChoice);
    
    // Generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice = ", compChoice);

    //logic of game
    if ( userChoice === compChoice ) {
        drawGame();
    } else {
        let userwin = true
        if (userChoice === "Rock") {
            userwin = compChoice === "Paper"? false: true
        } else if (userChoice === "Paper") {
            userwin = compChoice === "Scissor"? false: true
        } else if (userChoice === "Scissor") {
            userwin = compChoice === "Rock" ? false : true;
        }
        showWinner(userwin  , userChoice , compChoice);  // show winner
    }
};
    

// Attach event listeners to each choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id"); // Get the id of the clicked choice
        playGame(userChoice);
    });
});
