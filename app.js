let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

// Generate a random computer choice
const genCompChoice = () => {
    const option = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
};

const drawGame = () => {
    console.log("Game was draw.");
    
}

const showWinner = (userwin) => {
    if (userwin) {
        console.log("You won the game.");
    } else {
        console.log("Computer won the game.");
    } 
    
}
// Function to play the game
const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    
    // Generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice = ", compChoice);

    if ( userChoice === compChoice ) {
        drawGame();
    } else {
        let userwin = true
        if (userChoice === "rock") {
            userwin = compChoice === "paper"? false: true
        } else if (userChoice === "paper") {
            userwin = compChoice === "scissor"? false: true
        } else if (userChoice === "scissor") {
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userwin);
    }
};
    

// Attach event listeners to each choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id"); // Get the id of the clicked choice
        playGame(userChoice);
    });
});
