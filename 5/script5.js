//HINT :P https://www.youtube.com/watch?v=pe1ZXh5_wk4

const AKTUALNI_LEVEL = 5;
const TAJNE_HESLO = "hermes";

let dosazenyLvl = localStorage.getItem('levelUp');
if (!dosazenyLvl || Number(dosazenyLvl) < AKTUALNI_LEVEL) {
    alert("Nuh-uh-uhhhh");
    window.location.href = '../index.html';
}

document.addEventListener("DOMContentLoaded", () => {
    const cisloLvl = document.querySelector(".lvlNo");
    if (cisloLvl) {
        cisloLvl.innerText = AKTUALNI_LEVEL;
    }
});

function overHeslo() {
    const zadaneHeslo = document.getElementById("heslo").value.trim();
    const zpravaElem = document.getElementById("zprava");

    if (zadaneHeslo === TAJNE_HESLO) {
        levelUp();
    } else {
        zpravaElem.innerText = ":(";
    }
}

function levelUp() {
    const nextLvl = AKTUALNI_LEVEL + 1;
    localStorage.setItem('levelUp', nextLvl);
    window.location.href = `../${nextLvl}/level${nextLvl}.html`;
}