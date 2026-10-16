// ==========================================
// CONFIGURAÇÃO DO IP AUTORIZADO
// Deixe "" para permitir ver os botões de edição em qualquer PC durante os testes.
// Cole seu IP público de casa entre as aspas quando quiser bloquear o acesso externo.
// ==========================================
const ALLOWED_IP = "0"; 
let currentCategoryKey = "";
let currentListCategory = "games";
let savedSearchTerms = {};

// ==========================================
// BANCO DE DADOS COMPLETO (REVIEWS, LINKS, TRAILERS E IMAGENS)
// ==========================================
const itemsDatabase = {
    "ori and the blind forest": {
        trailer: "zU3rmggIcpc",
        bgImage: null,
        links: {
            steam: "https://store.steampowered.com/app/387290/",
            xbox: "https://www.xbox.com/games/store/ori-and-the-blind-forest-definitive-edition/bw85kqb8q31m",
            ps: null,
            nin: "https://www.nintendo.com/store/products/ori-and-the-blind-forest-definitive-edition-switch/?srsltid=AU7gw4XejXrsIYX2MacJ-g00SLRfBEcyhr-PFDyNjlUrkB4RiH8cnDKt"
        },
        review: {
            en: "This game is very special to me; honestly, I don’t even know where to begin explaining it. It is, without a doubt, my all-time favorite duology—I even have a tattoo of Ori (the little white character) on my right forearm! The year was 2020, and I was going through—how should I put it?—an emotional crisis. I was questioning whether I was actually capable of expressing feelings. To elaborate—in case you didn’t notice at the top of the page—I am autistic, and I generally don’t show emotions. This led me to wonder if I was just a cold person; for instance, when a relative passed away, I didn’t cry at the funeral. I *was* sad, but why didn’t I cry? Why didn’t I express that feeling? Then, one random day, I stumbled upon a video of someone playing Ori. I watched it, thinking, 'Oh, just another game'—but I couldn't have been more wrong. This game hit me in a way that’s impossible to put into words. Even though it was quite expensive in my local currency, I bought it at full price—I just *had* to play it. Would you believe me if I told you I cried within the first five minutes? It was an absolute emotional rollercoaster. If I could wipe my memory and play it all over again, I would—though, if I had three such 'memory wipes' to use, I’d save the first one for another game: Outer Wilds. Anyway, if there’s one series—or duology—that I wish everyone in my life would play, it’s definitely the two Ori games.",
            pt: "Esse jogo é muito especial para mim, sinceramente nem sei por onde começar a explicar ele. É certamente á duologia de jogos favoritos meus para sempre, tenho até uma tatuagem do Ori no meu antebraço direito! (o personagem branquinho pequenininho) O ano era 2020 e eu estava tendo uma como posso disser? Crise emocional, estava questionando se eu conseguia de fato demonstrar sentimentos, explicando melhor, caso não tenhas visto no topo da página, eu sou autista e eu normalmente não demonstro sentimentos e isso fez eu começar á me questionar se eu era uma pessoa muito fria, por que no caso de um funeral de um parente, eu não chorei la, sim eu estava triste, mas por que eu não chorei? Por que não demonstrei o sentimento? Isso foi até que em um dia aleatório descubro um vídeo de alguém jogando Ori, assisto o vídeo pensando 'ah, só mais um jogo' como eu estava muito errado, esse jogo me pegou de uma forma que eu não tenho palavras para descrever, eu tive que comprar o jogo em preço cheio apessar de ser caro em minha moeda de compra, mesmo assim, comprei e tive que jogar, se eu te disser que eu chorei nós primeiros 5 minutos, acreditarias? Isso foi uma experiencia de uma montanha russsa de emoções e se eu podese apagar minha memoria e rejogar eu faria isso se eu podese apagar minha memoria tres vezes, o primeiro fica para outro jogo, Outer Wilds. Mas bem, se eu podese pedir para todo mundo da minha vida jogar uma série/duologia de jogos, seria certamente os dois Ori's.",
            es: "Este juego es muy especial para mí; sinceramente, ni siquiera sé por dónde empezar a explicarlo. Es, sin duda, mi duología de juegos favorita de todos los tiempos; ¡incluso tengo un tatuaje de Ori en mi antebrazo derecho! (ese personaje pequeñito y blanquito). Corría el año 2020 y yo estaba pasando por... ¿cómo decirlo? Una crisis emocional. Me cuestionaba si realmente era capaz de expresar sentimientos. Para explicarlo mejor —por si no lo has visto en la parte superior de la página—, soy autista y, por lo general, no muestro mis sentimientos. Esto me llevó a preguntarme si era una persona demasiado fría; por ejemplo, en el funeral de un familiar no lloré. Sí, estaba triste, pero ¿por qué no lloré? ¿Por qué no expresé lo que sentía? Entonces, un día cualquiera, me topé con un video de alguien jugando a *Ori*. Lo vi pensando: «bah, solo otro juego más». ¡Qué equivocado estaba! Este juego me marcó de una forma que no tengo palabras para describir. Tuve que comprarlo a precio completo —a pesar de que, en mi moneda local, resulta bastante caro—, pero aun así lo compré y tuve que jugarlo. Si te dijera que lloré en los primeros cinco minutos, ¿me creerías? Fue una auténtica montaña rusa de emociones. Si pudiera borrar mi memoria para volver a jugarlo, lo haría. De hecho, si pudiera borrar mi memoria tres veces, una de ellas la reservaría para otro juego: Outer Wilds. Pero, en fin, si pudiera pedirle a todas las personas de mi vida que jugaran a una serie o duología, sin duda elegiría los dos juegos de Ori."
        }
    },
    "ori and the will of the wisps": {
        trailer: "kd0zbNw1VOg",
        bgImage: null,
        links: {
            steam: "https://store.steampowered.com/app/1057090/",
            xbox: "https://www.xbox.com/games/store/ori-and-the-will-of-the-wisps/9N8CD0XZKLP4",
            ps: null,
            nin: "https://www.nintendo.com/store/products/ori-and-the-will-of-the-wisps-switch/"
        },
        review: {
            en: "Well then! The second game in the duology I love most—Ori and the Will of the Wisps—takes everything that was great about the first installment and manages to improve upon it even further. If I had to choose which of the two to save from being erased, it would be this one. I’ll be honest: I’d be a bit sad if you decided to skip the first game and jump straight into the second—but you certainly can, and as long as you play at least the second one, I’ll be happy. This game is more beautiful, larger in scope, features an even better soundtrack (composed by the same person who worked on the first), and has an ending that will make you cry even more than the first one did. Unfortunately, it’s not all perfect; the game had to be rushed. It was originally planned to include two additional areas, which were ultimately cut due to budget and time constraints—to the point that, within the game’s code, the path to one of these areas still exists and can even be reactivated, though it just leads into a void where there’s nothing at all. That said, if I had to pick just one game for everyone in my life to play, it would undoubtedly be Ori and the Will of the Wisps.",
            pt: "Pois bem! O Segundo jogo da duologia que eu mais amo, Ori and the Will of the Wisps, essa continuação pegou tudo de bom do primeiro e conseguiu melhorar ainda mais, se fosse para eu escolher entre qual dos dois salvar de ser apagado, séria esse tanto que se não quiseres jogar o primeiro e começar direto pelo segundo, irei me sentir mais triste não há como eu mentir sobre isso, mas claro que podes, por tanto que jogues pelo menos o segundo eu já ficarei feliz. Pois esse jogo consegue ser mais bonito, maior, com uma soundtrack melhor (com o mesmo compositor do primeiro) e um final que fara você chorar mais do que o final do primeiro. Infelizmente nem tudo são flores, o jogo teve que ser rushado, ele era planejado para ter mais duas áreas que foram removidas dévido á custos e tempo, tanto que nós códigos do jogo, o caminho até uma delas ainda existe e pode ser reativo, porém te leva para o vazio/void aonde tem nada. Portanto, se fosse para eu escolher um único jogo de todo mundo da minha vida jogar, séria certamente Ori and the Will of the Wisps.",
            es: "¡Pues bien! La segunda entrega de la duología que más adoro, Ori and the Will of the Wisps, tomó todo lo bueno del primer título y logró mejorarlo aún más. Si tuviera que elegir cuál de los dos salvar de ser borrado, elegiría este; de ​​hecho, si decides saltarte el primero y empezar directamente por el segundo, me sentiría un poco triste —no voy a mentir al respecto—, pero, por supuesto, puedes hacerlo; con tal de que juegues al menos el segundo, yo ya estaré feliz. Y es que este juego logra ser más hermoso, más grande, cuenta con una mejor banda sonora (del mismo compositor que el primero) y un final que te hará llorar incluso más que el del primer juego. Lamentablemente, no todo es color de rosa: el desarrollo tuvo que apresurarse. Estaba previsto que incluyera dos áreas más, pero fueron eliminadas debido a cuestiones de costes y tiempo; de hecho, en el código del juego todavía existe el camino hacia una de ellas y es posible reactivarlo, aunque solo conduce al vacío, donde no hay absolutamente nada. Por lo tanto, si tuviera que elegir un solo juego para recomendar a cualquiera, sin duda sería Ori and the Will of the Wisps."
        }
    },
    "outer wilds": {
        trailer: "ZKJUMMCJvGM",
        bgImage: null,
        links: {
            steam: "https://store.steampowered.com/app/753640/",
            xbox: "https://www.xbox.com/games/store/outer-wilds/B2VG2K3B29L2",
            ps: "https://www.playstation.com/games/outer-wilds/",
            nin: "https://www.nintendo.com/store/products/outer-wilds-switch/"
        },
        review: {
            en: "Outer Wilds, Outer Wilds—where do I even begin? If you’ve never heard of this game, do yourself a favor and heed this request: DO NOT LOOK UP ANYTHING ABOUT IT. At most, watch the trailer that plays in the background on this page, but otherwise, go in completely blind. Trust me—you’ll be doing yourself a huge favor. The most I can say is that it’s a non-linear adventure game where you try to unravel a mystery that goes far beyond your own character. If you enjoy exploration—where you aren’t told exactly where to go and are encouraged to truly think for yourself—then play this game completely blind. If I could erase my own memory to replay any game—just as I mentioned in my review of Ori and the Will of the Wisps—it would undoubtedly be this one.",
            pt: "Outer Wilds, Outer Wilds, por onde eu começo? Se você nunca ouviu falar desse jogo faça um favor e um pedido á mim, NÃO VEJÁ NADA DELE, no máximo o trailer passando de fundo na página dele selecionado, vá nele completamente as cegas, acredite em mim isso será um favor á você, o máximo que posso disser desse jogo é que é um jogo de aventura não linear de você tentando descobrir um mistério sobre coisas que vão muito além do seu personagem principal, se você gosta de exploração sem explicação para onde ir e realmente pensar, jogue esse jogo as cegas pois se eu podese, como já disse na review do Ori and the Will of the Wisps apagar minha memoria e rejogar um jogo, séria certamente esse aqui.",
            es: "Outer Wilds, Outer Wilds... ¿por dónde empiezo? Si nunca has oído hablar de este juego, hazme un favor: ¡NO VEAS NADA SOBRE ÉL! Como mucho, el tráiler que se reproduce de fondo en su página; juégalo totalmente a ciegas. Créeme, te estarás haciendo un favor. Lo único que puedo decirte es que es un juego de aventuras no lineal en el que intentas desentrañar un misterio que va mucho más allá de tu personaje principal. Si te gusta la exploración —sin que te indiquen a dónde ir— y te gusta pensar por tu cuenta, juégalo a ciegas. Si pudiera borrar mi memoria para volver a disfrutar de un título —como ya mencioné en mi reseña de Ori and the Will of the Wisps—, sin duda elegiría este."
        }
    },
    "oneshot": {
        trailer: "ctYNBd6t4-g",
        bgImage: null,
        links: {
            steam: "https://store.steampowered.com/app/420530/OneShot/",
            xbox: "https://www.xbox.com/games/store/oneshot-world-machine-edition/9p8pqw389q60",
            ps: "https://store.playstation.com/product/UP4127-CUSA34845_00-ONESHOTWMEUS0000", 
            nin: "https://www.nintendo.com/store/products/oneshot-world-machine-edition-switch/" 
        },
        review: {
            en: "Oneshot, what a incredible unexpected game, I have come into this game because of the cult of the main character thinking 'oh those people what is happening exactly here? I'll have a look' and holy macaroni I was flashbanged with simply one of the most incredible and creative histories in a vídeo game, this game don't just 'breaks' the fourth wall for funnies, you constantely need to be tinkering on the 'games files' (not the actual game files so you don't accidentely break the game obviously, it does affect the game) to pass certain puzzles while also being able to communicate with sorely the main character who is indeed a character but by options like any chosse your path history yknow? but his name is Niko and his not a mindless vessel you simply control yourself he is a child who finds himself in this world and you need to be his guide on this world to save it even if there almost no time left or world to save, do you, save this world or let it die? Remember this question, you will need determination.",
            pt: "OneShot — que jogo incrível e inesperado! Cheguei a ele por causa da base de fãs dedicada ao protagonista de forma que parece um culto, pensando: 'Mas o que está acontecendo aqui, afinal? Vou dar uma olhada'. E, nossa, fui pego de surpresa por uma das histórias mais incríveis e criativas que já vi em um videogame. O jogo não se limita a 'quebrar a quarta parede' apenas por diversão; você precisa interagir constantemente com os 'arquivos do jogo' (não os arquivos reais do sistema, para evitar que algo quebre por acidente, mas sim elementos que afetam a experiência) para resolver certos quebra-cabeças. Além disso, você pode conversar diretamente com o protagonista — que não é apenas um avatar vazio sob seu controle, mas sim uma criança que se vê perdida neste mundo. Você precisa ser o guia dele para tentar salvar esse lugar, mesmo quando quase não resta tempo — ou um mundo para salvar. Você vai salvá-lo ou deixá-lo morrer? Lembre-se dessa pergunta; você vai precisar de determinação.",
            es: "OneShot es un juego surrealista de aventuras y rompecabezas con mecánicas únicas."
        }
    },
    "spiritfarer": {
        trailer: "UoS-ow4NeHE",
        bgImage: null,
        links: {
            steam: "https://store.steampowered.com/app/972660/",
            xbox: "https://www.xbox.com/games/store/spiritfarer/9NG918349231",
            ps: "https://store.playstation.com/concept/10000958",
            nin: "https://www.nintendo.com/store/products/spiritfarer-farewell-edition-switch/"
        },
        review: {
            en: "To this day, I have only ever attended one funeral—it was for a family member, though not someone particularly close to me. Even so, while I didn’t cry, I still felt a sense of sadness. The game *Spiritfarer* carries a similar, melancholic tone; it places you in the role of—for lack of a better term—Death itself, the being who guides souls into the afterlife. It’s a game filled with NPCs so full of personality that you’ll inevitably grow fond of them. If you enjoy management games and vibrant, lifelike characters, you will both love and hate *Spiritfarer*. Because, like it or not, you have to fulfill the final wishes of every spirit, learn how to say goodbye, and cherish every moment of a life that could end at any time.",
            pt: "Olha até hoje na minha vida eu só fui em um único funeral, era é uma pessoa da minha família mas não tão próximo á mim, mesmo assim, apessar de não chorar eu me senti triste e esse jogo, 'Spiritfarer' ele é melancólico, um melancólico que te faz ser oque podemos disser a morte, áquele ser que guia almas para o além, é um jogo com NPC's cheios de personalidade e que vais acabar se apaixonando, se gostas de jogo de gerenciamento e NPC's vivos, vais amar e ao mesmo tempo odiar 'Spiritfarer', por que querendo ou não, terás que atender os últimos desejos de cada espirito, aprender a disser adeus e á aproveitar cada momento nessa vida que não sabemos quando acabara.",
            es: "Hasta el día de hoy, solo he asistido a un funeral en mi vida; era un familiar, aunque no muy cercano a mí. Aun así, a pesar de no llorar, me sentí triste. Y este juego, 'Spiritfarer', es melancólico; una melancolía que te lleva a encarnar —por así decirlo— a la muerte, a ese ser que guía a las almas hacia el más allá. Es un juego con personajes no jugables (NPCs) llenos de personalidad, de los que terminarás encariñándote. Si te gustan los juegos de gestión y los personajes con mucha vida, amarás y, al mismo tiempo, odiarás 'Spiritfarer', porque, quieras o no, tendrás que cumplir los últimos deseos de cada espíritu, aprender a decir adiós y aprovechar cada instante de esta vida, de la cual no sabemos cuándo llegará a su fin."
        }
    },
    "hollow knight": {
        trailer: "UAO2urG23S4",
        bgImage: null,
        links: {
            steam: "https://store.steampowered.com/app/367520/",
            xbox: "https://www.xbox.com/games/store/hollow-knight-voidheart-edition/9mw9469v91lm",
            ps: "https://www.playstation.com/games/hollow-knight-voidheart-edition/",
            nin: "https://www.nintendo.com/store/products/hollow-knight-switch/"
        },
        review: {
            en: "Hollow Knight! Think of it as Ori’s younger sibling, but with a much better combat system. If you enjoy a vibrant, living world that loves to keep you lost, paired with combat often described as '2D Soulslike', then this game is for you. It is arguably one of the pinnacles of the Metroidvania genre today and serves as a perfect primer for Silksong—with a story that ties directly into its sequel. So, if you find yourself with some free time and want to explore a living world while putting your skills to the test, Hollow Knight will more than satisfy you.",
            pt: "Hollow Knight! O irmão mais novo de Ori e um sistema de combate bem melhor, se você gosta de um mundo que adora te deixar perdido e é muito bem vivo, com um combate que é nomeado até 'Soulslike 2D' esse jogo é para você, é certamente um dos pináculos de Metroidvania da atualidade e serve como um tutorial para o Silksong, além de a historia se conectar á sua continuação. Portanto se estás com nada para fazer e queres explorar um mundo vivo e desafiar as suas habilidades, Hollow Knight vai te satisfazer muito bem.",
            es: "¡Hollow Knight! Es como el hermano menor de Ori, pero con un sistema de combate muy superior. Si te gustan los mundos que disfrutan dejándote perdido —y que, a la vez, se sienten rebosantes de vida—, junto con un sistema de combate que incluso se describe como un «soulslike en 2D», entonces este juego es para ti. Es, sin duda, uno de los máximos exponentes del género Metroidvania en la actualidad y sirve como una especie de tutorial para Silksong, ya que su historia conecta directamente con dicha secuela. Por lo tanto, si no tienes nada que hacer y quieres explorar un mundo vivo mientras pones a prueba tus habilidades, Hollow Knight te dejará más que satisfecho."
        }
    },
    "silksong": {
        trailer: "6XGeJwsUP9c",
        bgImage: null,
        links: {
            steam: "https://store.steampowered.com/app/1030300/",
            xbox: "https://www.xbox.com/games/store/hollow-knight-silksong/9n116v0599bm",
            ps: "https://store.playstation.com/concept/10005220",
            nin: "https://www.nintendo.com/store/products/hollow-knight-silksong-switch/"
        },
        review: {
            en: "I still can’t believe that this WONDERFUL, INCREDIBLE game—which I’ve been waiting for for SO many years—was released on my birthday! September 4th! And let me just say, this game managed to exceed the immense expectations the entire community had for the sequel to Hollow Knight. If you love a Metroidvania that drops you right into a living, breathing world and essentially says, 'Figure it out—use your own gaming skills to conquer this'—all while featuring a story that runs deep and connects back to the first game—then you have to play this. Aside from Ori and the Will of the Wisps, this is the one other game I BEG everyone in my life to play. And don’t even try to tell me, 'Oh, it’s too expensive'—it’s dirt cheap! In my local currency, it’s half the price of *Ori and the Will of the Wisps* and a quarter of the price of a AAA title. Even if you didn’t like Ori, please, give Silksong a try.",
            pt: "Eu ainda não creio que esse jogo MARAVILHOSO, INCRIVEL que estive esperando por MUITOS anos lançou na mesma data do meu aniversario! 4 de setembro e me deixe disser como esse jogo conseguiu superar as expectativas imensas que toda a comunidade tinha para a continuação de Hollow Knight. Se você adora um metroidvania que te taca no meio do mundo em um mundo vivo e fala se vira ae use suas habilidades de jogador para vencer esse jogo e uma historia que se aprofunda e se conecta ao primeiro jogo, jogue esse jogo, se alguém nega de jogar Ori and the Will of the Wisps, esse é o segundo jogo que eu IMPLORO para qualquer um da minha vida, jogar. E nem venha com essa 'ah é muito caro' É BARATO PRA CARAMBA, aqui na minha moeda? metade do preço do Ori and the Will of the Wisps, um quarto do preço de um triplo AAA, se você não gostou de Ori, por favor, tente Silksong.",
            es: "¡Todavía no puedo creer que este juego MARAVILLOSO e INCREÍBLE, que he estado esperando durante MUCHOS años, se haya lanzado justo el día de mi cumpleaños! El 4 de septiembre. Y tengo que decir que este juego logró superar las inmensas expectativas que toda la comunidad tenía para la continuación de Hollow Knight. Si te encantan los *metroidvania* que te sueltan en medio de un mundo vivo y te dicen '¡espabílate y usa tus habilidades como jugador para superar el desafío!', junto con una historia que profundiza y conecta con el primer título, ¡tienes que jugar a este juego! Si ya de por sí recomiendo encarecidamente Ori and the Will of the Wisps, este es el segundo título que le IMPLORO a todo el mundo que pruebe. Y ni se te ocurra decir 'es que es muy caro': ¡es baratísimo! En mi moneda, cuesta la mitad que Ori and the Will of the Wisps y una cuarta parte de lo que vale un juego 'triple A'. Si no te gustó Ori, por favor, dale una oportunidad a Silksong."
        }
    },
    "spore": {
        trailer: "jVH9Q8M8eaQ",
        bgImage: null,
        links: {
            steam: "https://store.steampowered.com/app/17390/",
            xbox: null,
            ps: null,
            nin: null
        },
        review: {
            en: "Spore—what an incredible game from my childhood! If you enjoy The Sims (it was made by the same creators) or games that combine multiple gameplay styles into one, please give Spore a try. There is—and I dare say this—absolutely nothing else like it; it is an exceptionally unique game with a distinct personality, and you can really feel that it was crafted with care. It was originally intended to be more detailed, but the developers decided to simplify things—partly to appeal to a younger audience and partly due to budget constraints. Regardless, even if you end up only enjoying the creature stage and not the space stage (which is quite extensive if you play all the way to the end), please, give it a chance.",
            pt: "Spore, que jogo da minha infacia incrível! Se você gosta de The Sims (feito pelos mesmos criadores de The Sims) ou jogos que inclui múltiplos estilos de jogos em um só, por favor de uma chance á Spore, não tem NENHUM eu ouso disser, NENHUM outro jogo parecido com Spore, é um jogo extremamente único e com sua própria personalidade e da para sentir que ele foi feito com carinho, era para ele originalmente ser mais detalhado mas decidiram simplificar as coisas por questão de chamar mais atenção do público menor e também por custos, mas de qualquer forma, por favor mesmo que você acabe só gostando do estagio criatura e não goste do estagio espacial (que também é BEM longo se fores até o final do jogo) de uma chance.",
            es: "¡Spore, qué juego tan increíble de mi infancia! Si te gusta The Sims (creado por los mismos desarrolladores) o los juegos que combinan múltiples estilos en uno solo, por favor, dale una oportunidad a Spore. No hay NINGÚN otro juego parecido —me atrevería a decir que no existe ninguno—; es un título sumamente único, con una personalidad propia y en el que se nota que fue hecho con mucho cariño. Originalmente iba a ser más detallado, pero decidieron simplificarlo para atraer a un público más joven y también por cuestiones de costos. Aun así, aunque al final solo te guste la etapa de criatura y no la etapa espacial (que, por cierto, es bastante larga si llegas hasta el final del juego), ¡dale una oportunidad!"
        }
    },
    "plants vs zombies": {
        trailer: "CHAbHz8iYHc",
        bgImage: null,
        links: {
            steam: "https://store.steampowered.com/app/17390/",
            xbox: "https://www.xbox.com/games/store/plants-vs-zombies/br1d9cr82zm8",
            phone: "https://play.google.com/store/apps/details?id=com.ea.game.pvzfree_row&hl=en"
        },
        review: {
            en: "Plants vs. Zombies is another game from my childhood that stands as a pinnacle of the tower defense genre. If you’re looking for a unique tower defense experience—one so intuitive that even a child can pick it up, learn what each plant does, and figure out which plants to use against specific zombies—this is the game for you. It may be silly, but it respects a child’s intelligence, encouraging them to think critically about which plants to bring to counter different zombies. Plus, the soundtrack is truly memorable. Despite its age and its limited, low-resolution display, please make sure to purchase only the original or the GOTY (Game of the Year) version. The Replanted remake was created without any soul or care—to the point that the original developers and the original artist weren't even contacted to help recreate the artwork. If you’re looking for a distinct tower defense game, this is it; please, give it a chance.",
            pt: "Plantas vs. Zumbis, esse é mais um jogo da minha infância que é um dos picos de tower defense, se você quer um tower defense único onde tudo é intuitivo ao ponto que uma criança pode pegar o jogo e aprender oque cada planta faz e qual planta usar em quais zumbis, é esse o jogo, ele é bobo mas leva a inteligência de crianças á sério e faz elas realmente pensarem em qual plantas levar para conterar quais zumbis além da soundtrack ser memorável, apessar de sua idade e preso em uma resolução pequena, por favor compre apenas a versão original ou GOTY, a versão Replanted remake foi feito sem alma e sem carinho tanto que não contactaram os desenvolvedores originais e nem o artista original para refazer á arte, mas se procuras um tower defense diferenciado, é esse o jogo, por favor de á esse jogo uma chance.",
            es: "Plants vs. Zombies es otro juego de mi infancia que representa uno de los puntos culminantes del género tower defense. Si buscas un tower defense único, donde todo es tan intuitivo que incluso un niño puede empezar a jugar, aprender qué hace cada planta y saber cuál utilizar contra cada tipo de zombi, este es el juego indicado. Aunque tiene un tono desenfadado, respeta la inteligencia de los niños y los obliga a pensar realmente qué plantas elegir para contrarrestar a los distintos zombis; además, su banda sonora es memorable. A pesar de su antigüedad y de estar limitado a una resolución baja, te recomiendo adquirir únicamente la versión original o la edición GOTY. La versión remake llamada Replanted carece de alma y de cariño; de hecho, ni siquiera contactaron a los desarrolladores ni al artista original para rehacer el apartado visual. En definitiva, si buscas un tower defense distinto, este es el juego; por favor, dale una oportunidad."
        }
    },
    "slime rancher": {
        trailer: "oOL-dsa79Xs",
        bgImage: null,
        links: {
            steam: "https://store.steampowered.com/app/433340/",
            xbox: "https://www.xbox.com/games/store/slime-rancher/c2nc88m7nwz1",
            ps: "https://store.playstation.com/product/UP2293-CUSA11587_00-SLIMERANCHER0001",
            nin: "https://www.nintendo.com/store/products/slime-rancher-plortable-edition-switch/?srsltid=AU7gw4VkMNQJYL-nzQtsVXUkcoOjfRHy0jcikNWzJSJPowMHNHB-NpMW"
        },
        review: {
            en: "Slime Rancher! More a game of my childhood! Is this how you make 'ANIMINHANIMINHA', do you want a farm game where you manage slimes and sell your...poops? This game is for you! I became rich selling poops two porrinhas and using the same for sciences where you produce drones that will automate the entire process for you! This way you can relax and just explore trying to find the golden ginger drug since it only spawns THREE PER DAY (game day, not real life) AAAAAAAAAAAAAA. Jogue é um jogo muito bom, ANIMINHANIMINHA.",
            pt: "Slime Rancher! Mais um jogo da minha infância! Esse faz até eu fazer 'ANIMINHANIMINHA' se você quer um jogo de fazenda onde você gerencia slimes e vende seus...cocos? esse jogo é para você! Fique rico vendendo cocos dos porrinhas e usando os mesmo para ciências onde produziras drones que irão automatizar todo o processo para você! Dessa forma podes relaxar e apenas explorar tentando achar a droga do gengibre dourado sendo que só spawnam TRES POR DIA (dia do jogo, não da vida real) AAAAAAAAAAAAAA. Jogue é um jogo muito bom, ANIMINHANIMINHA.",
            es: "¡Slime Rancher! ¡Otro juego de mi infancia! ¡Este me pone tan emocionado que hasta me dan 'ANIMINHANIMINHA'! Si buscas un juego de granja donde gestionas slimes y vendes sus... ¿cacas?, ¡este es tu juego! Hazte rico vendiendo los excrementos de estas cositas y úsalos para la ciencia: ¡podrás crear drones que automaticen todo el proceso por ti! Así podrás relajarte y dedicarte a explorar, intentando encontrar el maldito jengibre dorado... ¡del que solo aparecen TRES AL DÍA (en el juego, no en la vida real)! ¡AAAAAAAAAAAAAA! ¡Juégalo, es un juego buenísimo, ANIMINHANIMINHA."
        }
    },
    "slime rancher 2": {
        trailer: "wQXXXtOXvfE",
        bgImage: null,
        links: {
            steam: "https://store.steampowered.com/app/1657630/",
            xbox: "https://www.xbox.com/games/store/slime-rancher-2/9phfj0n31nv1",
            ps: "https://store.playstation.com/product/UP2293-PPSA20152_00-0019683213812595",
            nin: null
        },
        review: {
            en: "Slime Rancher 2! If you liked the first one, you’ll enjoy this sequel! It introduces new features absent from the original while maintaining the core gameplay loop: abducting—I mean, capturing—slimes, selling their poops for cash and scientific resources, and acquiring drones to automate the process... wait a minute... do you only get the drones after beating the game??? Why do they require so many materials—to the point where you finish the game before you can even automate anything? Eh... forget about the drones; they’re only useful if you plan on playing past the game’s conclusion. Still, it’s a great game—though I really miss the resource collectors...ANIMINHANIMINHA",
            pt: "Slime Rancher 2! Se gostastes do primeiro, irás gostar dessa continuação! Ela trás coisas novas que o primeiro não possui além de manter a mesma base de você raptar QUERO DISSER capturar os slimes, vender seus cocos por dinheiro e ciência e adquirir drones para automatizar o processo...perae...os drones são após zerar o jogo??? Por que eles demandam tanto material ao ponto que você zera o jogo antes de automatizar? Uh...esquece os drones, só vão ser úteis á você se planejas jogar além do fim do jogo, mas ainda sim é um bom jogo, tirando a coleta de matérias que virou manual...que saudades dos coletores...ANIMINHANIMINHA",
            es: "¡Slime Rancher 2! Si te gustó el primero, ¡te gustará esta continuación! Trae novedades que el primero no tenía, aunque mantiene la misma base: capturar slimes, vender sus cacas para obtener dinero y recursos científicos, y conseguir drones para automatizar el proceso... un momento... ¿los drones se consiguen después de terminar el juego? ¿Cómo es que requieren tantos materiales, al punto de que terminas el juego antes de poder automatizar nada? Bueno... olvida lo de los drones; solo te serán útiles si planeas seguir jugando después del final. Aun así, es un buen juego, aunque la recolección de materiales ahora es manual... ¡cómo extraño los recolectores...ANIMINHANIMINHA"
        }
    },
    "forager": {
        trailer: "RcmEI2A0vds",
        bgImage: null,
        links: {
            steam: "https://store.steampowered.com/app/751780/",
            xbox: "https://www.xbox.com/games/store/forager/9mv2s7q5phsw",
            ps: "https://store.playstation.com/product/UP3864-CUSA13967_00-APP0990000000022",
            nin: "https://www.nintendo.com/store/products/forager-switch/?srsltid=AU7gw4UTI-V9hvHGsizgoQ184_ssb6Tc7ve6RDKWV-0NCyiPXmVIXuvo",
            phone: "https://play.google.com/store/apps/details?id=com.humblebundle.forager&hl=en"
        },
        review: {
            en: "Forager! It’s a simple gathering game where you collect resources and keep progressing further and further. There isn’t much to say about it, other than the fact that I really like it—though it was abandoned by the original creator, even after a multiplayer mode was promised but never added... Oh, and it has mod support! As far as I know, there’s an attempt to create a multiplayer mode for the game via mods, but I’m not sure if that project is still moving forward...",
            pt: "Forager! Esse jogo é um simples jogo de coletânea, onde juntas recursos e vais avançando mais e mais, não tem muito oque disser á esse jogo anão ser de eu gostar bastante dele e que ele foi abandonado pelo criador original quando prometeram multiplayer e nunca ser adicionado...ah e tem suporte á mods! Até onde eu sei estão tentando criar multiplayer via mods no jogo, mas não sei se esse projeto está indo para frente...",
            es: "¡Forager! Es un juego sencillo basado en la recolección, donde vas reuniendo recursos y avanzando cada vez más. No hay mucho que decir al respecto, salvo que me gusta bastante; eso sí, el creador original lo abandonó después de haber prometido un modo multijugador que nunca llegó a añadirse... ¡ah, y es compatible con mods! Por lo que sé, están intentando implementar el multijugador mediante mods, pero no tengo claro si ese proyecto sigue adelante..."
        }
    },
    "mad max": {
        trailer: "wioZwZbUgn0",
        bgImage: null,
        links: {
            steam: "https://store.steampowered.com/app/234140/",
            xbox: "https://www.xbox.com/games/store/mad-max/bq2f1lgnl6m1",
            ps: "https://www.playstation.com/games/mad-max/",
            nin: null
        },
        review: {
            en: "Mad Max actually has a game! Coming from the same developers as Just Cause, you can bet there will be plenty of explosions. It features some of the best vehicular combat around, melee combat in the style of the Batman: Arkham series, and upgrade systems for both your car and Max himself—all set within a massive, living world waiting to be explored. If you’re looking for an imaginative world to get lost in—without it being yet another medieval fantasy setting—then this game is for you.",
            pt: "Mad Max possui sim um jogo! Dos mesmos desenvolvedores de Just Cause então pode acreditar que haverá muitas explosões, é um jogo com um dos melhores combates de carro, combate corpo a corpo estilo Batman Arkham, upgrades tanto para seu carro e Max além de um mundo vivo e gigante para explorar, se estás á procura de um mundo fantasioso para se perder sem ser um medieval pela centesima vez? Esse jogo é para você.",
            es: "¡Mad Max sí que tiene un videojuego! Es obra de los mismos desarrolladores de Just Cause, así que puedes estar seguro de que habrá muchas explosiones. Cuenta con uno de los mejores sistemas de combate vehicular, combates cuerpo a cuerpo al estilo de Batman Arkham, mejoras tanto para tu vehículo como para Max, y un mundo enorme y lleno de vida para explorar. ¿Buscas un mundo fantástico en el que perderte, que no sea el típico escenario medieval por centésima vez? Entonces, este juego es para ti."
        }
    },
    "maneater": {
        trailer: "EP8TiVaGDBE",
        bgImage: null,
        links: {
            steam: "https://store.steampowered.com/app/629820/",
            xbox: "https://www.xbox.com/games/store/maneater/9p5b81kvdgp1",
            ps: "https://store.playstation.com/product/UP0115-PPSA01861_00-MANEATER00000001",
            nin: "https://www.nintendo.com/store/products/maneater-switch/?srsltid=AU7gw4WBgbKqBLIH9qBVDEwGrVKn5s0ttainxzBAs-vD03jng45CPgQ-"
        },
        review: {
            en: "Maneater! If you’ve always dreamed of a 3D Hungry Shark game, this one is definitely for you! You control a shark that evolves as you progress; you can follow a specific evolutionary path or mix and match traits, gradually becoming capable of devouring larger and larger prey. If you’re looking for pure, chaotic fun—without worrying about a deep, complex story—just dive in and enjoy! This game is guaranteed to put a huge smile on your face! Oh, and a sequel has been announced for 2027—I’m eagerly and happily looking forward to it!",
            pt: "Maneater! Se você sempre sonhou em um Hungry Shark 3D esse jogo é definitivamente para você! Você controla um tubarão que evolui conforme avanças no jogo podendo seguir o seu próprio caminho evolutivo ou misturar eles se quiseres e lentamente podendo comer coisas maiores e maiores, se queres puro chãos e diversão sem estar interessado em historia profunda, se divirta! Esse jogo vai te dar um sorrisão! Ah e a continuação foi anunciada para 2027, estou aguardando ansiosamente alegre!",
            es: "¡Maneater! Si siempre has soñado con un *Hungry Shark* en 3D, ¡este juego es definitivamente para ti! Controlas a un tiburón que evoluciona a medida que avanzas; puedes seguir tu propia ruta evolutiva o combinar varias, permitiéndote devorar presas cada vez más grandes. Si buscas pura acción y diversión, sin necesidad de una historia profunda, ¡disfrútalo! ¡Este juego te sacará una gran sonrisa! Ah, y se ha anunciado una secuela para 2027; ¡la espero con mucha ilusión!"
        }
    },
    "minecraft": {
        trailer: "MmB9b5njVbA",
        bgImage: null,
        links: {
            pc: "https://www.minecraft.net/choose-your-game",
            xbox: "https://www.xbox.com/games/store/minecraft/9mvxmvt8zkwc",
            ps: "https://store.playstation.com/product/UP4433-CUSA00744_00-MINECRAFTPS40001",
            nin: "https://www.nintendo.com/store/products/minecraft-switch/?srsltid=AU7gw4Uc4sglFobI_WjE7OMGgk1dVu3qw0L6ynGWKcZZwDLrXI0989m3",
            phone: "https://play.google.com/store/apps/details?id=com.mojang.minecraftpe&hl=en"
        },
        review: {
            en: "Minecraft, Minecraft! The second best-selling game in history and, without a doubt, a landmark in gaming. I’ve never had a particularly deep history with Minecraft—I played it a few times during my childhood, but never to the point of having a unique, long-term world saved somewhere (like on an old Xbox or PlayStation). Even so, I still have a soft spot for it, and I’m always asking my friends to play with me every now and then (though most of them say no—looking at you, Daniel!). What a game, though—just have fun building!",
            pt: "Minecraft, Minecraft! O segundo jogo mais vendido da historia e certamente um marco para os jogos, eu nunca possui uma historia muito profunda com Minecraft, joguei algumas vezes na minha infância mas nada ao ponto de ter um mundo único salvo para sempre que ainda tenho la de sei la do Xbox our Playstation, mesmo assim, sinto um carinho por esse jogo e sempre peço para os meus amigos para jogarmos de vez em quando (apessar da maioria negar, principalmente você Daniel) mas que jogo é esse em, só se divirta ae construindo.",
            es: "¡Minecraft, Minecraft! El segundo juego más vendido de la historia y, sin duda, un hito en el mundo de los videojuegos. Nunca tuve una relación muy profunda con Minecraft; jugué algunas veces durante mi infancia, pero no tanto como para haber conservado un mundo único guardado para siempre —quizás en alguna Xbox o PlayStation de hace tiempo—. Aun así, le guardo cariño a este juego y siempre les pido a mis amigos que juguemos de vez en cuando (aunque la mayoría se niega, ¡especialmente tú, Daniel!). ¡Qué gran juego! Simplemente diviértete construyendo."
        }
    },
    "minecraft dungeons": {
        trailer: {
            en: "KCbE47v1qVk",
            pt: "B6-0nTohcW0",
            es: "KCbE47v1qVk"
        },
        bgImage: null,
        links: {
            steam: "https://store.steampowered.com/app/1672970/",
            xbox: "https://www.xbox.com/games/store/minecraft-dungeons/9n8nj74fztg9",
            ps: "https://store.playstation.com/product/UP4433-CUSA18779_00-DUNGEONSPS400000",
            nin: "https://www.nintendo.com/store/products/minecraft-dungeons-switch/?srsltid=AU7gw4X81w4ocIyB60NaG3OHQ7h1Z2IYrEHcFDC00-K1aMXhgUbD8PH_"
        },
        review: {
            en: "Minecraft Dungeons! Are you looking for a simple dungeon crawler that a child can understand, yet one that’s deep enough for you to become incredibly overpowered? This is the game for you! It features multiplayer for up to 4 players, and with all its DLCs included, it’s very affordable and will keep you entertained for hours. If you’re looking for a great introduction to the dungeon crawler genre, this is the game, my friend!",
            pt: "Minecraft Dungeons! Se procuras um Dungeon's Crawler simples que uma criança consegue entender mas ao mesmo profundo que consegues ficar extremamente OP? Esse jogo é para você! Ele possui multiplayer até 4 jogados, com todas as suas DLC's sai um preço baratinho e vai te divertir por horas, se procuras um belo introdutor á Dungeon's Crawler esse é o jogo meu caro!",
            es: "¡Minecraft Dungeons! ¿Buscas un dungeon crawler sencillo, que un niño pueda entender, pero a la vez lo suficientemente profundo como para volverte extremadamente poderoso? ¡Este juego es para ti! Cuenta con modo multijugador para hasta 4 personas; con todos sus DLC, sale a un precio muy económico y te mantendrá entretenido durante horas. Si buscas una excelente introducción a los dungeon crawlers, ¡este es el juego, amigo mío!"
        }
    },
    "the wild robot": {
        trailer: {
            en: "pSI0XetHZCw",
            pt: "TbLVc8fnw7c",
            es: "pSI0XetHZCw"
        },
        bgImage: null,
        links: { imdb: "https://www.imdb.com/title/tt29623480/" },
        review: {
            en: "I went to the theater to see The Wild Robot, expecting it to be a beautiful film based on the trailers—but what I actually experienced was beyond my expectations. You know when something is so beautiful that you simply run out of words to describe it? That is literally this movie. Unfortunately, this review won’t be very long because, as I mentioned, I just don’t have the words—PLEASE, just go watch it! Did you know it’s based on a book series? And that a second film, covering the second book, is already in production? I’m eagerly awaiting the trailer—and, eventually, the movie itself!",
            pt: "O Robô Selvagem, eu fui ao cinema para ver o filme pensando que séria de fato um filme bonito vendo pelos seus trailers mas oque eu acabei vendo eu não esperava, sabe quando algo é tão bonito que você não tem palavras para descrever? É literalmente esse filme, infelizmente essa review não vai ser tão longa pois, como falei anteriormente, não tenho palavras para descrever esse filme, SÓ POR FAVOR ASSISTA! inclusive sabias que ele é baseado em uma série de livros? E que o segundo filme do segundo livro já está sendo produzido? Eu estou esperando ansiosamente (no sentido bom) para o trailer eventualmente filme.",
            es: "Fui al cine a ver Robot salvaje, pensando —a juzgar por los tráileres— que sería una película realmente hermosa; pero lo que vi superó mis expectativas. ¿Sabes cuando algo es tan bonito que te faltan palabras para describirlo? Pues así es, literalmente, esta película. Lamentablemente, esta reseña no será muy larga porque, como dije antes, no tengo palavras para describirla; ¡solo, por favor, mírala! Por cierto, ¿sabías que está basada en una serie de libros? ¿Y que ya se está produciendo la segunda parte, basada en el segundo libro? ¡Espero con muchas ganas el tráiler de la próxima película!"
        }
    },
    "mune the guardian of the moon": {
        trailer: "2ONAlFkeYYo",
        bgImage: null,
        links: { imdb: "https://www.imdb.com/title/tt3858372/" },
        review: {
            en: "If you were to ask me what my favorite animated film is, it would undoubtedly be Mune: Guardian of the Moon. Yes, the characters are generic—the scrawny protagonist is chosen to be the Guardian of the Moon, while the muscular jerk is the Guardian of the Sun, and a clever girl has to guide this trio to save their world! I won’t deny that the film is extremely generic in that regard, but—my God—what an original, beautiful, and vibrant world it has! If I had to choose just one film to show everyone in my life, this would be it, without a shadow of a doubt.",
            pt: "Mune o Guardião da Lua, se você me perguntar qual é o meu filme de animação favorito, é esse sem dúvidas, sim os personagens são genéricos o protagonista que parece com um magricelo é escolhido para ser o guardião da lua, enquanto o musculoso babaca é o guardião do sol e a garota inteligente tem que guiar esse trio para salvar o mundo deles! Sim, nessa questão o filme é extremamente genérico não nego disso, mas MEU DEUS QUE MUNDO ORIGINAL, LINDO E VIVO. Esse é o filme, que se for para eu escolher para mostrar um único filme á todo mundo da minha vida, é esse sem sequer uma dúvida, esse filme.",
            es: "Mune, el guardián de la Luna: si me preguntas cuál es mi película de animación favorita, es esta, sin lugar a dudas. Sí, los personajes son genéricos: el protagonista —que parece un tipo escuálido— es elegido para ser el guardián de la Luna, mientras que el musculoso imbécil es el guardián del Sol, ¡y la chica inteligente tiene que guiar a este trío para salvar su mundo! Es cierto, en ese aspecto la película es extremadamente genérica, no lo niego; pero, ¡Dios mío, qué mundo tan original, hermoso y lleno de vida! Si tuviera que elegir una sola película para mostrársela a todas las personas importantes de mi vida, sería esta, sin la menor duda."
        }
    },
    "puss in boots the last wish": {
        trailer: {
            en: "Y5zqweZAEKI",
            pt: "Dyc8YANE6i8",
            es: "Q9ExW8jvVwE"
        },
        bgImage: null,
        links: { imdb: "https://www.imdb.com/title/tt3915174/" },
        review: {
            en: "Puss in Boots: The Last Wish—what an unexpectedly incredible film! The first movie was pretty generic and largely ignored by everyone, so when a sequel was announced, I assumed it would just be another run-of-the-mill, uninspired entry. Thankfully, I—and everyone else—was wrong. My goodness, what a fantastic film! If you’re looking for something that can be silly, yet deep and serious when it needs to be—featuring multiple villains who interact with one another in a masterfully orchestrated way—or if you just need something to watch on an afternoon when you have no idea what to pick, please, watch this movie.",
            pt: "Gato de Botas e o último desejo, que filme inesperadamente incrível, o primeiro filme foi um filme genérico e que ninguém deu bola basicamente, então quando anunciaram uma continuação eu pensei que séria mais um genérico com nada de diferente, ainda bem que eu e todo mundo estava errado, pois MEU DEUS que filme simplesmente BOM, se queres um filme bobo mas quando é necessário profundo e sério com múltiplos vilões que conseguem se interagir entre si de uma forma muito bem orchestrada ou um filme para assistir em uma tarde sem ideia de oque assistir? Por favor, assista esse filme. ",
            es: "El Gato con Botas: El último deseo — ¡qué película tan increíble e inesperada! La primera entrega fue bastante genérica y, básicamente, a nadie le importó; por eso, cuando anunciaron una secuela, pensé que sería otra película genérica más, sin nada especial. Menos mal que yo —y todo el mundo— estábamos equivocados, porque, ¡madre mía!, ¡qué película tan buena! ¿Buscas algo que sea divertido y ligero, pero que a la vez sepa ponerse serio y profundo cuando hace falta? ¿Quieres una historia con varios villanos que interactúan entre sí de una forma magistralmente orquestada? ¿O simplemente no sabes qué ver una tarde cualquiera? ¡Por favor, mira esta película!"
        }
    },
    "gravity falls": {
        trailer: {
            en: "fye6jbyWfG0",
            pt: "cbm4lnb5vWw",
            es: "fye6jbyWfG0"
        },
        bgImage: null,
        links: { imdb: "https://www.imdb.com/title/tt1865718/" },
        review: {
            en: "Gravity Falls is the first in a trilogy of Disney mystery series (though not all by the same producer) that begin with a silly tone but evolve into deeply complex, unforgettable stories. I first watched it during my teenage years, and—my goodness—the mysteries, the theories, and the interactive elements are incredible! Anyone can get involved, yet those who want to dive deeper—deciphering codes and hunting for hidden secrets—will find a real challenge. How did a show like this ever get the green light from Disney? Gravity Falls is truly unique among Disney series; its very existence defies the typical Disney fare—which often consists of nothing more than endless, mindless silliness—by encouraging children to think, all while respecting their intelligence. If I had to recommend just one series for you to watch? Gravity Falls—please, give it a watch.",
            pt: "Gravity Falls, a primeira série da Disney da Trilogia (não do mesmo produtor) das séries de mistério e historias extremamente profundas que começam de forma boba e que lá para frente se tornam séries inesquecíveis, esse como sendo o primero eu vi na minha adolescência e meu deus os mistérios, teorias formas de feitas que qualquer um pode participar mas ao mesmo tempo quem se aprofunda em cifras e caçar mistérios tem com oque se desafiar em uma série que de alguma forma passou o greenlight da Disney de todas as coisas? Gravity Falls é único em questão de série DA Disney, a sua mera existência desafia todas as outras séries da Disney que são apenas coisas bobas com mais coisa bobas, fazendo as crianças pensar e não questionando suas inteligências. Se for para eu escolher para veres uma única série? Gravity Falls, por favor, assista.",
            es: "Gravity Falls es la primera de una trilogía de series de Disney (aunque no del mismo productor) centradas en el misterio y en tramas sumamente profundas; comienzan de manera sencilla y desenfadada, pero con el tiempo se transforman en obras inolvidables. Siendo la primera de ellas, la vi durante mi adolescencia y, ¡madre mía!, los misterios, las teorías y la forma en que están planteados permiten que cualquiera participe; al mismo tiempo, quienes deciden profundizar —descifrando códigos y buscando enigmas— encuentran un verdadero desafío. ¿Cómo es possible que una serie así recibiera luz verde de Disney? Gravity Falls es única dentro del catálogo de Disney; su mera existencia desafía al resto de sus producciones —que suelen limitarse a contenidos triviales—, invitando a los niños a pensar y respetando su inteligencia. Si tuviera que recomendarte una sola serie, sería Gravity Falls. Por favor, mírala."
        }
    },
    "amphibia": {
        trailer: "1Q10vjRMBrY",
        bgImage: null,
        links: { imdb: "https://www.imdb.com/title/tt8050740/" },
        review: {
            en: "Amphibia is the second entry in a Disney trilogy of sorts—a collection of series (not all by the same producer) that feature deep, complex storylines, despite starting off with a silly tone and eventually evolving into unforgettable shows. I only discovered Amphibia after finishing The Owl House and looking for something similar; consequently, I ended up watching it well after it had concluded—technically in the 'wrong' order. Even so, it remains an excellent series. While it doesn't quite surpass *Gravity Falls*, if you’re looking for something that leans more into adventure than the mystery-focused style of Gravity Falls, give this show a watch. Trust me—it’s well worth pushing through the sillier moments of the first season.",
            pt: "Amphibia, a segunda série da Disney da Trilogia (não do mesmo produtor) das séries de mistério e historias extremamente profundas que começam de forma boba e que lá para frente se tornam séries inesquecíveis, esse como sendo o segundo eu acabei vendo bem depois da sua finalização, sinceramente só descobri sua existência após ter assistido The Owl House e procurando algo similar para assistir, mesmo assim, eu acidentalmente vendo na ordem supostamente 'errada', ainda é uma série muito boa, não ultrapassa Gravity Falls, mas se queres algo com mais aventura do que mistério que é Gravity Falls, assista essa série, confie em mim, valera apena as coisas bobas da primeira temporada.",
            es: "Amphibia es la segunda entrega de una trilogía de series de Disney (aunque no del mismo productor) caracterizadas por sus misterios y tramas sumamente profundas; comienzan de manera desenfadada, pero con el tiempo se transforman en obras inolvidables. En mi caso, al ser la segunda, la vi mucho después de que hubiera concluido. De hecho, solo descubrí su existencia tras haber visto The Owl House y buscar algo similar. A pesar de haberla visto en un orden supuestamente 'incorrecto', sigue siendo una serie excelente. Si bien no llega al nivel de *Gravity Falls*, si buscas algo con más aventura —a diferencia de Gravity Falls, que se centra más en el misterio—, dale una oportunidad. Créeme, valdrá la pena soportar los momentos más tontos de la primera temporada."
        }
    },
    "the owl house": {
        trailer: "9tLbSLMt2Co",
        startTime: 2.75,
        bgImage: null,
        links: { imdb: "https://www.imdb.com/title/tt8050756/" },
        review: {
            en: "The Owl House is the third entry in what I consider a trilogy of Disney series—though not produced by the same person—that share a common DNA: they begin as lighthearted, silly shows, but evolve into deeply complex, unforgettable stories. I followed The Owl House as it was being released, and to this day, I remain frustrated by Disney’s decision to cancel it and truncate its third season into just three extended episodes. If you enjoy magic, fantastical worlds, and adventures that explore differing perspectives—as well as the reality that some people are simply incapable of change—then you should watch *The Owl House*. It’s less 'silly' than Amphibia; even in its first season, it takes itself more seriously, despite the occasional lighthearted moment. It also features the most well-developed villain of the entire trio. Please, give this series a chance.",
            pt: "A Casa Coruja, a terceira série da Disney da Trilogia (não do mesmo produtor) das séries de mistério e historias extremamente profundas que começam de forma boba e que lá para frente se tornam séries inesquecíveis, esse como sendo o terceiro eu acabei vendo esse também no seus lançamentos e até hoje continuo irritado como a Disney cancelou e diminuiu a terceira temporada para apenas 3 episódios longos. Mas bem, se gostas mais de magia e um mundo mágico com umas aventuras aqui e ali com questionamento de pespectivas diferentes e como algumas pessoas não conseguem mudar, assista A Casa Coruja, é menos bobo que Amphibia, na primeira temporada já se leva mais a sério apessar de ter coisas bobas aqui e ali, além de ter o vilão mais detalhado da Trilogia, por favor, de uma chance á essa série.",
            es: "The Owl House es la tercera entrega de una trilogía de series de Disney —aunque no comparten el mismo productor— centradas en el misterio y en tramas sumamente profundas; comienzan de manera desenfadada, pero con el tiempo se transforman en obras inolvidables. Al ser la tercera, la seguí desde su estreno, y hasta el día de hoy me indigna cómo Disney la canceló y redujo su tercera temporada a solo tres episodios de larga duración. En fin, si te gusta la magia, los mundos fantásticos, las aventuras y el planteamiento de diferentes perspectivas —incluyendo la idea de que algunas personas simplemente no pueden cambiar—, dale una oportunidad a The Owl House. Es menos infantil que *Amphibia*; desde la primera temporada se toma más en serio, a pesar de contener algunos momentos ligeros o tontos aquí y allá. Además, cuenta con el villano mejor desarrollado de toda la trilogía. ¡Por favor, dale una oportunidad a esta serie!"
        }
    },
    "bna brand new animal": {
        trailer: {
            en: "3Okzra8Anr4",
            pt: "JCrlEzBDZDQ",
            es: "3Okzra8Anr4"
        },
        bgImage: null,
        links: { imdb: "https://www.imdb.com/title/tt12013558/" },
        review: {
            en: "Okay, I know this might look bad, but trust me—it’s a good anime. BNA: Brand New Animal—a series that, at first glance, seems like just another silly anime about a school-age girl and a serious, older guy—actually delves into themes like identity, prejudice, personal freedom, and the power of choice. It may seem frivolous on the surface, but it’s quite profound underneath. I realize it might look like 'furry bait', but please, give it a chance!",
            pt: "Ok, eu sei que isso parece ruim, mas confie em mim, é um anime bom. BNA: Brand New Animal, essa série que parece ser mais um anime bobo de uma garota estudantil com um cara mais velho sério acaba levando em consideração questionamento de identidade, preconceito de qualquer forma e de liberdade pessoal e de escolhas enquanto parece bobo por fora e profundo por dentro, Sei que parece um bait de anime furry, mas por favor, de uma chance á esse anime!",
            es: "Vale, sé que esto suena mal, pero confía en mí: es un buen anime. BNA: Brand New Animal —una serie que, a simple vista, parece el típico anime tonto sobre una chica estudiante y un tipo mayor más serio— termina abordando cuestiones como la identidad, los prejuicios, la libertad personal y la capacidad de elección. Por fuera puede parecer una tontería, pero por dentro es profundo. Sé que puede parecer un simple gancho para atraer a los fans de lo furry, ¡pero, por favor, dale una oportunidad a este anime!"
        }
    },
    "kill la kill": {
        trailer: "B98NY8Hfo7I",
        bgImage: null,
        links: { imdb: "https://www.imdb.com/title/tt3114390/" },
        review: {
            en: "Okay, I know this might sound EVEN WORSE than BNA, but please trust me once again—this is, without a doubt, my favorite anime. If I had to choose just one anime to recommend to anyone in my life, this would be it. It features wild, frenetic action; if you’re into that, you’re going to love it. And while the way the characters gain strength might seem silly—even ridiculous—I won’t deny that; but that very absurdity is actually the core message of the show. It’s about the freedom to be yourself and express yourself however you choose—keeping your personality and dreams intact, with the determination to achieve whatever it is you desire. Please, give this anime a chance.",
            pt: "Ok, eu sei que isso parece AINDA MAIS RUIM que BNA, mas por favor confie em mim mais uma vez, pois esse é sem sobra de dúvidas meu anime favorito, se for para eu escolher e pedir para qualquer um da minha vida assistir um único anime, séria esse. Esse anime tem uma ação frenetica e maluca, se gostas disso vais adorar esse anime e apessar de se parecer levar a bobo da forma que as personagens ficam fortes e até mesmo ridículo, eu não nego, mas esse mesmo ridículo é a própria mensagem que esse anime quer disser, ele quer disser a liberdade de ser e se representar da forma que quiser, de manter sua personalidade e sonhos intactos com uma determinação de alcançar não importa oque desejas. Por favor, de uma chance á esse anime.",
            es: "Vale, sé que esto parece AÚN PEOR que BNA, pero por favor, confía en mí una vez más; sin lugar a dudas, este es mi anime favorito. Si tuviera que elegir un solo anime para recomendarle a alguien importante en mi vida, sería este. Tiene una acción frenética y alocada; si te gusta eso, te va a encantar. Aunque pueda parecer una tontería —incluso algo ridículo— la forma en que los personajes se vuelven tan fuertes, no lo niego; pero es precisamente ese aspecto ridículo el que transmite el mensaje central de la obra: la libertad de ser y expresarse como uno quiera, de mantener intactos la propia personalidad y los sueños, con la determinación de alcanzar cualquier meta, sin importar lo que desees. Por favor, dale una oportunidad a este anime."
        }
    },
    "of all things, i became a crow": {
        trailer: null,
        bgImage: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/145538-7NeehXP9Ipf6.jpg",
        links: { anilist: "https://anilist.co/manga/145538/Hapirimyeon-Kkamagwiga-Doeeobeoryeotda" },
        review: {
            en: "Of All Things, I Became a Crow—okay, I’ll be honest: I like isekai. I even watch the ones where the character becomes insanely overpowered and all that—you know the drill—but what really grabs me are the more unique, laid-back ones. You know, stories about facing challenges and trying to live life beyond just constant 'who's the strongest' battles, or simply building a new life in a unique world. That’s the kind of isekai I enjoy: something silly yet self-serious, something calm that still features combat. This manhwa fits that second category; it’s more relaxed but still has its share of fights. If youre curious or it caught your eye, give it a look! You might find it interesting.",
            pt: "Of All Things, I became a Crow, ok, serei sincero, eu gosto de isekai. Eu até assisto aqueles que o personagem fica extremamente forte e todo o blá blá blá, mas oque mais me chama atenção mesmo são os que são mais únicos e mais calmos sabe? Enfrentando desafios e tentando viver no mundo além de lutas constantes de ver quem é o mais forte ou simplesmente montando uma nova vida em um mundo único. Esse tipo de isekai que eu gosto, algo bobo que ainda se leva a sério, algo calmo mas que ainda tem lutas. Esse Manhwa se encaixa no segundo, ele é mais calmo mas também tem suas lutas, se ficares curioso ou chamou sua atenção, de uma olhada! Talvez te interessa!",
            es: "Of All Things, I Became a Crow. Vale, seré sincero: me gustan los isekai. Veo incluso aquellos en los que el personaje se vuelve extremadamente fuerte y todo ese rollo, pero lo que más me llama la atención son los que resultan más singulares y tranquilos, ¿sabes? Aquellos en los que los protagonistas enfrentan desafíos y tratan de vivir en otro mundo —más allá de las constantes peleas para ver quién es el más fuerte— o simplemente construyen una nueva vida en un entorno único. Ese es el tipo de *isekai* que me gusta: algo un poco absurdo pero que aun así se toma en serio; algo tranquilo, pero que también incluye combates. Este *manhwa* encaja en esa segunda categoría: es más pausado, aunque también tiene sus peleas. Si te da curiosidad o te ha llamado la atención, ¡échale un vistazo! ¡Quizás te interese!"
        }
    }
};

