//STOP LOOKIN AT MY COOOOODEEEEE >:((
//btw na tenhle level se bude hodit google nebo tuzka a papir :p

const AKTUALNI_LEVEL = 3;
const TAJNE_HESLO = "honey";

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

function magic() {
    const zpravaElem = document.getElementById("zprava");
    if (zpravaElem) {
        zpravaElem.innerText = "742913";
        zpravaElem.style.display = "block";
    }
}

function levelUp() {
    const nextLvl = AKTUALNI_LEVEL + 1;
    localStorage.setItem('levelUp', nextLvl);
    window.location.href = `../${nextLvl}/level${nextLvl}.html`;
}