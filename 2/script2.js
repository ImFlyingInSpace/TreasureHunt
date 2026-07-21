//tenhle level neni o divani se do zdrojaku btw :p
const TAJNE_HESLO = "bWhudWFmdWw=";

function overHeslo(){
    const zadaneHeslo = document.getElementById("heslo2").value.trim();
    const hh = atob(TAJNE_HESLO);
    let sh = "";
    for(let i = 0; i< hh.length; i += 2){
        sh += hh[i]; 
    }
    const zpravaElem = document.getElementById("zprava");

    if(zadaneHeslo=== sh){
        window.location.href = "../3/level3.html";
    }
    else{
        zpravaElem.innerText = ":(";
    }
}