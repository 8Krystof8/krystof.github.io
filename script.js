document.addEventListener("DOMContentLoaded", function () {
    const spaceContainer = document.createElement("div");
    spaceContainer.classList.add("space-container");
    document.body.appendChild(spaceContainer);

    // Create planets and other space objects
    const createSpaceObject = (className, left, top) => {
        const spaceObject = document.createElement("div");
        spaceObject.classList.add("space-object", className);
        spaceObject.style.left = `${left}%`;
        spaceObject.style.top = `${top}%`;
        return spaceObject;
    };

    const planet1 = createSpaceObject("planet", 15, 10);
    const planet2 = createSpaceObject("planet", 60, 50);
    const blackhole = createSpaceObject("blackhole", 30, 70);
    const galaxy = createSpaceObject("galaxy", 80, 20);

    spaceContainer.appendChild(planet1);
    spaceContainer.appendChild(planet2);
    spaceContainer.appendChild(blackhole);
    spaceContainer.appendChild(galaxy);
});