// ==========================================
// BANCO DE DADOS DAS LISTAS PESSOAIS (DIREITA)
// ==========================================
const userLists = {
    games: {
        title: { en: "Games", pt: "Jogos", es: "Juegos" },
        icon: "fas fa-gamepad",
        activeLabel: { en: "Playing", pt: "Jogando", es: "Jugando" },
        terms: {
            items: { en: "games", pt: "jogos", es: "juegos" },
            verb: { en: "play", pt: "jogar", es: "jugar" }
        },
        active: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwC9mo0oPop0caT8xomIgNUJBEZV7yC4mhDR0acKKzNg&s=10",
            "https://store-images.s-microsoft.com/image/apps.61541.14619536583353710.9e307ff1-14c4-4d1a-813e-cef9bbad5dc5.90b67c9e-834e-44f1-b16c-16624e50f9b4",
            "https://imgproxy.eneba.games/qeAgvJP7pqfoSJBHVld8LNtHE3dNdOteCr4ONDiHMic/rs:fit:300/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy91/dGZZRkhuczl4ZVJ3/QUI2WU1nMGxqS2pZ/aHVOajgyZmJDc0h2/c09NNEtJLmpwZw",
            "https://static.wikia.nocookie.net/ptstarwars/images/f/fc/LEGO_Star_Wars_TCS.jpg/revision/latest?cb=20091230153244"
        ],
        frontlog: [
            "https://m.media-amazon.com/images/M/MV5BOTY2NGMxMDItZjE5ZS00ZTgyLWJmMzktM2EzNzc4ZWM2MDczXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            "https://store-images.s-microsoft.com/image/apps.21257.71633162879241707.7cf18b3b-9fa5-486f-9a68-067f06d50bf1.8f7909cf-d9a5-44aa-9901-2635255ab2ee",
            "https://m.media-amazon.com/images/M/MV5BM2NhYjJhMWYtN2Q3Yy00Y2IxLTg4MTQtZjA2ODk0MjZlMzVhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            "https://store-images.s-microsoft.com/image/apps.15028.14346269945886296.6f97d7ca-56af-436f-ba7f-82aed0a77d47.8ec73e74-2841-466d-bc9c-ed218c885826",
            "https://upload.wikimedia.org/wikipedia/commons/f/fc/Fez_%28video_game%29_cover_art.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original",
            "https://store-images.s-microsoft.com/image/apps.53771.71995601368241962.063be1f5-e727-44b9-9243-8f287ee0ae94.704f16ca-988d-4f3f-a8d2-17df8306a647",
            "https://image.api.playstation.com/vulcan/ap/rnd/202011/1819/m7gCTrMRQBTPHi87Mi3leVVY.jpg",
            "https://store-images.s-microsoft.com/image/apps.615.67362291782661543.eb0267ee-9235-487a-b697-5cc49c0703c1.327dcfde-8472-4f0e-b91e-9b4856238352",
            "https://store-images.s-microsoft.com/image/apps.52880.65129518710082559.30d43137-919f-4215-820e-038b409fb968.9b56f6c5-bfd1-4b02-beaf-666f707aa0da"
        ],
        backlog: [
            "https://image.api.playstation.com/vulcan/img/rnd/202112/2003/NmTEnt5SIVRk4dHDqcydervu.png",
            "https://upload.wikimedia.org/wikipedia/pt/a/a3/Frostpunk_cover_art.jpg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original",
            "https://m.media-amazon.com/images/I/81kAkZVV4RL._UF1000,1000_QL80_.jpg"
        ]
    },
    movies: {
        title: { en: "Movies", pt: "Filmes", es: "Películas" },
        icon: "fas fa-film",
        activeLabel: { en: "Watching", pt: "Assistindo", es: "Viendo" },
        terms: {
            items: { en: "movies", pt: "filmes", es: "películas" },
            verb: { en: "watch", pt: "assistir", es: "ver" }
        },
        active: [], frontlog: [], backlog: []
    },
    series: {
        title: { en: "Series", pt: "Séries", es: "Series" },
        icon: "fas fa-tv",
        activeLabel: { en: "Watching", pt: "Assistindo", es: "Viendo" },
        terms: {
            items: { en: "series", pt: "séries", es: "series" },
            verb: { en: "watch", pt: "assistir", es: "ver" }
        },
        active: [], frontlog: [], backlog: []
    },
    animes: {
        title: { en: "Anime", pt: "Animes", es: "Anime" },
        icon: "fas fa-star",
        activeLabel: { en: "Watching", pt: "Assistindo", es: "Viendo" },
        terms: {
            items: { en: "anime", pt: "animes", es: "anime" },
            verb: { en: "watch", pt: "assistir", es: "ver" }
        },
        active: [], frontlog: [], backlog: []
    },
    books: {
        title: { en: "Books", pt: "Livros", es: "Libros" },
        icon: "fas fa-book",
        activeLabel: { en: "Reading", pt: "Lendo", es: "Leyendo" },
        terms: {
            items: { en: "books", pt: "livros", es: "libros" },
            verb: { en: "read", pt: "ler", es: "leer" }
        },
        active: [], frontlog: [], backlog: []
    },
    mangas: {
        title: { en: "Manga", pt: "Mangás", es: "Manga" },
        icon: "fas fa-book-open",
        activeLabel: { en: "Reading", pt: "Lendo", es: "Leyendo" },
        terms: {
            items: { en: "manga", pt: "mangás", es: "manga" },
            verb: { en: "read", pt: "ler", es: "leer" }
        },
        active: [], frontlog: [], backlog: []
    },
    manhwas: {
        title: { en: "Manhwa", pt: "Manhwa", es: "Manhwa" },
        icon: "fas fa-book-reader",
        activeLabel: { en: "Reading", pt: "Lendo", es: "Leyendo" },
        terms: {
            items: { en: "manhwa", pt: "manhwas", es: "manhwa" },
            verb: { en: "read", pt: "ler", es: "leer" }
        },
        active: [], frontlog: [], backlog: []
    }
};

