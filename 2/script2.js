//tenhle level neni o divani se do zdrojaku btw :p
const AKTUALNI_LEVEL = 2;
const TAJNE_HESLO = "bWhudWFmdWw=";

let dosazenyLvl = localStorage.getItem('levelUp');
if (!dosazenyLvl || Number(dosazenyLvl) < AKTUALNI_LEVEL){
    alert("Nuh-uh-uhhhh")
    window.location.href = '../index.html';
}
document.addEventListener("DOMContentLoaded", () => {
    const cisloLvl = document.querySelector(".lvlNo");
    if (cisloLvl) {
        cisloLvl.innerText = AKTUALNI_LEVEL;
    }
});
function overHeslo(){
    const zadaneHeslo = document.getElementById("heslo").value.trim();
    const hh = atob(TAJNE_HESLO);
    let sh = "";
    for(let i = 0; i< hh.length; i += 2){
        sh += hh[i]; 
    }
    const zpravaElem = document.getElementById("zprava");

    if(zadaneHeslo=== sh){
        levelUp();
    }
    else{
        zpravaElem.innerText = ":(";
    }
}
function levelUp(){
    const nextLvl = AKTUALNI_LEVEL + 1;
    localStorage.setItem('levelUp', nextLvl);
    window.location.href = `../${nextLvl}/level${nextLvl}.html`;
}