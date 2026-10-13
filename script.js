const translations = {
    en: {
        greeting: "Hello, I'm Trighy / Oryn!",
        subtitle: "Autistic, INFJ, Straight, White, Male.",
        description: "Welcome to my little refuge on the internet! Here I'll guide you through my interests and who I am. Feel free to look around, you're welcome!"
    },
    pt: {
        greeting: "Olá, eu sou Trighy / Oryn!",
        subtitle: "Autista, INFJ, Hétero, Branco, Homem.",
        description: "Bem-vindo ao meu pequeno refúgio na internet! Aqui vou te guiar pelos meus interesses e quem eu sou. Fique à vontade para olhar em volta, seja bem-vindo!"
    },
    es: {
        greeting: "¡Hola, soy Trighy / Oryn!",
        subtitle: "Autista, INFJ, Hetero, Blanco, Hombre.",
        description: "¡Bienvenido a mi pequeño refugio en internet! Aquí te guiaré por mis intereses y quién soy. Siéntete libre de mirar a tu alrededor, ¡eres bienvenido!"
    }
};

function changeLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.style.opacity = 0;
            setTimeout(() => {
                element.textContent = translations[lang][key];
                element.style.opacity = 1;
            }, 200);
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.container');
    if (container) {
        setTimeout(() => container.classList.add('visible'), 100);
    }

    const music = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicToggle");
    const icon = musicBtn.querySelector("i");
    let isPlaying = false;

    if (music) {
        music.volume = 0.3;
        
        musicBtn.addEventListener("click", () => {
            if (isPlaying) {
                music.pause();
                icon.classList.remove("fa-pause");
                icon.classList.add("fa-music");
                isPlaying = false;
            } else {
                let playPromise = music.play();
                
                if (playPromise !== undefined) {
                    playPromise.then(_ => {
                        icon.classList.remove("fa-music");
                        icon.classList.add("fa-pause");
                        isPlaying = true;
                    })
                    .catch(error => {
                        console.error("Erro ao reproduzir a música:", error);
                        alert("Não foi possível tocar a música. Verifique se o nome do arquivo musica.flac está exatamente igual no GitHub!");
                    });
                }
            }
        });
    }