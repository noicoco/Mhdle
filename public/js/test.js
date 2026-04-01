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
    const monsterPage = document.getElementById("monsterTablePage");
    const weaponPage = document.getElementById("monsterTablePage");
    const compendiumPage = document.getElementById("monsterTablePage");
    const roarPage = document.getElementById("monsterTablePage");
    const talentPage = document.getElementById("monsterTablePage");

    const pageButtons = [monsterPage, weaponPage, compendiumPage, roarPage, talentPage]


}