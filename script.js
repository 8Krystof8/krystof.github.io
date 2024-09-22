document.addEventListener("DOMContentLoaded", function () {
    const spaceContainer = document.createElement("div");
    spaceContainer.classList.add("space-container");
    document.body.appendChild(spaceContainer);

    // Planets and small stars
    for (let i = 0; i < 10; i++) {
        const planet = document.createElement("div");
        planet.classList.add("planet");
        planet.style.left = `${Math.random() * 100}vw`;
        planet.style.top = `${Math.random() * 80}vh`;
        spaceContainer.appendChild(planet);
    }
});
