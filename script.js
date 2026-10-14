const translations = {
    en: {
        greeting: "Hello, I'm Trighy / Oryn!",
        subtitle: "Autistic, INFJ, Straight, White, Male.",
        description: "Welcome to my little refuge on the internet! Here I'll guide you through my interests and who I am. Feel free to look around, you're welcome!",
        gamesTitle: "Games",
        favoritesGames: "My Favorites",
        moviesTitle: "Movies",
        favoritesMovies: "My Favorites",
        seriesTitle: "Series",
        favoritesSeries: "My Favorites",
        animesTitle: "Anime",
        favoritesAnimes: "My Favorites",
        booksTitle: "Books & Manga",
        favoritesBooks: "My Favorites"
    },
    pt: {
        greeting: "Olá, eu sou Trighy / Oryn!",
        subtitle: "Autista, INFJ, Hétero, Branco, Homem.",
        description: "Bem-vindo ao meu pequeno refúgio na internet! Aqui vou te guiar pelos meus interesses e quem eu sou. Fique à vontade para olhar em volta, seja bem-vindo!",
        gamesTitle: "Jogos",
        favoritesGames: "Meus Favoritos",
        moviesTitle: "Filmes",
        favoritesMovies: "Meus Favoritos",
        seriesTitle: "Séries",
        favoritesSeries: "Meus Favoritos",
        animesTitle: "Anime",
        favoritesAnimes: "Meus Favoritos",
        booksTitle: "Livros & Mangás",
        favoritesBooks: "Meus Favoritos"
    },
    es: {
        greeting: "¡Hola, soy Trighy / Oryn!",
        subtitle: "Autista, INFJ, Hetero, Blanco, Hombre.",
        description: "¡Bienvenido a mi pequeño refugio en internet! Aquí te guiaré por mis intereses y quién soy. Siéntete libre de mirar a tu alrededor, ¡eres bienvenido!",
        gamesTitle: "Juegos",
        favoritesGames: "Mis Favoritos",
        moviesTitle: "Películas",
        favoritesMovies: "Mis Favoritos",
        seriesTitle: "Series",
        favoritesSeries: "Mis Favoritos",
        animesTitle: "Anime",
        favoritesAnimes: "Mis Favoritos",
        booksTitle: "Libros y Manga",
        favoritesBooks: "Mis Favoritos"
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

// =========================================================
// BANCO DE DADOS DE TRAILERS TESTADOS (SEM BLOQUEIO DE IFRAME)
// =========================================================
const verifiedTrailers = {
    // Jogos
    "ori and the will of the wisps": "2reK8k84428",
    "outer wilds": "d6LGNVCL13A",
    "oneshot": "Z_3tF19-5K8",
    "spiritfarer": "48X2E1s8_80",
    
    // Filmes
    "the wild robot": "67vbA5ZJ43M",
    "monster": "c62f2O7L-qM",
    "puss in boots: the last wish": "RqrXhwS333U",

    // Séries
    "gravity falls": "X2DUpD66S68",
    "amphibia": "99s1S6n8mS4",
    "the owl house": "3d9Jg0h4d_U",

    // Animes
    "bna brand new animal": "d1aJ5jL0g7c",
    "kill la kill": "83M8N7R46R0"
};

let videoQueue = [];
let currentTrailerIndex = 0;
let youtubePlayer = null;

// Extrai os títulos do HTML e seleciona os vídeos
function buildTrailerPlaylist() {
    const images = document.querySelectorAll('.favorites-grid img');
    const detectedTitles = [];

    images.forEach(img => {
        const alt = img.getAttribute('alt');
        if (alt && !alt.match(/^(Jogo|Filme|Serie|Anime|Livro)\s*\d+$/i)) {
            detectedTitles.push(alt.trim());
        }
    });

    // Mapeia para os IDs do banco de dados
    detectedTitles.forEach(title => {
        const cleanKey = title.toLowerCase();
        if (verifiedTrailers[cleanKey]) {
            videoQueue.push({
                title: title,
                videoId: verifiedTrailers[cleanKey]
            });
        }
    });

    // Embaralha a ordem para não rodar sempre na mesma sequência
    videoQueue.sort(() => Math.random() - 0.5);

    if (videoQueue.length > 0) {
        initYouTubePlayer();
    } else {
        const badge = document.getElementById('trailer-title-badge');
        if (badge) badge.style.display = 'none';
    }
}

// Inicializa o Player
function initYouTubePlayer() {
    if (window.YT && window.YT.Player) {
        onYouTubeIframeAPIReady();
    } else {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
}

function onYouTubeIframeAPIReady() {
    youtubePlayer = new YT.Player('player', {
        videoId: videoQueue[0].videoId,
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'mute': 1,             // Mudo para permitir autoplay no navegador
            'loop': 0,
            'showinfo': 0,
            'rel': 0,
            'modestbranding': 1,
            'playsinline': 1
        },
        events: {
            'onReady': (event) => {
                event.target.playVideo();
                updateTrailerBadge();
            },
            'onStateChange': (event) => {
                // Se der erro ou o vídeo terminar, pula para o próximo trailer
                if (event.data === YT.PlayerState.ENDED) {
                    playNextTrailer();
                }
            },
            'onError': (event) => {
                console.warn("Vídeo com erro/restrição. Pulando para o próximo...", event.data);
                playNextTrailer();
            }
        }
    });
}

function playNextTrailer() {
    currentTrailerIndex = (currentTrailerIndex + 1) % videoQueue.length;
    if (youtubePlayer && youtubePlayer.loadVideoById) {
        youtubePlayer.loadVideoById(videoQueue[currentTrailerIndex].videoId);
        updateTrailerBadge();
    }
}

function updateTrailerBadge() {
    const badge = document.getElementById("current-trailer-name");
    if (badge && videoQueue[currentTrailerIndex]) {
        badge.innerText = videoQueue[currentTrailerIndex].title;
    }
}

// ==========================================
// INICIALIZAÇÃO DA PÁGINA
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.container');
    if (container) {
        setTimeout(() => container.classList.add('visible'), 100);
    }

    // Controle da Música de Fundo
    const music = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicToggle");

    if (music && musicBtn) {
        const icon = musicBtn.querySelector("i");
        let isPlaying = false;
        music.volume = 0.75; 

        musicBtn.addEventListener("click", () => {
            if (isPlaying) {
                music.pause();
                icon.className = "fas fa-music";
                isPlaying = false;
            } else {
                music.play().then(() => {
                    icon.className = "fas fa-pause";
                    isPlaying = true;
                }).catch(error => {
                    console.error("Erro ao tocar áudio:", error);
                });
            }
        });
    }

    // Inicia a playlist de trailers
    buildTrailerPlaylist();
});