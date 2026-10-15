// ==========================================
// BANCO DE DADOS COMPLETO (REVIEWS, LINKS E TRAILERS)
// ==========================================
const itemsDatabase = {
    "ori and the will of the wisps": {
        trailer: "kd0zbNw1VOg",
        links: {
            steam: "https://store.steampowered.com/app/1057090/",
            xbox: "https://www.xbox.com/pt-BR/games/store/ori-and-the-will-of-the-wisps/9N8CD0XZKLP4",
            ps: null,
            nin: "https://www.nintendo.com/pt-br/store/products/ori-and-the-will-of-the-wisps-switch/"
        },
        review: {
            en: "This game is very special to me; honestly, I don’t even know where to begin explaining it. It is, without a doubt, my all-time favorite game—I even have a tattoo of Ori on my right forearm! This game made me realize things I had been questioning myself about during my darkest moments.",
            pt: "Esse jogo é muito especial para mim, sinceramente nem sei por onde começar a explicar ele. É certamente meu jogo favorito para sempre, tenho até uma tatuagem do Ori no meu antebraço direito! Esse jogo me fez perceber coisas que eu mesmo me questionava nos meus momentos mais escuros.",
            es: "Este juego es muy especial para mí; sinceramente, ni siquiera sé por dónde empezar a explicarlo. Es, sin duda, mi juego favorito de todos los tiempos; ¡incluso tengo un tatuaje de Ori en mi antebrazo derecho!"
        }
    },
    "outer wilds": {
        trailer: "ZKJUMMCJvGM",
        links: {
            steam: "https://store.steampowered.com/app/753640/",
            xbox: "https://www.xbox.com/games/store/outer-wilds/B2VG2K3B29L2",
            ps: "https://store.playstation.com/concept/233072",
            nin: "https://www.nintendo.com/store/products/outer-wilds-switch/"
        },
        review: {
            en: "An unforgettable space exploration mystery about curiosity and the beauty of knowledge.",
            pt: "Uma jornada inesquecível de exploração espacial guiada pela curiosidade pura. Fascinante.",
            es: "Un misterio de exploración espacial inolvidable sobre la curiosidad y el conocimiento."
        }
    },
    "oneshot": {
        trailer: "Sg463B8O0I0",
        links: {
            steam: "https://store.steampowered.com/app/420530/OneShot/",
            xbox: "https://www.xbox.com/games/store/oneshot-world-machine-edition/9p8pqw389q60",
            ps: "https://store.playstation.com/product/UP4127-CUSA34845_00-ONESHOTWMEUS0000", 
            nin: "https://www.nintendo.com/store/products/oneshot-world-machine-edition-switch/" 
        },
        review: {
            en: "OneShot is a surreal top-down Puzzle/Adventure game with unique mechanics that break the fourth wall.",
            pt: "Oneshot é surreal. A mecânica de quebrar a quarta parede e o fato de você ter apenas uma chance torna tudo muito especial.",
            es: "OneShot es un juego surrealista de aventuras y rompecabezas con mecánicas únicas."
        }
    },
    "spiritfarer": {
        trailer: "UoS-ow4NeHE",
        links: {
            steam: "https://store.steampowered.com/app/972660/",
            xbox: "https://www.xbox.com/games/store/spiritfarer/9NG918349231",
            ps: "https://store.playstation.com/concept/10000958",
            nin: "https://www.nintendo.com/store/products/spiritfarer-farewell-edition-switch/"
        },
        review: {
            en: "A cozy management game about saying goodbye.",
            pt: "Um jogo aconchegante sobre amar e aprender a dizer adeus.",
            es: "Un juego acogedor de gestión sobre decir adiós."
        }
    },
    "silksong": {
        trailer: "6XGeJwsUP9c",
        links: {
            steam: "https://store.steampowered.com/app/1030300/",
            xbox: "https://www.xbox.com/games/store/hollow-knight-silksong/9n116v0599bm",
            ps: "https://store.playstation.com/concept/10005220",
            nin: null
        },
        review: {
            en: "Highly anticipated action-platformer sequel.",
            pt: "Uma das sequências mais aguardadas do mundo dos jogos.",
            es: "Una de las secuelas más esperadas."
        }
    },
    "spore": {
        trailer: "zi2GvqboQfY",
        links: {
            steam: "https://store.steampowered.com/app/17390/",
            xbox: null,
            ps: null,
            nin: null
        },
        review: {
            en: "Create and evolve your species from microscopic organism to galactic ruler.",
            pt: "Crie e evolua sua espécie desde uma ameba até o domínio da galáxia.",
            es: "Crea y evoluciona tu especie desde una célula até un imperio galáctico."
        }
    },
    "the wild robot": {
        trailer: "67vbA5ZktdE",
        links: {
            steam: null, xbox: null, ps: null, nin: null
        },
        review: {
            en: "An extraordinary journey of a robot adapting to nature and learning love.",
            pt: "Uma jornada extraordinária de uma robô adaptando-se à natureza e descobrindo a maternidade.",
            es: "Un viaje extraordinario de un robot adaptándose a la naturaleza."
        }
    },
    "mune: the guardian of the moon": {
        trailer: "S31U2-K3k_o",
        links: { steam: null, xbox: null, ps: null, nin: null },
        review: {
            en: "A magical tale of a faun who unexpectedly becomes guardian of the moon.",
            pt: "Uma fábula mágica sobre um fauno que se torna guardião da lua.",
            es: "Un cuento mágico sobre un fauno que se convierte en guardián de la luna."
        }
    },
    "puss in boots: the last wish": {
        trailer: "RqrXhwS33Ma",
        links: { steam: null, xbox: null, ps: null, nin: null },
        review: {
            en: "An animation masterclass regarding life, mortality, and fear.",
            pt: "Uma verdadeira aula de animação sobre mortalidade, valorização da vida e coragem.",
            es: "Una obra maestra de la animación sobre la vida y la mortalidad."
        }
    },
    "gravity falls": {
        trailer: "tctX731O6hE",
        links: { steam: null, xbox: null, ps: null, nin: null },
        review: {
            en: "The gold standard of animated mystery and childhood summer adventures.",
            pt: "O ápice do mistério animado e do sentimento de férias de verão.",
            es: "El estándar de oro del misterio animado."
        }
    },
    "amphibia": {
        trailer: "E3kI2Xg2E9k",
        links: { steam: null, xbox: null, ps: null, nin: null },
        review: {
            en: "A beautiful coming-of-age story in a frog-inhabited world.",
            pt: "Uma jornada linda de crescimento e amizade em um mundo habitado por anfíbios.",
            es: "Una hermosa historia de crecimiento y amistad."
        }
    },
    "the owl house": {
        trailer: "fe-48pP_134",
        links: { steam: null, xbox: null, ps: null, nin: null },
        review: {
            en: "A magical journey celebrating individuality and found family.",
            pt: "Uma aventura mágica sobre aceitar quem você é e encontrar sua família do coração.",
            es: "Una aventura mágica sobre la individualidad."
        }
    },
    "bna brand new animal": {
        trailer: "13-vO8L3m_I",
        links: { steam: null, xbox: null, ps: null, nin: null },
        review: {
            en: "Dynamic Studio Trigger animation filled with vibrant colors and action.",
            pt: "Animação vibrante e cheia de estilo do Studio Trigger.",
            es: "Animación dinámica del Studio Trigger llena de color."
        }
    },
    "kill la kill": {
        trailer: "83mS0l3L1M4",
        links: { steam: null, xbox: null, ps: null, nin: null },
        review: {
            en: "High-octane action and unmatched visual energy.",
            pt: "Ação frenética e energia visual sem paralelos.",
            es: "Acción frenética y energía visual inigualable."
        }
    }
};

