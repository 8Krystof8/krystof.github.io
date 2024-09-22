document.addEventListener("DOMContentLoaded", function () {
    const spaceContainer = document.createElement("div");
    spaceContainer.classList.add("space-container");
    document.body.appendChild(spaceContainer);

    // Adding space objects
    const planet1 = document.createElement("div");
    planet1.classList.add("space-object", "planet", "planet1");
    spaceContainer.appendChild(planet1);

    const planet2 = document.createElement("div");
    planet2.classList.add("space-object", "planet", "planet2");
    spaceContainer.appendChild(planet2);

    const blackhole = document.createElement("div");
    blackhole.classList.add("space-object", "blackhole");
    spaceContainer.appendChild(blackhole);

    const galaxy = document.createElement("div");
    galaxy.classList.add("space-object", "galaxy");
    spaceContainer.appendChild(galaxy);

    const orbit = document.createElement("div");
    orbit.classList.add("space-object", "orbit");
    spaceContainer.appendChild(orbit);
});
