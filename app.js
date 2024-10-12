let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

// Generate a random computer choice
const genCompChoice = () => {
    const option = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
};

// Function to play the game
const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    
    // Generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice = ", compChoice);
};

// Attach event listeners to each choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id"); // Get the id of the clicked choice
        playGame(userChoice);
    });
});
