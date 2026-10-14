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
// TRAILERS COM INCORPORAÇÃO LIBERADA PELO YOUTUBE
// =========================================================
const verifiedTrailers = {
    // Jogos
    "ori and the will of the wisps": "kd0zbNw1VOg&t",
    // "outer wilds": "d6LGNVCL13A",
    // "oneshot": "Z_3tF19-5K8",
    // "spiritfarer": "48X2E1s8_80",
    
    // Filmes
    // "the wild robot": "ySCcyseywK0",
    // "monster": "c62f2O7L-qM",
    // "puss in boots: the last wish": "RqrXhwS333U",

    // Séries
    // "gravity falls": "X2DUpD66S68",
    // "amphibia": "99s1S6n8mS4",
    // "the owl house": "3d9Jg0h4d_U",

    // Animes
    // "bna brand new animal": "d1aJ5jL0g7c",
    // "kill la kill": "83M8N7R46R0"
};

let videoQueue = [];
let currentTrailerIndex = 0;
let youtubePlayer = null;
let isSwitchingVideo = false;

// Extrai os títulos das imagens
function buildTrailerPlaylist() {
    const images = document.querySelectorAll('.favorites-grid img');
    const detectedTitles = [];

    images.forEach(img => {
        const alt = img.getAttribute('alt');
        if (alt && !alt.match(/^(Jogo|Filme|Serie|Anime|Livro)\s*\d+$/i)) {
            detectedTitles.push(alt.trim());
        }
    });

    detectedTitles.forEach(title => {
        const cleanKey = title.toLowerCase();
        if (verifiedTrailers[cleanKey]) {
            videoQueue.push({
                title: title,
                videoId: verifiedTrailers[cleanKey]
            });
        }
    });

    // Randomiza a ordem dos trailers
    videoQueue.sort(() => Math.random() - 0.5);

    if (videoQueue.length > 0) {
        initYouTubePlayer();
    } else {
        const badge = document.getElementById('trailer-title-badge');
        if (badge) badge.style.display = 'none';
    }
}

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
            'mute': 1,
            'loop': 0,
            'showinfo': 0,
            'rel': 0,
            'modestbranding': 1,
            'playsinline': 1,
            'enablejsapi': 1,
            'origin': window.location.origin
        },
        events: {
            'onReady': (event) => {
                event.target.playVideo();
                updateTrailerBadge();
            },
            'onStateChange': (event) => {
                if (event.data === YT.PlayerState.ENDED) {
                    playNextTrailer();
                }
            },
            'onError': (event) => {
                console.warn(`Erro no vídeo [${event.data}]. Aguardando antes de trocar...`);
                if (!isSwitchingVideo) {
                    isSwitchingVideo = true;
                    setTimeout(() => {
                        playNextTrailer();
                        isSwitchingVideo = false;
                    }, 1500);
                }
            }
        }
    });
}

function playNextTrailer() {
    if (videoQueue.length === 0) return;
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
// CONTROLES DO TRAILER: SOM & MODO CINEMA
// ==========================================

// 1. Alternar Som do Trailer (E pausar a música de fundo para não encavalar)
const trailerSoundBtn = document.getElementById("trailerSoundToggle");
let isTrailerMuted = true;

if (trailerSoundBtn) {
    trailerSoundBtn.addEventListener("click", () => {
        if (!youtubePlayer) return;

        const icon = trailerSoundBtn.querySelector("i");
        const bgMusic = document.getElementById("bgMusic");

        if (isTrailerMuted) {
            // Desmuta o trailer
            youtubePlayer.unMute();
            youtubePlayer.setVolume(80);
            icon.className = "fas fa-volume-up";
            isTrailerMuted = false;

            // Se a música de fundo estiver tocando, pausa ela pra ouvir o trailer
            if (bgMusic && !bgMusic.paused) {
                bgMusic.pause();
                const musicBtnIcon = document.querySelector("#musicToggle i");
                if (musicBtnIcon) musicBtnIcon.className = "fas fa-music";
            }
        } else {
            // Muta o trailer
            youtubePlayer.mute();
            icon.className = "fas fa-volume-mute";
            isTrailerMuted = true;
        }
    });
}

// 2. Modo Cinema (Esconder / Mostrar Interface)
const cinemaBtn = document.getElementById("cinemaModeToggle");
if (cinemaBtn) {
    cinemaBtn.addEventListener("click", () => {
        document.body.classList.toggle("cinema-mode");
        
        const icon = cinemaBtn.querySelector("i");
        if (document.body.classList.contains("cinema-mode")) {
            icon.className = "fas fa-compress"; // Ícone de restaurar
        } else {
            icon.className = "fas fa-expand";   // Ícone de expandir
        }
    });
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.container');
    if (container) {
        setTimeout(() => container.classList.add('visible'), 100);
    }

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

    buildTrailerPlaylist();
});