// ==========================================
// SISTEMA DE TRADUÇÃO
// ==========================================
const translations = {
    en: {
        greeting: "Hello, I'm Trighy / Oryn!",
        subtitle: "Autistic, INFJ, Straight, White, Male.",
        description: "Welcome to my little refuge on the internet! Here I'll guide you through my interests and who I am. Feel free to look around, you're welcome!",
        gamesTitle: "Games", favoritesGames: "My Favorites",
        moviesTitle: "Movies", favoritesMovies: "My Favorites",
        seriesTitle: "Series", favoritesSeries: "My Favorites",
        animesTitle: "Anime", favoritesAnimes: "My Favorites",
        booksTitle: "Books", favoritesBooks: "My Favorites",
        mangasTitle: "Manga", favoritesMangas: "My Favorites",
        manhwasTitle: "Manhwa", favoritesManhwa: "My Favorites"
    },
    pt: {
        greeting: "Olá, eu sou Trighy / Oryn!",
        subtitle: "Autista, INFJ, Hétero, Branco, Homem.",
        description: "Bem-vindo ao meu pequeno refúgio na internet! Aqui vou te guiar pelos meus interesses e quem eu sou. Fique à vontade para olhar em volta, seja bem-vindo!",
        gamesTitle: "Jogos", favoritesGames: "Meus Favoritos",
        moviesTitle: "Filmes", favoritesMovies: "Meus Favoritos",
        seriesTitle: "Séries", favoritesSeries: "Meus Favoritos",
        animesTitle: "Anime", favoritesAnimes: "Meus Favoritos",
        booksTitle: "Livros", favoritesBooks: "Meus Favoritos",
        mangasTitle: "Mangás", favoritesMangas: "Meus Favoritos",
        manhwasTitle: "Manhwa", favoritesManhwa: "Meus Favoritos"
    },
    es: {
        greeting: "¡Hola, soy Trighy / Oryn!",
        subtitle: "Autista, INFJ, Hetero, Blanco, Hombre.",
        description: "¡Bienvenido a mi pequeño refugio en internet! Aquí te guiaré por mis intereses y quién soy. Siéntete libre de mirar a tu alrededor, ¡eres bienvenido!",
        gamesTitle: "Juegos", favoritesGames: "Mis Favoritos",
        moviesTitle: "Películas", favoritesMovies: "Mis Favoritos",
        seriesTitle: "Series", favoritesSeries: "Mis Favoritos",
        animesTitle: "Anime", favoritesAnimes: "Mis Favoritos",
        booksTitle: "Libros", favoritesBooks: "Mis Favoritos",
        mangasTitle: "Manga", favoritesMangas: "Mis Favoritos",
        manhwasTitle: "Manhwa", favoritesManhwa: "Mis Favoritos"
    }
};

