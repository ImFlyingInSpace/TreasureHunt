function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
        sidebar.classList.toggle("open");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const levelList = document.getElementById("levelList");
    
    if (levelList) {
        const maxLevel = Number(localStorage.getItem('levelUp')) || 1;

        for (let i = 1; i <= maxLevel; i++) {
            const li = document.createElement("li");
            const a = document.createElement("a");
            
            // Odkaz na level
            a.href = `../${i}/level${i}.html`;
            a.innerText = `Level ${i}`;

            // POROVNÁNÍ ČÍSEL: Pokud se číslo i shoduje s AKTUALNI_LEVEL, zvýrazníme ho!
            if (typeof AKTUALNI_LEVEL !== "undefined" && Number(AKTUALNI_LEVEL) === i) {
                a.classList.add("active");
            }

            li.appendChild(a);
            levelList.appendChild(li);
        }
    }
});