document.addEventListener("DOMContentLoaded", function () {
    const starsContainer = document.createElement("div");
    starsContainer.classList.add("stars");
    document.body.appendChild(starsContainer);

    // Planets in the background
    const planet1 = document.createElement("div");
    planet1.classList.add("planet", "planet1");
    starsContainer.appendChild(planet1);

    const planet2 = document.createElement("div");
    planet2.classList.add("planet", "planet2");
    starsContainer.appendChild(planet2);
});
