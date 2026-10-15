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
        selectTrailer: "Select a Trailer"
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
        selectTrailer: "Escolha um Trailer"
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
        selectTrailer: "Elige un Trailer"
    }
};

let currentLang = 'en'; // Idioma padrão

function changeLanguage(lang) {
    currentLang = lang;

    // 1. Atualiza os textos da página que usam data-i18n
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

    // 2. Atualiza o título do cabeçalho do dropdown de trailers
    const dropdownHeader = document.querySelector('.dropdown-header');
    if (dropdownHeader && translations[lang] && translations[lang].selectTrailer) {
        dropdownHeader.innerHTML = `<i class="fas fa-list"></i> ${translations[lang].selectTrailer}`;
    }

    // 3. Recarrega a playlist de trailers na nova língua
    reloadTrailersForLanguage();
}

// =========================================================
// BANCO DE TRAILERS MULTI-IDIOMA (EN, PT, ES)
// =========================================================
const verifiedTrailers = {
    // Jogos
    "ori and the will of the wisps": {
        en: "kd0zbNw1VOg",
        pt: "kd0zbNw1VOg",
        es: "kd0zbNw1VOg"
    },
    "outer wilds": {
        en: "ZKJUMMCJvGM",
        pt: "ZKJUMMCJvGM",
        es: "ZKJUMMCJvGM"
    },
    "oneshot": {
        en: "ctYNBd6t4-g",
        pt: "ctYNBd6t4-g",
        es: "ctYNBd6t4-g"
    },
    "spiritfarer": {
        en: "UoS-ow4NeHE",
        pt: "UoS-ow4NeHE",
        es: "UoS-ow4NeHE"
    },
    "silksong": {
        en: "6XGeJwsUP9c",
        pt: "6XGeJwsUP9c",
        es: "6XGeJwsUP9c"
    },
    "spore": {
        en: "zi2GvqboQfY",
        pt: "zi2GvqboQfY",
        es: "zi2GvqboQfY"
    }
};

let videoQueue = [];
let currentTrailerIndex = 0;
let youtubePlayer = null;
let isSwitchingVideo = false;

// Obtém o ID do vídeo para a entrada do banco de dados
function getVideoIdForCurrentLang(trailerData) {
    if (!trailerData) return null;
    if (typeof trailerData === 'string') return trailerData; 
    return trailerData[currentLang] || trailerData['en'] || trailerData['pt'] || trailerData['es'];
}

// Extrai os títulos das imagens e monta a fila
function buildTrailerPlaylist() {
    // Atualizado de .favorites-grid para .favorites-track
    const images = document.querySelectorAll('.favorites-track img');
    const detectedTitles = [];

    images.forEach(img => {
        const alt = img.getAttribute('alt');
        if (alt && !alt.match(/^(Jogo|Filme|Serie|Anime|Livro)\s*\d+$/i)) {
            detectedTitles.push(alt.trim());
        }
    });

    videoQueue = [];

    detectedTitles.forEach(title => {
        const cleanKey = title.toLowerCase();
        if (verifiedTrailers[cleanKey]) {
            const videoId = getVideoIdForCurrentLang(verifiedTrailers[cleanKey]);
            if (videoId) {
                videoQueue.push({
                    title: title,
                    videoId: videoId
                });
            }
        }
    });

    if (videoQueue.length > 0 && !youtubePlayer) {
        videoQueue.sort(() => Math.random() - 0.5);
        initYouTubePlayer();
    } else if (videoQueue.length === 0) {
        const badgeContainer = document.getElementById('trailer-selector-container');
        if (badgeContainer) badgeContainer.style.display = 'none';
    }
}

// Recarrega o trailer atual quando o usuário clica para alterar o idioma da página
function reloadTrailersForLanguage() {
    buildTrailerPlaylist();

    if (youtubePlayer && videoQueue.length > 0) {
        currentTrailerIndex = currentTrailerIndex % videoQueue.length;
        if (youtubePlayer.loadVideoById) {
            youtubePlayer.loadVideoById(videoQueue[currentTrailerIndex].videoId);
            updateTrailerBadge();
        }
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

// ==========================================
// SELETOR INTERATIVO DE TRAILERS (DROPDOWN)
// ==========================================
function renderTrailerDropdown() {
    const listContainer = document.getElementById("trailer-list");
    if (!listContainer) return;

    listContainer.innerHTML = "";

    videoQueue.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = "trailer-option";
        if (index === currentTrailerIndex) li.classList.add("active");

        li.innerHTML = `
            <i class="fas ${index === currentTrailerIndex ? 'fa-play' : 'fa-film'}"></i>
            <span>${item.title}</span>
        `;

        li.addEventListener("click", (e) => {
            e.stopPropagation();
            selectTrailerByIndex(index);
            toggleTrailerDropdown(false);
        });

        listContainer.appendChild(li);
    });
}