let currentLang = 'en';
let currentOpenItemTitle = ""; 
let youtubePlayer = null;
let isTrailerMuted = true;
let pendingTrailer = null;
let currentLoadedTrailer = null;

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
        videoId: 'kd0zbNw1VOg', // ID inicial padrão para instanciar o iframe corretamente
        host: 'https://www.youtube.com',
        playerVars: {
            'autoplay': 0, 
            'controls': 0,
            'mute': 1,
            'loop': 1,
            'playlist': 'kd0zbNw1VOg', 
            'showinfo': 0,
            'rel': 0,
            'modestbranding': 1,
            'playsinline': 1,
            'enablejsapi': 1
        },
        events: {
            'onReady': (event) => {
                event.target.mute(); 
                if (pendingTrailer) {
                    playTrailerId(pendingTrailer);
                    pendingTrailer = null;
                }
            },
            'onStateChange': (event) => {
                if (event.data === YT.PlayerState.ENDED && youtubePlayer && typeof youtubePlayer.playVideo === 'function') {
                    youtubePlayer.playVideo(); 
                }
            }
        }
    });
}

function playTrailerId(videoId) {
    if (!videoId) return;

    document.body.classList.add('showing-trailer');

    if (youtubePlayer && typeof youtubePlayer.loadVideoById === 'function') {
        if (currentLoadedTrailer !== videoId) {
            currentLoadedTrailer = videoId;
            youtubePlayer.loadVideoById({
                videoId: videoId,
                startSeconds: 0
            });
        }
        
        if (isTrailerMuted) { 
            youtubePlayer.mute(); 
        } else { 
            youtubePlayer.unMute(); 
            youtubePlayer.setVolume(80);
        }
        youtubePlayer.playVideo(); 
    } else {
        pendingTrailer = videoId;
    }
}

function stopTrailer() {
    document.body.classList.remove('showing-trailer');
    if (youtubePlayer && typeof youtubePlayer.pauseVideo === 'function') {
        youtubePlayer.pauseVideo();
    }
}

