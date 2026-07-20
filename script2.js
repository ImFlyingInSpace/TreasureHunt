const TAJNE_HESLO = "bW5hdQ==";

function overHeslo(){
    const zadaneHeslo = document.getElementById("heslo2").value.trim();
    const zpravaElem = document.getElementById("zprava");

    if(zadaneHeslo==atob(TAJNE_HESLO)){
        window.location.href = "countdown.html";
    }
    else{
        zpravaElem.innerText = ":(";
    }
}