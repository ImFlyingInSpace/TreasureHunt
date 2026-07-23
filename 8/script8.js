// a1 to e3 = a1e3

const AKTUALNI_LEVEL = 8;
const TAJNE_HESLO = "e2h5b7e4h1g1c5b5";

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