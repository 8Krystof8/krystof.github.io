// Burger Menu
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// Hladké scrollování
const navLinksItems = document.querySelectorAll('.nav-links a');

navLinksItems.forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.hash !== "" && link.pathname === window.location.pathname) {
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

// Navigační lišta změna velikosti při scrollování
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Validace kontaktního formuláře
document.getElementById('contactForm').addEventListener('submit', function(e) {
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

// Validace objednávkového formuláře
const webOrderForm = document.getElementById('webOrderForm');
if (webOrderForm) {
    webOrderForm.addEventListener('submit', function(e) {
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
        if (type === '') {
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

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Inicializace AOS
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true
});
