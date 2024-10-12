let userscore =0;
let compscore =0;

const choice =document.querySelectorAll(".choice")

choice.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        console.log("choice was clicked")
        let userchoice=choice.textContent;
    })
})