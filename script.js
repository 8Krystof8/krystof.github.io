// Burger Menu
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    // Animace burgeru
    burger.classList.toggle('toggle');
});

// Hladké scrollování
const navLinksItems = document.querySelectorAll('.nav-links a');

navLinksItems.forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.hash !== "") {
            e.preventDefault();
            const hash = link.hash;

            document.querySelector(hash).scrollIntoView({
                behavior: 'smooth'
            });

            navLinks.classList.remove('nav-active');
            burger.classList.remove('toggle');
        }
    });
});

// Dark Mode Toggle
const toggleSwitch = document.getElementById('darkModeToggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.body.classList.add(currentTheme);

    if (currentTheme === 'light-mode') {
        toggleSwitch.checked = true;
    }
}

toggleSwitch.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');

    let theme = 'dark-mode';
    if (document.body.classList.contains('light-mode')) {
        theme = 'light-mode';
    }
    localStorage.setItem('theme', theme);
});

// Inicializace AOS
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true
});
