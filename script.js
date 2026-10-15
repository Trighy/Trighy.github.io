// ==========================================
// BANCO DE DADOS DE ANÁLISES E LINKS
// ==========================================
// O nome do jogo aqui deve ser exatamente igual ao que está no "alt" da imagem no HTML (em letras minúsculas)
const itemsDatabase = {
    "ori and the will of the wisps": {
        links: {
            steam: "https://store.steampowered.com/app/1057090/",
            xbox: "https://www.xbox.com/pt-BR/games/store/ori-and-the-will-of-the-wisps/9N8CD0XZKLP4",
            ps: null, // Colocar "null" faz o botão desaparecer (pois Ori não tem no PS)
            nin: "https://www.nintendo.com/pt-br/store/products/ori-and-the-will-of-the-wisps-switch/"
        },
        review: {
            en: "This game is very special to me; honestly, I don’t even know where to begin explaining it. It is, without a doubt, my all-time favorite game—I even have a tattoo of Ori on my right forearm! This game—this game right here—made me realize things I had been questioning myself about; it prompted me to think and reflect during my darkest moments. If I had to ask everyone in my life to play just one single game, this would definitely be the one.",
            pt: "Esse jogo é muito especial para mim, sinceramente nem sei por onde começar á explicar ele, ele é certamente meu jogo favorito para sempre, tenho até uma tatugem do Ori no meu antebraço direito! Esse jogo, esse jogo aqui me fez perceber coisas que eu mesmo me questionava, me fez pensar e refletir nos meus momentos mais escuros, se for para eu escolher para pedir todo mundo da minha vida jogar um único jogo, séria certamente esse.",
            es: "Este juego es muy especial para mí; sinceramente, ni siquiera sé por dónde empezar a explicarlo. Es, sin duda, mi juego favorito de todos los tiempos; ¡incluso tengo un tatuaje de Ori en mi antebrazo derecho! Este juego —sí, este juego— me hizo darme cuenta de cosas que yo mismo me cuestionaba; me llevó a pensar y reflexionar durante mis momentos más oscuros. Si tuviera que pedirle a todas las personas de mi vida que jugaran a un solo título, sin duda elegiría este."
        }
    },
    "oneshot": {
        links: {
            steam: "https://store.steampowered.com/app/420530/OneShot/",
            xbox: "https://www.xbox.com/games/store/oneshot-world-machine-edition/9p8pqw389q60",
            ps: "https://store.playstation.com/product/UP4127-CUSA34845_00-ONESHOTWMEUS0000", 
            nin: "https://www.nintendo.com/store/products/oneshot-world-machine-edition-switch/" 
        },
        review: {
            en: "OneShot is a surreal top down Puzzle/Adventure game with unique gameplay capabilities...",
            pt: "Oneshot é surreal. A mecânica de quebrar a quarta parede e o fato de que você tem apenas uma chance torna tudo muito especial.",
            es: "OneShot es un juego surrealista de aventuras y rompecabezas..."
        }
    },
    "the wild robot": {
        links: {
            imdb: "https://www.imdb.com/title/tt29623480/",
        },
        review: {
            en: "Teste ingles",
            pt: "Teste portugues brasileiro",
            es: "Teste espanhol"
        }
    },
    // Para adicionar mais jogos, filmes ou séries, basta copiar a estrutura acima, colocar uma vírgula e colar!
};

// ==========================================
// SISTEMA DE TRADUÇÃO (I18N)
// ==========================================
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
        booksTitle: "Books",
        favoritesBooks: "My Favorites",
        mangasTitle: "Manga",
        favoritesMangas: "My Favorites",
        manhwasTitle: "Manhwa",
        favoritesManhwa: "My Favorites",
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
        favoritesBooks: "Meus Favoritos",
        mangasTitle: "Manga",
        favoritesMangas: "Meus Favoritos",
        manhwasTitle: "Manhwa",
        favoritesManhwa: "Meus Favoritos",
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
        booksTitle: "Libros",
        favoritesBooks: "Mis Favoritos",
        mangasTitle: "Manga",
        favoritesMangas: "Mis Favoritos",
        manhwasTitle: "Manhwa",
        favoritesManhwa: "Mis Favoritos",
    }
};

let currentLang = 'en';
let currentOpenItemTitle = ""; 
let youtubePlayer = null;
let isTrailerMuted = true;
let pendingTrailer = null; // GUARDA O PEDIDO CASO O YOUTUBE DEMORE A CARREGAR

