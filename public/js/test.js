{
const max = 4; // Numbers from 0 to 4 possible
const randomInt = Math.floor(Math.random() * 5) + 1;

let background = document.getElementById("background");
background.style.backgroundImage = `url("../assets/images/bg${randomInt}.jpg")`;
}

function paramPanel(){
    //TODO : display the pannel of parameters
}