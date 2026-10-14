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

// ==========================================
// ALGORITMO AUTOMÁTICO DE TRAILERS DE FUNDO
// ==========================================

// Mapeamento prévio de emergência para resposta instantânea
const fallbackTrailers = {
    "ori and the will of the wisps": "c0i88t0K_A8",
    "outer wilds": "d6LGNVCL13A",
    "oneshot": "Z_3tF19-5K8",
    "spiritfarer": "48X2E1s8_80",
    "the wild robot": "67vbA5ZJ43M",
    "monster": "93jF7sB5N3E",
    "puss in boots: the last wish": "RqrXhwS333U",
    "gravity falls": "X2DUpD66S68",
    "amphibia": "99s1S6n8mS4",
    "the owl house": "3d9Jg0h4d_U",
    "bna brand new animal": "d1aJ5jL0g7c",
    "kill la kill": "83M8N7R46R0"
};

let playlistItems = [];
let videoQueue = [];
let currentTrailerIndex = 0;
let youtubePlayer = null;

// Captura todos os títulos das imagens do HTML automaticamente
function extractFavoritesFromPage() {
    const images = document.querySelectorAll('.favorites-grid img');
    const titles = [];

    images.forEach(img => {
        const alt = img.getAttribute('alt');
        // Ignora marcadores genéricos (ex: "Jogo 2", "Filme 3")
        if (alt && !alt.match(/^(Jogo|Filme|Serie|Anime|Livro)\s*\d+$/i)) {
            titles.push(alt.trim());
        }
    });

    return [...new Set(titles)]; // Remove duplicados se houver
}

// Busca o trailer no YouTube via API pública do Invidious
async function fetchYouTubeTrailerId(title) {
    // 1. Tenta pegar do fallback local instantâneo
    const cleanKey = title.toLowerCase();
    if (fallbackTrailers[cleanKey]) {
        return fallbackTrailers[cleanKey];
    }

    // 2. Se não estiver no fallback, faz a busca dinâmica sem chave de API
    try {
        const query = encodeURIComponent(`${title} official trailer`);
        const res = await fetch(`https://invidious.api.store/api/v1/search?q=${query}&type=video`);
        if (res.ok) {
            const data = await res.json();
            if (data && data.length > 0) {
                return data[0].videoId;
            }
        }
    } catch (e) {
        console.warn(`Não foi possível buscar o trailer dinâmico para: ${title}`, e);
    }

    return null;
}

// Prepara a fila de vídeos
async function buildTrailerPlaylist() {
    playlistItems = extractFavoritesFromPage();
    
    // Embaralha para que a ordem dos trailers mude a cada visita à página
    playlistItems.sort(() => Math.random() - 0.5);

    for (const title of playlistItems) {
        const videoId = await fetchYouTubeTrailerId(title);
        if (videoId) {
            videoQueue.push({ title, videoId });
        }
    }

    if (videoQueue.length > 0) {
        initYouTubePlayer();
    } else {
        document.getElementById('trailer-title-badge').style.display = 'none';
    }
}

// Carrega a API do YouTube
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
            'mute': 1,             // Mudo por padrão para o navegador autorizar o Autoplay
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
                // Quando o vídeo atual termina, toca o próximo
                if (event.data === YT.PlayerState.ENDED) {
                    currentTrailerIndex = (currentTrailerIndex + 1) % videoQueue.length;
                    youtubePlayer.loadVideoById(videoQueue[currentTrailerIndex].videoId);
                    updateTrailerBadge();
                }
            }
        }
    });
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
                    alert("Verifique se o arquivo musica.mp3 foi enviado com esse nome exato!");
                });
            }
        });
    }

    // Inicia a geração da fila de trailers
    buildTrailerPlaylist();
});