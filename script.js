// ... předchozí kód ...

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

// Optimalizace výkonu: Minifikace souborů
// Pro minifikaci můžete použít nástroje jako Terser pro JavaScript a csso-cli pro CSS
// Například: npx terser script.js -o dist/script.min.js
//            npx csso styles.css -o dist/styles.min.css

// Lazy Loading obrázků
const images = document.querySelectorAll('img');

const options = {
    rootMargin: '0px',
    threshold: 0.1
};

function handleImg(myImg, observer) {
    myImg.forEach(myImgSingle => {
        if (myImgSingle.isIntersecting) {
            myImgSingle.target.src = myImgSingle.target.getAttribute('data-src');
            observer.unobserve(myImgSingle.target);
        }
    });
}

const observer = new IntersectionObserver(handleImg, options);

images.forEach(img => {
    observer.observe(img);
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

// ... zbytek kódu ...