function changeLanguage(lang) {
    currentLang = lang;

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

    if (document.body.classList.contains('panel-open') && currentOpenItemTitle) {
        const itemData = itemsDatabase[currentOpenItemTitle];
        if (itemData && itemData.review && itemData.review[lang]) {
            document.getElementById('details-review').innerText = itemData.review[lang];
        }
    }
}

// ==========================================
// INICIALIZAÇÃO DO YOUTUBE API
// ==========================================
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
        videoId: 'kd0zbNw1VOg', 
        host: 'https://www.youtube.com', // Força a origem correta
        playerVars: {
            'autoplay': 1, 
            'controls': 0,
            'mute': 1,
            'loop': 1,
            'playlist': 'kd0zbNw1VOg', // OBRIGATÓRIO PARA O LOOP FUNCIONAR
            'showinfo': 0,
            'rel': 0,
            'modestbranding': 1,
            'playsinline': 1
            // Removido o 'origin' que estava causando o bloqueio no GitHub Pages
        },
        events: {
            'onReady': (event) => {
                event.target.mute(); // Garante que comece mudo para o navegador não bloquear
                if (pendingTrailer) {
                    youtubePlayer.loadVideoById({
                        videoId: pendingTrailer
                    });
                    if (isTrailerMuted) { youtubePlayer.mute(); } else { youtubePlayer.unMute(); }
                    youtubePlayer.playVideo();
                    pendingTrailer = null;
                }
            },
            'onStateChange': (event) => {
                if (event.data === YT.PlayerState.ENDED) {
                    youtubePlayer.playVideo(); 
                }
            },
            'onError': (event) => {
                console.log("Erro no YouTube API:", event.data);
            }
        }
    });
}

function closeDetailsPanel() {
    document.body.classList.remove('panel-open');
    document.body.classList.remove('showing-trailer'); 
    
    if (youtubePlayer && typeof youtubePlayer.pauseVideo === 'function') {
        youtubePlayer.pauseVideo();
    }

    if (document.body.classList.contains('cinema-mode')) {
        document.body.classList.remove('cinema-mode');
        const cinemaIcon = document.querySelector('#cinemaModeToggle i');
        if (cinemaIcon) cinemaIcon.className = "fas fa-expand";
    }
}

// ==========================================
// LÓGICA DO CARROSSEL INFINITO
// ==========================================
function initCarousels() {
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach(carousel => {
        const track = carousel.querySelector('.favorites-track');
        const prevBtn = carousel.querySelector('.prev-btn');
        const nextBtn = carousel.querySelector('.next-btn');
        let isMoving = false;

        nextBtn.addEventListener('click', () => {
            if (isMoving) return;
            isMoving = true;
            const items = track.querySelectorAll('a');
            if (items.length === 0) { isMoving = false; return; }
            
            const itemWidth = items[0].offsetWidth + 15; 
            track.style.transition = 'transform 0.3s ease-in-out';
            track.style.transform = `translateX(-${itemWidth}px)`;

            setTimeout(() => {
                track.style.transition = 'none';
                track.appendChild(items[0]);
                track.style.transform = 'translateX(0)';
                setTimeout(() => isMoving = false, 50);
            }, 300);
        });

        prevBtn.addEventListener('click', () => {
            if (isMoving) return;
            isMoving = true;
            const items = track.querySelectorAll('a');
            if (items.length === 0) { isMoving = false; return; }
            const itemWidth = items[0].offsetWidth + 15;

            track.style.transition = 'none';
            track.insertBefore(items[items.length - 1], items[0]);
            track.style.transform = `translateX(-${itemWidth}px)`;
            track.offsetHeight; 
            track.style.transition = 'transform 0.3s ease-in-out';
            track.style.transform = 'translateX(0)';
            setTimeout(() => isMoving = false, 300);
        });
    });
}

