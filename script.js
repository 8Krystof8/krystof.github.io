// Burger Menu
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

if (burger && navLinks) {
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
}

// Smooth scrolling to internal sections
const navLinksItems = document.querySelectorAll('.nav-links a');
navLinksItems.forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.hash && link.pathname === window.location.pathname) {
            e.preventDefault();
            const target = document.querySelector(link.hash);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
            // close mobile menu if open
            navLinks.classList.remove('nav-active');
            burger.classList.remove('toggle');
        }
    });
});

// Navbar shrink on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        document.body.classList.add('light-mode');
    }
    themeToggle.textContent = currentTheme === 'light' ? '🌙' : '☀️';
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        themeToggle.textContent = isLight ? '🌙' : '☀️';
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
}

// Contact form validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        let valid = true;
        const name = this.jmeno.value.trim();
        const email = this.email.value.trim();
        const message = this.zprava.value.trim();

        if (name === '') {
            alert('Prosím, zadejte své jméno.');
            valid = false;
        }
        if (email === '' || !validateEmail(email)) {
            alert('Prosím, zadejte platný email.');
            valid = false;
        }
        if (message === '') {
            alert('Prosím, napište zprávu.');
            valid = false;
        }
        if (!valid) {
            e.preventDefault();
        }
    });
}

// Web order form validation (used on weby.html)
const webOrderForm = document.getElementById('webOrderForm');
if (webOrderForm) {
    webOrderForm.addEventListener('submit', function (e) {
        let valid = true;
        const name = this.jmeno.value.trim();
        const email = this.email.value.trim();
        const type = this.typ_webu.value;
        const requirements = this.pozadavky.value.trim();

        if (name === '') {
            alert('Prosím, zadejte své jméno.');
            valid = false;
        }
        if (email === '' || !validateEmail(email)) {
            alert('Prosím, zadejte platný email.');
            valid = false;
        }
        if (!type) {
            alert('Prosím, vyberte typ webu.');
            valid = false;
        }
        if (requirements === '') {
            alert('Prosím, napište své požadavky.');
            valid = false;
        }
        if (!valid) {
            e.preventDefault();
        }
    });
}

// Email validation helper
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Inicializace AOS animací
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
});

// Inicializace VanillaTilt pro projektové karty
if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll('.project-item'), {
        max: 15,
        speed: 300,
        glare: true,
        'max-glare': 0.2,
    });
}