function selectTrailerByIndex(index) {
    if (index < 0 || index >= videoQueue.length) return;

    currentTrailerIndex = index;
    if (youtubePlayer && youtubePlayer.loadVideoById) {
        youtubePlayer.loadVideoById(videoQueue[currentTrailerIndex].videoId);
        updateTrailerBadge();
    }
}

function toggleTrailerDropdown(forceState = null) {
    const container = document.getElementById("trailer-selector-container");
    if (!container) return;

    if (forceState !== null) {
        container.classList.toggle("open", forceState);
    } else {
        container.classList.toggle("open");
    }

    if (container.classList.contains("open")) {
        renderTrailerDropdown();
    }
}

function updateTrailerBadge() {
    const badge = document.getElementById("current-trailer-name");
    if (badge && videoQueue[currentTrailerIndex]) {
        badge.innerText = videoQueue[currentTrailerIndex].title;
    }
    renderTrailerDropdown();
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

        let isMoving = false; // Previne cliques duplos rápidos

        // Botão PRÓXIMO (Move para a Esquerda)
        nextBtn.addEventListener('click', () => {
            if (isMoving) return;
            isMoving = true;
            
            const items = track.querySelectorAll('a');
            // Calcula o tamanho do item + o espaço (gap) de 15px configurado no CSS
            const itemWidth = items[0].offsetWidth + 15; 

            // Aplica a animação visual
            track.style.transition = 'transform 0.3s ease-in-out';
            track.style.transform = `translateX(-${itemWidth}px)`;

            // Após a animação (300ms), movemos o 1º elemento pro final para criar o loop invisível
            setTimeout(() => {
                track.style.transition = 'none'; // Desliga a animação
                track.appendChild(items[0]); // Joga o 1º pro fim
                track.style.transform = 'translateX(0)'; // Reseta a posição instantaneamente
                
                setTimeout(() => isMoving = false, 50); // Libera o clique novamente
            }, 300);
        });

        // Botão ANTERIOR (Move para a Direita)
        prevBtn.addEventListener('click', () => {
            if (isMoving) return;
            isMoving = true;

            const items = track.querySelectorAll('a');
            const itemWidth = items[0].offsetWidth + 15;

            // 1. Movemos o último elemento para o começo INSTANTANEAMENTE invisível
            track.style.transition = 'none';
            track.insertBefore(items[items.length - 1], items[0]);
            
            // 2. Colocamos o trilho deslocado para a esquerda para preparar a animação
            track.style.transform = `translateX(-${itemWidth}px)`;

            // 3. Força o navegador a reconhecer a mudança antes de animar (Reflow)
            track.offsetHeight; 

            // 4. Liga a animação e move para a posição 0 suavemente
            track.style.transition = 'transform 0.3s ease-in-out';
            track.style.transform = 'translateX(0)';

            setTimeout(() => isMoving = false, 300);
        });
    });
}


// Inicialização e Eventos Globais
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.container');
    if (container) {
        setTimeout(() => container.classList.add('visible'), 100);
    }

    // Inicializa os Carrosseis
    initCarousels();

    // 1. Controle da Música de Fundo
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
                }).catch(error => {
                    console.error("Erro ao tocar áudio:", error);
                });
            }
        });
    }

    // 2. Alternar Som do Trailer (E pausar a música de fundo)
    const trailerSoundBtn = document.getElementById("trailerSoundToggle");
    let isTrailerMuted = true;

    if (trailerSoundBtn) {
        trailerSoundBtn.addEventListener("click", () => {
            if (!youtubePlayer) return;

            const icon = trailerSoundBtn.querySelector("i");

            if (isTrailerMuted) {
                youtubePlayer.unMute();
                youtubePlayer.setVolume(80);
                icon.className = "fas fa-volume-up";
                isTrailerMuted = false;

                if (music && !music.paused) {
                    music.pause();
                    if (musicBtn) {
                        const musicIcon = musicBtn.querySelector("i");
                        if (musicIcon) musicIcon.className = "fas fa-music";
                    }
                }
            } else {
                youtubePlayer.mute();
                icon.className = "fas fa-volume-mute";
                isTrailerMuted = true;
            }
        });
    }

    // 3. Modo Cinema (Esconder / Mostrar Interface)
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

    // 4. Seletor Interativo de Trailers
    const badgeBtn = document.getElementById("trailer-title-badge");
    if (badgeBtn) {
        badgeBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleTrailerDropdown();
        });
    }

    document.addEventListener("click", () => {
        toggleTrailerDropdown(false);
    });

    // Inicia a geração da playlist de trailers
    buildTrailerPlaylist();
});