// ==========================================
// SISTEMA DE TRADUÇÃO E DETECÇÃO AUTOMÁTICA
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
        manhwasTitle: "Manhwa", favoritesManhwa: "My Favorites",
        myListsTitle: "My Status Lists",
        frontlogLabel: "Frontlog",
        backlogLabel: "Backlog",
        showMore: "Show More",
        showLess: "Show Less",
        statusGames: "What am I Playing?",
        statusMovies: "What am I Watching?",
        statusSeries: "What am I Watching?",
        statusAnimes: "What am I Watching?",
        statusBooks: "What am I Reading?",
        statusMangas: "What am I Reading?",
        statusManhwas: "What am I Reading?",
        frontlogExplanation: "Frontlog is similar to a Backlog, but these are {items} I plan to {verb} that caught my attention the most from everything in the Backlog, and which I plan to start right after finishing something from '{active}'.",
        emptyList: "Empty at the moment...",
        surpriseMeGlobal: "Surprise Me!",
        surpriseMeCat: "Surprise Me!"
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
        manhwasTitle: "Manhwa", favoritesManhwa: "Meus Favoritos",
        myListsTitle: "Minhas Listas de Status",
        frontlogLabel: "Frontlog",
        backlogLabel: "Backlog",
        showMore: "Mostrar Mais",
        showLess: "Mostrar Menos",
        statusGames: "O que estou Jogando?",
        statusMovies: "O que estou Assistindo?",
        statusSeries: "O que estou Assistindo?",
        statusAnimes: "O que estou Assistindo?",
        statusBooks: "O que estou Lendo?",
        statusMangas: "O que estou Lendo?",
        statusManhwas: "O que estou Lendo?",
        frontlogExplanation: "Frontlog é similar ao Backlog, porém, são {items} que eu planejo {verb} que me chamaram mais atenção com tudo que está no Backlog e que planejo começar logo após terminar algo do '{active}'.",
        emptyList: "Vazio no momento...",
        surpriseMeGlobal: "Me Surpreenda!",
        surpriseMeCat: "Me Surpreenda!"
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
        manhwasTitle: "Manhwa", favoritesManhwa: "Mis Favoritos",
        myListsTitle: "Mis Listas de Estado",
        frontlogLabel: "Frontlog",
        backlogLabel: "Backlog",
        showMore: "Mostrar más",
        showLess: "Mostrar menos",
        statusGames: "¿Qué estoy jugando?",
        statusMovies: "¿Qué estoy viendo?",
        statusSeries: "¿Qué estoy viendo?",
        statusAnimes: "¿Qué estoy viendo?",
        statusBooks: "¿Qué estoy leyendo?",
        statusMangas: "¿Qué estoy leyendo?",
        statusManhwas: "¿Qué estoy leyendo?",
        frontlogExplanation: "Frontlog es similar al Backlog, pero son {items} que planeo {verb} que más me llamaron la atención de todo lo que está en el Backlog y que planeo empezar justo después de terminar algo de '{active}'.",
        emptyList: "Vacío por el momento...",
        surpriseMeGlobal: "¡Sorpréndeme!",
        surpriseMeCat: "¡Sorpréndeme!"
    }
};

