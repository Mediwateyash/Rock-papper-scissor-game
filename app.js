let userScore = 0;
let compScore = 0;


const msg = document.querySelector("#msg")
const choices = document.querySelectorAll(".choice");

// Generate a random computer choice
const genCompChoice = () => {
    const option = ["Rock", "Paper", "Scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
};

const drawGame = () => {
    console.log("Game was draw.");
    msg.innerText = "Game was draw."
    msg.style.backgroundColor="#6256CA";
    
}

const showWinner = (userwin , userChoice , compChoice) => {
    if (userwin) {
        console.log("You won the game.");
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green"
    } else {
        console.log("Computer won the game.");
        msg.innerText = `You Lose. ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor= "red"
    } 
    
}
// Function to play the game
const playGame = (userChoice ) => {
    console.log("user choice = ", userChoice);
    
    // Generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice = ", compChoice);

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
        showWinner(userwin  , userChoice , compChoice);
    }
};
    

// Attach event listeners to each choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id"); // Get the id of the clicked choice
        playGame(userChoice);
    });
});