function closeDetailsPanel() {
    document.body.classList.remove('panel-open');
    stopTrailer();

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

        if (!track || !prevBtn || !nextBtn) return;

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
// INICIALIZAÇÃO E EVENTOS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.container');
    if (container) setTimeout(() => container.classList.add('visible'), 100);

    initCarousels();
    initYouTubePlayer();

    // 1. GERENCIADOR DO PAINEL E SELEÇÃO DE ITENS
    const trackLinks = document.querySelectorAll('.favorites-track a');
    const closePanelBtn = document.getElementById('close-details-btn');
    
    trackLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 
            
            const img = link.querySelector('img');
            if (!img) return;

            const title = img.getAttribute('alt') || "";
            const cleanTitle = title.toLowerCase().trim();
            currentOpenItemTitle = cleanTitle;

            const detailsTitle = document.getElementById('details-title');
            const detailsCover = document.getElementById('details-cover');
            
            if (detailsTitle) detailsTitle.innerText = title;
            if (detailsCover) detailsCover.src = img.getAttribute('src');
            
            const itemData = itemsDatabase[cleanTitle];

            function setupBtn(id, url) {
                const btn = document.getElementById(id);
                if (btn) {
                    if (url && url !== "#") { 
                        btn.href = url; 
                        btn.style.display = 'flex'; 
                    } else { 
                        btn.style.display = 'none'; 
                    }
                }
            }

            if (itemData) {
                const reviewBox = document.getElementById('details-review');
                if (reviewBox) {
                    reviewBox.innerText = itemData.review[currentLang] || itemData.review['pt'] || itemData.review['en'] || "";
                }

                setupBtn('platform-steam', itemData.links ? itemData.links.steam : link.href);
                setupBtn('platform-xbox', itemData.links ? itemData.links.xbox : null);
                setupBtn('platform-ps', itemData.links ? itemData.links.ps : null);
                setupBtn('platform-nin', itemData.links ? itemData.links.nin : null);
                
                if (itemData.trailer) {
                    playTrailerId(itemData.trailer);
                } else {
                    stopTrailer();
                }
            } else {
                const reviewBox = document.getElementById('details-review');
                if (reviewBox) reviewBox.innerText = "Análise em construção...";
                
                setupBtn('platform-steam', link.href);
                setupBtn('platform-xbox', null);
                setupBtn('platform-ps', null);
                setupBtn('platform-nin', null);
                
                stopTrailer();
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
            if (panel && !panel.contains(e.target) && !e.target.closest('.favorites-track a') && !e.target.closest('.controls-bar')) {
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
                if (icon) icon.className = "fas fa-music";
                isPlaying = false;
            } else {
                music.play().then(() => {
                    if (icon) icon.className = "fas fa-pause";
                    isPlaying = true;
                }).catch(e => console.error(e));
            }
        });
    }

    // 3. ALTERNAR SOM DO TRAILER
    const trailerSoundBtn = document.getElementById("trailerSoundToggle");
    if (trailerSoundBtn) {
        trailerSoundBtn.addEventListener("click", () => {
            const icon = trailerSoundBtn.querySelector("i");

            if (isTrailerMuted) {
                if (youtubePlayer && typeof youtubePlayer.unMute === 'function') {
                    youtubePlayer.unMute();
                    youtubePlayer.setVolume(80);
                }
                if (icon) icon.className = "fas fa-volume-up";
                isTrailerMuted = false;

                if (music && !music.paused) {
                    music.pause();
                    if (musicBtn && musicBtn.querySelector("i")) {
                        musicBtn.querySelector("i").className = "fas fa-music";
                    }
                }
            } else {
                if (youtubePlayer && typeof youtubePlayer.mute === 'function') {
                    youtubePlayer.mute();
                }
                if (icon) icon.className = "fas fa-volume-mute";
                isTrailerMuted = true;
            }
        });
    }

    // 4. MODO CINEMA
    const cinemaBtn = document.getElementById("cinemaModeToggle");
    if (cinemaBtn) {
        cinemaBtn.addEventListener("click", () => {
            document.body.classList.toggle("cinema-mode");
            const icon = cinemaBtn.querySelector("i");
            if (icon) {
                if (document.body.classList.contains("cinema-mode")) {
                    icon.className = "fas fa-compress";
                } else {
                    icon.className = "fas fa-expand";
                }
            }
        });
    }
});