let currentLang = 'en';
let currentOpenItemTitle = ""; 
let youtubePlayer = null;
let isTrailerMuted = true;
let pendingTrailer = null;
let currentLoadedTrailer = null;
let loopTimer = null;
let openedFromFullGrid = false; 
let currentStartTime = 0;

// ==========================================
// MÉTODOS DE SEGURANÇA POR IP E TRADUÇÃO API
// ==========================================
async function checkAllowedIP() {
    if (ALLOWED_IP === "") {
        return true; 
    }
    try {
        const res = await fetch("https://api.ipify.org?format=json");
        const data = await res.json();
        return data.ip === ALLOWED_IP;
    } catch (e) {
        console.error("Erro ao verificar IP público:", e);
        return false;
    }
}

async function translateText(text, targetLang) {
    try {
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=pt|${targetLang}`;
        const response = await fetch(url);
        const data = await response.json();
        if (data && data.responseData && data.responseData.translatedText) {
            return data.responseData.translatedText;
        }
        return text;
    } catch (err) {
        console.error("Erro na tradução automática:", err);
        return text;
    }
}

function loadCustomItems() {
    const saved = localStorage.getItem("custom_items_database");
    if (saved) {
        try {
            const customItems = JSON.parse(saved);
            Object.assign(itemsDatabase, customItems);
        } catch (e) {
            console.error("Erro ao carregar itens customizados do localStorage:", e);
        }
    }
}

// Descobre o idioma inicial
function getInitialLanguage() {
    const savedLang = localStorage.getItem('preferred_lang');
    if (savedLang && ['pt', 'en', 'es'].includes(savedLang)) {
        return savedLang;
    }

    const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();

    if (browserLang.startsWith('pt')) return 'pt';
    if (browserLang.startsWith('es')) return 'es';
    if (browserLang.startsWith('en')) return 'en';

    return 'en';
}

function getTrailerId(trailerData) {
    if (!trailerData) return null;
    if (typeof trailerData === 'string') return trailerData;
    if (typeof trailerData === 'object') {
        return trailerData[currentLang] || trailerData['pt'] || trailerData['en'] || trailerData['es'] || null;
    }
    return null;
}

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferred_lang', lang); 

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

    renderUserLists();

    const searchInput = document.getElementById('full-grid-search');
    if (searchInput) {
        const placeholders = {
            "pt": "Pesquisar nesta lista...",
            "en": "Search in this list...",
            "es": "Buscar en esta lista..."
        };
        searchInput.placeholder = placeholders[lang] || placeholders["pt"];
    }

    if (document.body.classList.contains('panel-open') && currentOpenItemTitle) {
        const itemData = itemsDatabase[currentOpenItemTitle];
        if (itemData) {
            if (itemData.review && itemData.review[lang]) {
                document.getElementById('details-review').innerText = itemData.review[lang];
            }
            const videoId = getTrailerId(itemData.trailer);
            const bgImageUrl = itemData.bgImage || null;
            showMediaBackground(videoId, bgImageUrl);
        }
    }
}

// ==========================================
// RENDERIZADOR DO PAINEL DE LISTAS PESSOAIS (CATEGORIA ÚNICA)
// ==========================================
function renderUserLists() {
    const container = document.getElementById('list-panel-content');
    if (!container || !currentListCategory) return;

    const cat = userLists[currentListCategory];
    if (!cat) return;

    const catName = cat.title[currentLang] || cat.title['pt'];
    const activeLabel = cat.activeLabel[currentLang] || cat.activeLabel['pt'];
    const frontlogLabel = translations[currentLang].frontlogLabel;
    const backlogLabel = translations[currentLang].backlogLabel;

    // Configura os termos dinâmicos para a explicação do Frontlog
    const itemsTerm = cat.terms.items[currentLang] || cat.terms.items['pt'];
    const verbTerm = cat.terms.verb[currentLang] || cat.terms.verb['pt'];
    let frontlogDesc = translations[currentLang].frontlogExplanation || translations['pt'].frontlogExplanation;
    frontlogDesc = frontlogDesc.replace('{items}', itemsTerm).replace('{verb}', verbTerm).replace('{active}', activeLabel);

    const activeImgs = cat.active || [];
    const frontlogImgs = cat.frontlog || [];
    const backlogImgs = cat.backlog || [];

    const isEmpty = activeImgs.length === 0 && frontlogImgs.length === 0 && backlogImgs.length === 0;

    // Estrutura principal da categoria com visual limpo
    let html = `
        <div id="list-cat-${currentListCategory}" class="list-category-block" style="border: none; background: transparent; padding: 0;">
            <div class="list-category-title" style="font-size: 2rem; border-bottom: 2px solid rgba(100, 255, 218, 0.4); margin-bottom: 25px; padding-bottom: 15px;">
                <i class="${cat.icon}"></i> ${catName}
            </div>
    `;

    if (isEmpty) {
        const emptyText = translations[currentLang].emptyList || "Vazio no momento...";
        html += `<p style="color: #a0b2c6; font-size: 0.95rem; font-style: italic; padding: 5px 0;">${emptyText}</p>`;
    } else {
        if (activeImgs.length > 0) {
            html += `
                <div class="list-status-subblock">
                    <div class="list-status-title"><i class="fas fa-play-circle"></i> ${activeLabel}</div>
                    <div class="list-grid">
                        ${activeImgs.map(imgUrl => `<div class="list-grid-item"><img src="${imgUrl}" alt="Cover"></div>`).join('')}
                    </div>
                </div>
            `;
        }

        // Adiciona a caixa do Frontlog apenas se houver um Frontlog ou Backlog
        if (frontlogImgs.length > 0 || backlogImgs.length > 0) {
            html += `
                <div class="frontlog-info-box">
                    <h4><i class="fas fa-question-circle"></i> Frontlog?</h4>
                    <p>${frontlogDesc}</p>
                </div>
            `;
        }

        if (frontlogImgs.length > 0) {
            html += `
                <div class="list-status-subblock">
                    <div class="list-status-title"><i class="fas fa-forward"></i> ${frontlogLabel}</div>
                    <div class="list-grid">
                        ${frontlogImgs.map(imgUrl => `<div class="list-grid-item"><img src="${imgUrl}" alt="Cover"></div>`).join('')}
                    </div>
                </div>
            `;
        }

        if (backlogImgs.length > 0) {
            html += `
                <div class="list-status-subblock">
                    <div class="list-status-title"><i class="fas fa-clock"></i> ${backlogLabel}</div>
                    <div class="list-grid">
                        ${backlogImgs.map(imgUrl => `<div class="list-grid-item"><img src="${imgUrl}" alt="Cover"></div>`).join('')}
                    </div>
                </div>
            `;
        }
    }

    html += `</div>`;
    container.innerHTML = html;
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

function startLoopCheck() {
    if (loopTimer) clearInterval(loopTimer);
    loopTimer = setInterval(() => {
        if (youtubePlayer && typeof youtubePlayer.getCurrentTime === 'function' && typeof youtubePlayer.getDuration === 'function') {
            const duration = youtubePlayer.getDuration();
            const currentTime = youtubePlayer.getCurrentTime();
            if (duration > 0 && currentTime >= duration - 0.5) {
                youtubePlayer.seekTo(currentStartTime);
                youtubePlayer.playVideo();
            }
        }
    }, 500);
}

function onYouTubeIframeAPIReady() {
    youtubePlayer = new YT.Player('player', {
        videoId: 'kd0zbNw1VOg',
        host: 'https://www.youtube.com',
        playerVars: {
            'autoplay': 0, 
            'controls': 0,
            'mute': 1,
            'loop': 1,
            'playlist': 'kd0zbNw1VOg', 
            'showinfo': 0,
            'rel': 0,
            'iv_load_policy': 3,
            'modestbranding': 1,
            'playsinline': 1,
            'enablejsapi': 1
        },
        events: {
            'onReady': (event) => {
                event.target.mute(); 
                if (pendingTrailer) {
                    playTrailerId(pendingTrailer, currentStartTime);
                    pendingTrailer = null;
                }
            },
            'onStateChange': (event) => {
                if (event.data === YT.PlayerState.PLAYING) {
                    startLoopCheck();
                } else if (event.data === YT.PlayerState.ENDED && youtubePlayer && typeof youtubePlayer.playVideo === 'function') {
                    youtubePlayer.seekTo(currentStartTime); // <--- Muda de 0 para currentStartTime
                    youtubePlayer.playVideo(); 
                }
            }
        }
    });
}

function showMediaBackground(videoId, bgImageUrl, startTime = 0) {
    const bgImg = document.getElementById('bg-image');
    const playerElem = document.getElementById('player');

    if (videoId) {
        if (bgImg) bgImg.style.display = 'none';
        if (playerElem) playerElem.style.display = 'block';
        playTrailerId(videoId, startTime);
    } else if (bgImageUrl) {
        if (youtubePlayer && typeof youtubePlayer.pauseVideo === 'function') {
            youtubePlayer.pauseVideo();
            if (typeof youtubePlayer.mute === 'function') youtubePlayer.mute();
        }
        if (loopTimer) clearInterval(loopTimer);

        if (playerElem) playerElem.style.display = 'none';
        if (bgImg) {
            bgImg.src = bgImageUrl;
            bgImg.style.display = 'block';
        }
        document.body.classList.add('showing-trailer');
    } else {
        stopTrailer();
    }
}

function playTrailerId(videoId, startSeconds = 0) {
    if (!videoId) return;

    currentStartTime = startSeconds; // <--- Guarda o tempo inicial para ser usado no loop!
    document.body.classList.add('showing-trailer');

    if (youtubePlayer && typeof youtubePlayer.loadVideoById === 'function') {
        currentLoadedTrailer = videoId;
        youtubePlayer.loadVideoById({
            videoId: videoId,
            startSeconds: startSeconds
        });
        
        if (isTrailerMuted) { 
            youtubePlayer.mute(); 
        } else { 
            youtubePlayer.unMute(); 
            youtubePlayer.setVolume(80);
        }
        youtubePlayer.playVideo(); 
        startLoopCheck();
    } else {
        pendingTrailer = videoId;
    }
}

function stopTrailer() {
    if (loopTimer) clearInterval(loopTimer);
    document.body.classList.remove('showing-trailer');
    currentLoadedTrailer = null;

    const bgImg = document.getElementById('bg-image');
    if (bgImg) bgImg.style.display = 'none';

    const playerElem = document.getElementById('player');
    if (playerElem) playerElem.style.display = 'block';

    if (youtubePlayer) {
        if (typeof youtubePlayer.pauseVideo === 'function') {
            youtubePlayer.pauseVideo();
        }
        if (typeof youtubePlayer.mute === 'function') {
            youtubePlayer.mute();
        }
    }
}

function openDetailsPanel(linkElement) {
    closeListPanel(); 
    
    const img = linkElement.querySelector('img');
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

['platform-steam', 'platform-pc', 'platform-xbox', 'platform-ps', 'platform-nin', 'platform-phone', 'platform-imdb', 'platform-anilist', 'platform-book'].forEach(id => setupBtn(id, null));

    const clickedHref = linkElement.getAttribute('href');
    const parentCard = linkElement.closest('.category-card');
    const cardHeader = parentCard ? parentCard.querySelector('h2').innerText.toLowerCase() : '';

    if (itemData) {
        const reviewBox = document.getElementById('details-review');
        if (reviewBox) {
            reviewBox.innerText = itemData.review[currentLang] || itemData.review['pt'] || itemData.review['en'] || "";
        }

        const links = itemData.links || {};

        let steamUrl = links.steam || (clickedHref && clickedHref.includes('steampowered.com') ? clickedHref : null);
        setupBtn('platform-steam', steamUrl);
        setupBtn('platform-pc', links.pc);
        setupBtn('platform-xbox', links.xbox);
        setupBtn('platform-ps', links.ps);
        setupBtn('platform-nin', links.nin);
        setupBtn('platform-phone', links.phone);

        let imdbUrl = links.imdb || (clickedHref && clickedHref.includes('imdb.com') ? clickedHref : null);
        setupBtn('platform-imdb', imdbUrl);

        let anilistUrl = links.anilist || (clickedHref && clickedHref.includes('anilist.co') ? clickedHref : null);
        setupBtn('platform-anilist', anilistUrl);

        let bookUrl = links.book || links.storygraph || (cardHeader.includes('book') || cardHeader.includes('livro') ? clickedHref : null);
        setupBtn('platform-book', bookUrl);
        
        const videoId = getTrailerId(itemData.trailer);
        const startTime = itemData.startTime || 0;
        const bgImageUrl = itemData.bgImage || null;
        showMediaBackground(videoId, bgImageUrl, startTime);
    } else {
        const reviewBox = document.getElementById('details-review');
        if (reviewBox) reviewBox.innerText = "Análise em construção...";
        
        if (clickedHref && clickedHref !== '#') {
            if (clickedHref.includes('steampowered.com')) setupBtn('platform-steam', clickedHref);
            else if (clickedHref.includes('imdb.com')) setupBtn('platform-imdb', clickedHref);
            else if (clickedHref.includes('anilist.co')) setupBtn('platform-anilist', clickedHref);
            else if (cardHeader.includes('book') || cardHeader.includes('livro')) setupBtn('platform-book', clickedHref);
            else setupBtn('platform-steam', clickedHref);
        }
        
        stopTrailer();
    }

    document.body.classList.add('panel-open');
    document.body.classList.remove('cinema-mode');
    const cinemaIcon = document.querySelector('#cinemaModeToggle i');
    if (cinemaIcon) cinemaIcon.className = "fas fa-expand";
}

function closeDetailsPanel() {
    document.body.classList.remove('panel-open');
    stopTrailer();

    if (document.body.classList.contains('cinema-mode')) {
        document.body.classList.remove('cinema-mode');
        const cinemaIcon = document.querySelector('#cinemaModeToggle i');
        if (cinemaIcon) cinemaIcon.className = "fas fa-expand";
    }

    if (openedFromFullGrid) {
        openedFromFullGrid = false;
        document.body.classList.add('full-grid-open');
    }
}

function closeListPanel() {
    document.body.classList.remove('right-panel-open');
}

function openFullGrid(categoryCard) {
    const fullGridOverlay = document.getElementById('full-grid-overlay');
    const fullGridTitle = document.getElementById('full-grid-title');
    const fullGridContent = document.getElementById('full-grid-content');

    if (!fullGridOverlay || !fullGridContent) return;

    const catTitle = categoryCard.querySelector('h2').innerText;
    fullGridTitle.innerText = catTitle;

// --- INÍCIO DO SISTEMA DE PESQUISA ---
    let searchContainer = document.getElementById('full-grid-search-container');
    if (!searchContainer) {
        searchContainer = document.createElement('div');
        searchContainer.id = 'full-grid-search-container';
        searchContainer.innerHTML = `<i class="fas fa-search"></i> <input type="text" id="full-grid-search">`;
        fullGridContent.parentNode.insertBefore(searchContainer, fullGridContent);

        document.getElementById('full-grid-search').addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase().trim();
            savedSearchTerms[currentCategoryKey] = term; 
            filterGridItems(term);
        });
    }

    const searchInput = document.getElementById('full-grid-search');
    
    if (searchInput) {
        // Agora usa a variável global do seu próprio sistema de idiomas
        let siteLang = currentLang;
        
        const placeholders = {
            "pt": "Pesquisar nesta lista...",
            "en": "Search in this list...",
            "es": "Buscar en esta lista..."
        };

        searchInput.placeholder = placeholders[siteLang] || placeholders["pt"];

        // Restaura a pesquisa anterior da categoria atual
        const savedTerm = savedSearchTerms[currentCategoryKey] || "";
        searchInput.value = savedTerm;
    }
    // --- FIM DO SISTEMA DE PESQUISA ---

    const savedTerm = savedSearchTerms[currentCategoryKey] || "";
    if (searchInput) searchInput.value = savedTerm;
    // --- FIM DO SISTEMA DE PESQUISA ---

    const items = categoryCard.querySelectorAll('.favorites-track a');
    fullGridContent.innerHTML = '';

    const uniqueLinks = new Set();

    items.forEach(item => {
        const href = item.getAttribute('href');
        const img = item.querySelector('img');
        if (!img) return;

        const alt = img.getAttribute('alt');
        const identifier = alt || href;

        if (!uniqueLinks.has(identifier)) {
            uniqueLinks.add(identifier);

            const clone = item.cloneNode(true);
            clone.addEventListener('click', (e) => {
                e.preventDefault();
                openedFromFullGrid = true; 
                document.body.classList.remove('full-grid-open');
                openDetailsPanel(clone);
            });
            fullGridContent.appendChild(clone);
        }
    });

    // Aplica o filtro imediatamente caso já tenha algo salvo
    setTimeout(() => filterGridItems(savedTerm), 50);

    document.body.classList.add('full-grid-open');
}

// Função responsável por filtrar e animar os itens
function filterGridItems(term) {
    const items = document.querySelectorAll('#full-grid-content a');
    
    items.forEach(item => {
        const img = item.querySelector('img');
        const mainTitle = img ? (img.getAttribute('alt') || "").toLowerCase() : "";
        
        // Captura os títulos alternativos escondidos no HTML
        const altTitles = (item.getAttribute('data-titles') || "").toLowerCase();
        
        // Verifica se o termo pesquisado bate com o título principal OU com os alternativos
        if (mainTitle.includes(term) || altTitles.includes(term)) {
            item.classList.remove('hidden-item');
            item.style.display = 'block'; 
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }, 10);
        } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0)';
            setTimeout(() => {
                if (item.style.opacity === '0') {
                    item.classList.add('hidden-item');
                    item.style.display = 'none';
                }
            }, 300);
        }
    });
}

function closeFullGrid() {
    openedFromFullGrid = false;
    document.body.classList.remove('full-grid-open');
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
// EXPORTAÇÃO AUTOMÁTICA DO SCRIPT.JS PARA ÁREA DE TRANSFERÊNCIA
// ==========================================
function exportUpdatedScriptJS() {
    const formattedDatabase = JSON.stringify(itemsDatabase, null, 4);
    const textToCopy = `const itemsDatabase = ${formattedDatabase};`;

    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("O código atualizado da variável 'itemsDatabase' foi copiado com sucesso para a sua Área de Transferência!\n\nAgora basta abrir o seu arquivo script.js no VS Code ou editor, colar por cima da variável itemsDatabase antiga, salvar e fazer seu git commit e git push!");
    }).catch(err => {
        console.error("Erro ao copiar para a área de transferência:", err);
        alert("Não foi possível copiar automaticamente. Verifique as permissões do navegador.");
    });
}

// ==========================================
// INICIALIZAÇÃO E EVENTOS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // Carrega itens customizados já guardados
    loadCustomItems();

    const container = document.querySelector('.container');
    if (container) setTimeout(() => container.classList.add('visible'), 100);

    initCarousels();
    initYouTubePlayer();

    // Aplica a detecção automática do idioma (ou preferência salva) ao carregar
    const initialLang = getInitialLanguage();
    changeLanguage(initialLang);

    // 1. CHECAGEM DE IP PERMITIDO (EXIBIÇÃO DOS BOTÕES EXCLUSIVOS)
    checkAllowedIP().then(isAllowed => {
        const addBtn = document.getElementById("open-add-modal-btn");
        const exportBtn = document.getElementById("export-script-btn");
        if (isAllowed) {
            if (addBtn) addBtn.style.display = "inline-flex";
            if (exportBtn) exportBtn.style.display = "inline-flex";
        }
    });

    // Evento de clique do botão Exportar script.js
    const exportBtn = document.getElementById("export-script-btn");
    if (exportBtn) {
        exportBtn.addEventListener("click", exportUpdatedScriptJS);
    }

    // 2. REGISTRO DE CATEGORIA ATUAL AO ABRIR "MOSTRAR MAIS"
    document.querySelectorAll('.btn-show-more').forEach(btn => {
        btn.addEventListener('click', () => {
            const parentCard = btn.closest('.category-card');
            if (parentCard) {
                currentCategoryKey = parentCard.getAttribute('data-category') || "games";
                openFullGrid(parentCard);
            }
        });
    });

    // 3. EVENTOS DO MODAL DE ADICIONAR ITEM (+)
    const addModalBtn = document.getElementById("open-add-modal-btn");
    const addModal = document.getElementById("add-item-modal");
    const closeAddModalBtn = document.getElementById("close-add-modal-btn");

    if (addModalBtn && addModal) {
        addModalBtn.addEventListener("click", () => {
            document.getElementById("add-category-key").value = currentCategoryKey;
            
            const catObj = userLists[currentCategoryKey];
            const catTitleName = catObj ? (catObj.title[currentLang] || catObj.title['pt']) : "Item";
            document.getElementById("modal-category-name").innerText = catTitleName;

            document.getElementById("group-game-links").style.display = "none";
            document.getElementById("group-media-links").style.display = "none";
            document.getElementById("group-manga-links").style.display = "none";
            document.getElementById("group-book-links").style.display = "none";

            if (currentCategoryKey === "games") {
                document.getElementById("group-game-links").style.display = "block";
            } else if (["movies", "series", "animes"].includes(currentCategoryKey)) {
                document.getElementById("group-media-links").style.display = "block";
            } else if (["mangas", "manhwas"].includes(currentCategoryKey)) {
                document.getElementById("group-manga-links").style.display = "block";
            } else if (currentCategoryKey === "books") {
                document.getElementById("group-book-links").style.display = "block";
            }

            addModal.classList.add("active");
        });
    }

    if (closeAddModalBtn && addModal) {
        closeAddModalBtn.addEventListener("click", () => {
            addModal.classList.remove("active");
        });
    }

    // Processamento do Formulário (Salvar e Traduzir)
    const addItemForm = document.getElementById("add-item-form");
    if (addItemForm) {
        addItemForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const saveBtn = document.getElementById("save-item-btn");
            saveBtn.disabled = true;
            saveBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Traduzindo...`;

            const title = document.getElementById("add-title").value.trim();
            const cleanTitle = title.toLowerCase();
            const coverUrl = document.getElementById("add-cover").value.trim();
            const trailerId = document.getElementById("add-trailer").value.trim() || null;
            const bgImage = document.getElementById("add-bg-image").value.trim() || null;
            const reviewPT = document.getElementById("add-review").value.trim();

            const [reviewEN, reviewES] = await Promise.all([
                translateText(reviewPT, "en"),
                translateText(reviewPT, "es")
            ]);

            const links = {};
            if (currentCategoryKey === "games") {
                links.steam = document.getElementById("link-steam").value.trim() || null;
                links.pc = document.getElementById("link-pc") ? document.getElementById("link-pc").value.trim() || null : null; // <--- NOVO
                links.xbox = document.getElementById("link-xbox").value.trim() || null;
                links.ps = document.getElementById("link-ps").value.trim() || null;
                links.nin = document.getElementById("link-nin").value.trim() || null;
                links.phone = document.getElementById("link-phone") ? document.getElementById("link-phone").value.trim() || null : null; // <--- NOVO
            } else if (["movies", "series", "animes"].includes(currentCategoryKey)) {
                links.imdb = document.getElementById("link-imdb").value.trim() || null;
            } else if (["mangas", "manhwas"].includes(currentCategoryKey)) {
                links.anilist = document.getElementById("link-anilist").value.trim() || null;
            } else if (currentCategoryKey === "books") {
                links.book = document.getElementById("link-book").value.trim() || null;
            }

            itemsDatabase[cleanTitle] = {
                trailer: trailerId,
                bgImage: bgImage,
                links: links,
                review: {
                    pt: reviewPT,
                    en: reviewEN,
                    es: reviewES
                }
            };

            const saved = JSON.parse(localStorage.getItem("custom_items_database") || "{}");
            saved[cleanTitle] = itemsDatabase[cleanTitle];
            localStorage.setItem("custom_items_database", JSON.stringify(saved));

            const cardSection = document.querySelector(`.category-card[data-category="${currentCategoryKey}"]`);
            if (cardSection) {
                const track = cardSection.querySelector(".favorites-track");
                if (track) {
                    const newLink = document.createElement("a");
                    newLink.href = links.steam || links.imdb || links.anilist || links.book || "#";
                    newLink.target = "_blank";
                    newLink.innerHTML = `<img src="${coverUrl}" alt="${title}">`;
                    newLink.addEventListener("click", (evt) => {
                        evt.preventDefault();
                        openedFromFullGrid = false;
                        openDetailsPanel(newLink);
                    });
                    track.appendChild(newLink);
                }

                openFullGrid(cardSection);
            }

            saveBtn.disabled = false;
            saveBtn.innerHTML = `<i class="fas fa-save"></i> Guardar Item`;
            addItemForm.reset();
            addModal.classList.remove("active");
        });
    }

    // GERENCIADOR DE CLIQUE NOS FAVORITOS DOS CARROSSEIS
    const trackLinks = document.querySelectorAll('.favorites-track a');
    trackLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            openedFromFullGrid = false;
            openDetailsPanel(link);
        });
    });

    const closePanelBtn = document.getElementById('close-details-btn');
    if (closePanelBtn) {
        closePanelBtn.addEventListener('click', closeDetailsPanel);
    }

    const closeListBtn = document.getElementById('close-list-btn');
    if (closeListBtn) {
        closeListBtn.addEventListener('click', closeListPanel);
    }

    document.querySelectorAll('.btn-open-status').forEach(btn => {
        btn.addEventListener('click', () => {
            const parentCard = btn.closest('.category-card');
            const catKey = parentCard ? parentCard.getAttribute('data-category') : null;

            closeDetailsPanel();
            closeFullGrid();
            
            // Define a categoria atual e renderiza apenas ela
            if (catKey) {
                currentListCategory = catKey;
                renderUserLists(); 
            }
            
            document.body.classList.add('right-panel-open');
        });
    });

    const closeFullGridBtn = document.getElementById('close-full-grid-btn');
    if (closeFullGridBtn) {
        closeFullGridBtn.addEventListener('click', closeFullGrid);
    }

    // FECHAR PAINÉIS AO CLICAR FORA
    document.addEventListener('click', (e) => {
        if (document.body.classList.contains('panel-open')) {
            const panel = document.getElementById('details-panel');
            if (panel && !panel.contains(e.target) && !e.target.closest('.favorites-track a') && !e.target.closest('.full-grid-content a') && !e.target.closest('.controls-bar')) {
                closeDetailsPanel();
            }
        }
        if (document.body.classList.contains('right-panel-open')) {
            const listPanel = document.getElementById('list-panel');
            if (listPanel && !listPanel.contains(e.target) && !e.target.closest('.btn-open-status')) {
                closeListPanel();
            }
        }
    });

    // MÚSICA DE FUNDO
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

    // ALTERNAR SOM DO TRAILER
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

    // MODO CINEMA
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

    // ==========================================
    // SISTEMA "ME SURPREENDA" (ROLETA DE RECOMENDAÇÕES)
    // ==========================================
    function rollSurprise(category = null) {
        // Se a categoria for passada, sorteia só nela. Se não, sorteia em todas.
        let selector = '.favorites-track a';
        if (category) {
            selector = `.category-card[data-category="${category}"] .favorites-track a`;
        }
        
        const items = document.querySelectorAll(selector);
        
        if (items.length > 0) {
            const randomIndex = Math.floor(Math.random() * items.length);
            const randomItem = items[randomIndex];
            
            // Abre o painel do item sorteado automaticamente
            openedFromFullGrid = false; 
            openDetailsPanel(randomItem);
        } else {
            // Caso a categoria esteja vazia
            alert(currentLang === 'pt' ? "Nenhum item encontrado para roletar!" : currentLang === 'es' ? "¡Ningún artículo encontrado!" : "No items found!");
        }
    }

    // Evento do Botão Mundial
    const btnSurpriseGlobal = document.querySelector('.btn-surprise-global');
    if (btnSurpriseGlobal) {
        btnSurpriseGlobal.addEventListener('click', (e) => {
            e.stopPropagation();
            rollSurprise(null);
        });
    }

    // Evento dos Botões Específicos por Categoria
    document.querySelectorAll('.btn-surprise-cat').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const parentCard = this.closest('.category-card');
            const catKey = parentCard ? parentCard.getAttribute('data-category') : null;
            rollSurprise(catKey);
        });
    });
});