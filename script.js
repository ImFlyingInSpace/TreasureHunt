const AKTUALNI_LEVEL = 1;
const TAJNE_HESLO = "Inkognito Levhart Yódluje";

document.addEventListener("DOMContentLoaded", () => {
    const cisloLvl = document.querySelector(".lvlNo");
    if (cisloLvl) {
        cisloLvl.innerText = AKTUALNI_LEVEL;
    }
});
function overHeslo(){
    const zadaneHeslo = document.getElementById("heslo").value.trim();
    const zpravaElem = document.getElementById("zprava");

    if(zadaneHeslo==TAJNE_HESLO){
        levelUp();
    }
    else{
        zpravaElem.innerText = ":(";
    }
}
function levelUp(){
    const nextLvl = AKTUALNI_LEVEL + 1;
    localStorage.setItem('levelUp', nextLvl);
    window.location.href = `${nextLvl}/level${nextLvl}.html`;
}