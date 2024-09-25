// Funkce pro odhalení sekcí při scrollování
function revealSections() {
    const sections = document.querySelectorAll('.section');
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < windowHeight - revealPoint) {
            section.classList.add('show');
        }
    });
}

window.addEventListener('scroll', revealSections);

// Inicializace při načtení stránky
document.addEventListener('DOMContentLoaded', () => {
    revealSections();
});
