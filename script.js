// Burger Menu
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    // Animace burgeru
    burger.classList.toggle('toggle');
});

// Animace při scrollování
const skills = document.querySelectorAll('.skill-progress span');

window.addEventListener('scroll', () => {
    let skillsSection = document.querySelector('.skills').offsetTop;
    let screenPosition = window.innerHeight + window.scrollY;

    if (screenPosition > skillsSection) {
        skills.forEach(skill => {
            let skillLevel = skill.style.width;
            skill.style.width = skill.getAttribute('style').match(/width:\s*(\d+%)/)[1];
        });
    }
});

// Hladké scrollování
const navLinksItems = document.querySelectorAll('.nav-links a');

navLinksItems.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        navLinks.classList.remove('nav-active');
        burger.classList.remove('toggle');
    });
});
