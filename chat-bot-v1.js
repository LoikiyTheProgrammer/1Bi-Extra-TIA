import { palavrasFutebol, palavrasMundialPalmeiras, palavrasRegras, palavrasTimeGosta, comoDarUmaBicicleta, palavrasPapoFurado, mostProbablyQuestion } from './can-i-answer.js'

let pergunta = "O que é melhor que futebol ?"
pergunta = pergunta.toLowerCase()
pergunta = pergunta.split(' ')

const bancos = [
    palavrasFutebol, palavrasMundialPalmeiras, palavrasRegras, palavrasTimeGosta, comoDarUmaBicicleta, palavrasPapoFurado,
]

for (let i = 0; i < pergunta.length; i++) {
    for (let j = 0; j < bancos.length; j++) {
        if (bancos[j].probablyWords.indexOf(pergunta[i]) !== -1) {
            bancos[j].matched++
        }
    }
}

console.log(mostProbablyQuestion(pergunta))