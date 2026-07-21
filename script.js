const TAJNE_HESLO = "Inkognito Levhart Yódluje";

function overHeslo(){
    const zadaneHeslo = document.getElementById("heslo1").value.trim();
    const zpravaElem = document.getElementById("zprava");

    if(zadaneHeslo==TAJNE_HESLO){
        window.location.href = "2/level2.html";
    }
    else{
        zpravaElem.innerText = ":(";
    }
}