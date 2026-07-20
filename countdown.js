const dead = new Date("2026-07-23T19:00:00").getTime();

const countInterval = setInterval(function() {
    const ted = new Date().getTime();
    const rozdil = dead - ted;

    const dny = Math.floor(rozdil / (1000 * 60 * 60 * 24));
    const hodiny = Math.floor((rozdil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minuty = Math.floor((rozdil % (1000 * 60 * 60)) / (1000 * 60));
    const sekundy = Math.floor((rozdil % (1000 * 60)) / 1000);

    const formatuj = (cislo) => (cislo < 10 ? "0" + cislo : cislo);

    if (rozdil <= 0) {
        clearInterval(countInterval);
        window.location.href = "level3.html";
    }

    if (dny > 0) {
        document.getElementById("timer").innerText = 
            `${dny}d ${formatuj(hodiny)}:${formatuj(minuty)}:${formatuj(sekundy)}`;
    } else {
        document.getElementById("timer").innerText = 
            `${formatuj(hodiny)}:${formatuj(minuty)}:${formatuj(sekundy)}`;
    }
}, 1000);