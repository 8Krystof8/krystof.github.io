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

// Parallax effect for hero background
const heroSection = document.querySelector(".hero");
if (heroSection) {
    window.addEventListener("scroll", () => {
        heroSection.style.backgroundPositionY = window.scrollY * 0.5 + "px";
    });
}

// Theme toggle
const themeToggleBtn = document.getElementById("themeToggle");
if (themeToggleBtn) {
    const saved = localStorage.getItem("theme") || "dark";
    document.body.classList.toggle("light-theme", saved === "light");
    themeToggleBtn.textContent = saved === "light" ? "🌙" : "☀️";
    themeToggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
        const light = document.body.classList.contains("light-theme");
        themeToggleBtn.textContent = light ? "🌙" : "☀️";
        localStorage.setItem("theme", light ? "light" : "dark");
    });
}

// Validace kontaktního formuláře
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
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

// Tilt efekt pro projekty
if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll('.project-item'), {
        max: 15,
        speed: 300,
        glare: true,
        'max-glare': 0.2
    });
}

// Interaktivní síť projektů
function initProjectNetwork() {
    const canvas = document.getElementById('projectNetwork');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const projects = [
        { name: 'Tribity', link: 'tribity.html' },
        { name: 'Chytré Podlahy', link: 'chytre-podlahy.html' },
        { name: 'Smart Bin', link: 'smart-bin.html' }
    ];
    function resize() {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const nodes = projects.map(p => ({
        ...p,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: 8
    }));
    const mouse = { x: 0, y: 0 };
    canvas.addEventListener('mousemove', e => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });
    canvas.addEventListener('click', e => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        for (const node of nodes) {
            const d = Math.hypot(node.x - x, node.y - y);
            if (d < node.r + 5) {
                window.location.href = node.link;
                return;
            }
        }
    });

    function update() {
        for (const node of nodes) {
            node.x += node.vx;
            node.y += node.vy;
            if (node.x < node.r || node.x > canvas.width - node.r) node.vx *= -1;
            if (node.y < node.r || node.y > canvas.height - node.r) node.vy *= -1;
        }
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const a = nodes[i];
                const b = nodes[j];
                const dist = Math.hypot(a.x - b.x, a.y - b.y);
                if (dist < 200) {
                    ctx.strokeStyle = `rgba(0,188,212,${1 - dist / 200})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.stroke();
                }
            }
        }
        for (const node of nodes) {
            const hovered = Math.hypot(node.x - mouse.x, node.y - mouse.y) < node.r + 8;
            ctx.fillStyle = hovered ? '#ffffff' : '#00bcd4';
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.r + (hovered ? 2 : 0), 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#ffffff';
            ctx.font = '14px Roboto';
            ctx.fillText(node.name, node.x + node.r + 4, node.y + 4);
        }
    }

    function loop() {
        update();
        draw();
        requestAnimationFrame(loop);
    }
    loop();
}
document.addEventListener('DOMContentLoaded', initProjectNetwork);

// Jazykové proměnné
let currentLang = localStorage.getItem('language') || 'cs';
const languageIcon = document.getElementById('languageIcon');
const languageOptions = document.querySelector('.language-options');

// Přepnutí jazyka
languageIcon.addEventListener('click', () => {
    languageOptions.classList.toggle('show');
});

languageOptions.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const selectedLang = e.target.getAttribute('data-lang');
        setLanguage(selectedLang);
        languageOptions.classList.remove('show');
    }
});

// Načtení jazykových souborů
function setLanguage(lang) {
    fetch(`lang/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            currentLang = lang;
            localStorage.setItem('language', lang);
            document.querySelectorAll('[data-key]').forEach(element => {
                const key = element.getAttribute('data-key');
                if (data[key]) {
                    element.innerHTML = data[key];
                }
            });
            document.documentElement.lang = lang;

            // Aktualizace placeholderů
            document.querySelectorAll('input, textarea, select').forEach(element => {
                const key = element.getAttribute('data-key');
                if (data[key]) {
                    element.placeholder = data[key];
                }
                if (element.tagName === 'SELECT') {
                    element.options.forEach(option => {
                        const optionKey = option.getAttribute('data-key');
                        if (data[optionKey]) {
                            option.textContent = data[optionKey];
                        }
                    });
                }
            });
        });
}

// Načtení výchozího jazyka
setLanguage(currentLang);

// Uložení zvoleného jazyka při změně stránky
window.addEventListener('load', () => {
    setLanguage(currentLang);
});
