// Jazykové proměnné
let currentLang = 'cs';
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
            document.querySelectorAll('[data-key]').forEach(element => {
                const key = element.getAttribute('data-key');
                if (data[key]) {
                    element.innerHTML = data[key];
                }
            });
            document.documentElement.lang = lang;
        });
}

// Načtení výchozího jazyka
setLanguage(currentLang);