// ==========================================
// INICIALIZAÇÃO GLOBAL (EVENTOS)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.container');
    if (container) setTimeout(() => container.classList.add('visible'), 100);

    initCarousels();
    initYouTubePlayer();

    // 1. SISTEMA DO PAINEL DE DETALHES E TRAILERS
    const trackLinks = document.querySelectorAll('.favorites-track a');
    const closePanelBtn = document.getElementById('close-details-btn');
    
    trackLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 
            
            const img = link.querySelector('img');
            const title = img.getAttribute('alt');
            const cleanTitle = title.toLowerCase().trim();
            currentOpenItemTitle = cleanTitle;

            document.getElementById('details-title').innerText = title;
            document.getElementById('details-cover').src = img.getAttribute('src');
            
            const itemData = itemsDatabase[cleanTitle];

            if (itemData) {
                document.getElementById('details-review').innerText = itemData.review[currentLang] || itemData.review['pt'];

                function setupBtn(id, url) {
                    const btn = document.getElementById(id);
                    if (url) { btn.href = url; btn.style.display = 'flex'; } 
                    else { btn.style.display = 'none'; }
                }

                setupBtn('platform-steam', itemData.links.steam || link.href);
                setupBtn('platform-xbox', itemData.links.xbox);
                setupBtn('platform-ps', itemData.links.ps);
                setupBtn('platform-nin', itemData.links.nin);
                
                // LÓGICA CORRIGIDA DO TRAILER
                if (itemData.trailer) {
                    document.body.classList.add('showing-trailer'); 
                    
                    if (youtubePlayer && typeof youtubePlayer.loadVideoById === 'function') {
                        // Passar como objeto previne alguns bugs de carregamento
                        youtubePlayer.loadVideoById({
                            videoId: itemData.trailer
                        });
                        if (isTrailerMuted) { youtubePlayer.mute(); } else { youtubePlayer.unMute(); }
                        youtubePlayer.playVideo(); 
                    } else {
                        pendingTrailer = itemData.trailer; 
                    }
                } else {
                    document.body.classList.remove('showing-trailer');
                    if (youtubePlayer && typeof youtubePlayer.pauseVideo === 'function') {
                        youtubePlayer.pauseVideo();
                    }
                }
            } else {
                document.getElementById('details-review').innerText = "Análise em construção...";
                document.getElementById('platform-steam').href = link.href;
                document.getElementById('platform-steam').style.display = 'flex';
                document.getElementById('platform-xbox').style.display = 'none';
                document.getElementById('platform-ps').style.display = 'none';
                document.getElementById('platform-nin').style.display = 'none';
                
                document.body.classList.remove('showing-trailer');
                if (youtubePlayer && typeof youtubePlayer.pauseVideo === 'function') {
                    youtubePlayer.pauseVideo();
                }
            }

            document.body.classList.add('panel-open');
            document.body.classList.remove('cinema-mode');
            const cinemaIcon = document.querySelector('#cinemaModeToggle i');
            if (cinemaIcon) cinemaIcon.className = "fas fa-expand";
        });
    });

    if (closePanelBtn) {
        closePanelBtn.addEventListener('click', closeDetailsPanel);
    }

    document.addEventListener('click', (e) => {
        if (document.body.classList.contains('panel-open')) {
            const panel = document.getElementById('details-panel');
            if (!panel.contains(e.target) && !e.target.closest('.favorites-track a') && !e.target.closest('.controls-bar')) {
                closeDetailsPanel();
            }
        }
    });

    // 2. MÚSICA DE FUNDO
    const music = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicToggle");
    if (music && musicBtn) {
        const icon = musicBtn.querySelector("i");
        let isPlaying = false;
        music.volume = 1; 

        musicBtn.addEventListener("click", () => {
            if (isPlaying) {
                music.pause();
                icon.className = "fas fa-music";
                isPlaying = false;
            } else {
                music.play().then(() => {
                    icon.className = "fas fa-pause";
                    isPlaying = true;
                }).catch(e => console.error(e));
            }
        });
    }

    // 3. ALTERNAR SOM DO TRAILER
    const trailerSoundBtn = document.getElementById("trailerSoundToggle");
    if (trailerSoundBtn) {
        trailerSoundBtn.addEventListener("click", () => {
            if (!youtubePlayer) return;
            const icon = trailerSoundBtn.querySelector("i");

            if (isTrailerMuted) {
                if (typeof youtubePlayer.unMute === 'function') {
                    youtubePlayer.unMute();
                    youtubePlayer.setVolume(80);
                }
                icon.className = "fas fa-volume-up";
                isTrailerMuted = false;

                if (music && !music.paused) {
                    music.pause();
                    if (musicBtn) musicBtn.querySelector("i").className = "fas fa-music";
                }
            } else {
                if (typeof youtubePlayer.mute === 'function') youtubePlayer.mute();
                icon.className = "fas fa-volume-mute";
                isTrailerMuted = true;
            }
        });
    }

    // 4. MODO CINEMA (BIG PICTURE)
    const cinemaBtn = document.getElementById("cinemaModeToggle");
    if (cinemaBtn) {
        cinemaBtn.addEventListener("click", () => {
            document.body.classList.toggle("cinema-mode");
            const icon = cinemaBtn.querySelector("i");
            if (document.body.classList.contains("cinema-mode")) {
                icon.className = "fas fa-compress";
            } else {
                icon.className = "fas fa-expand";
            }
        });
    }
});