// {
//     const max = 4; // Numbers from 0 to 4 possible
//     const randomInt = Math.floor(Math.random() * 5) + 1;
//
//     let background = document.getElementById("background");
//     background.style.backgroundImage = `url("../assets/images/bg/bg${randomInt}.jpg")`;
// }

function toggleParamPanel() {
    let paramPanelId = document.getElementById("paramPanel");
    let clicked = paramPanelId.click;
    if (paramPanelId.style.display === "none" && clicked) {
        paramPanelId.style.display = "flex";
    } else {
        paramPanelId.style.display = "none";
    }
}

{
    const monsterPage = document.getElementById("monsterPage");
    const weaponPage = document.getElementById("weaponPage");
    const compendiumPage = document.getElementById("compendiumPage");
    const roarPage = document.getElementById("roarPage");
    const talentPage = document.getElementById("talentPage");

    const pageButtons = [monsterPage, weaponPage, compendiumPage, roarPage, talentPage]
    
    const background = document.getElementById("background");

    for (let pageButton in pageButtons) {
        let button = pageButtons[pageButton]
        console.log(pageButton);
        console.log(pageButtons);
        console.log(button);
        button.addEventListener("mouseenter", () => {
            background.style.backgroundImage = `url("../assets/images/bg/bg${Number(pageButton)+1}.jpg")`;
        })
    }

}