export const palavrasFutebol = {
    probablyWords: [
    "que", "futebol", "q", "é",
    "e", "me", "explica", "que",
    "sabe", "dizer", "o"
    ],
    matched: 0,
}

export const palavrasRegras = {
    probablyWords: [
    "quais", "as", "regras", "do",
    "futebol", "sao", "como",
    "funciona", "o",
    ],
    matched: 0,
}

export const palavrasTimeGosta = {
    probablyWords: [
    "que", "mais", "gosta",
    "qual", "você", "torce",
    "preferido", "clube",
    "coração", "do", "time",
    "você",
    ],
    matched: 0,
}

export const palavrasMundialPalmeiras = {
    probablyWords: [
    "palmeiras", "tem", "mundial",
    "copa", "do", "mundo", "campeão"
    ],
    matched: 0,
}

export const palavrasPapoFurado = {
    probablyWords: [
        "basquete", "triatlo", "ping-pong",
        "escola", "sair", "comida",
        "tempo", "clima"
    ],
    matched: 0,
}

export const comoDarUmaBicicleta = {
    probablyWords: [
        "bicicleta", "pular", "gol",
        "de", "como", "dar", "jeito"
    ],
    matched: 0,
}

export const palavrasForaDoEscopo = {
    probablyWords: [
        "basquete", "triatlo", "ping-pong",
        "escola", "sair", "comida", "tempo",
        "clima", "corrida", "carro", "aposta",
        "política"
    ],
    matched: 0,
}

function showAnswer(index) {
    switch (index) {
        case 0:
            return "O futebol é o esporte mais conhecido do mundo e mais difundido em todos os países, sendo o Brazil e a Europa os maiores!"
        case 1:
            return "Algumas regras do futebol seria: não pode agressão, não pode gol contra"
        case 2:
            return "Eu gosto do tigre"
        case 3:
            return "O palmeiras não tem mundial, mas tem copa RIO, mas eles falam que tem né, fazer oq"
        case 4:
            return "Para se dar uma bicicleta, só dar um mortal chutando"
        default:
            return "Só sei falar de futebol meu amigo, se não for isso, tchau"
    }
}

export function mostProbablyQuestion(pergunta) {
    if (pergunta.some(word => palavrasForaDoEscopo.probablyWords.includes(word))) {
        return "Essa pergunta está fora do escopo do meu conhecimento."
    }
    let matches = [
        palavrasFutebol.matched, 
        palavrasRegras.matched, 
        palavrasTimeGosta.matched,
        palavrasMundialPalmeiras.matched, 
        comoDarUmaBicicleta.matched,
        palavrasPapoFurado.matched,
    ]
    return showAnswer(matches.indexOf(Math.max(...matches)))
}