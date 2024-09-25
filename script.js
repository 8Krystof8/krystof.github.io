// Burger Menuu
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

// Navigační lišta skrývání/přidání
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;
});

// Validace formuláře
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
