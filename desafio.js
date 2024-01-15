function calcularNivel(vitorias, derrotas) {
    // Calcule o ranque do herói
    let saldoRanque = vitorias - derrotas

    // Nível do herói
    let nivel = ""

    if (vitorias < 10) {
        nivel = "Ferro"
    } else if (saldoRanque >= 11 && saldoRanque <= 20) {
        nivel = "Bronze"
    } else if (saldoRanque >= 21 && saldoRanque <= 50) {
        nivel = "Prata"
    } else if (saldoRanque >= 51 && saldoRanque <= 80) {
        nivel = "Ouro"
    } else if (saldoRanque >= 81 && saldoRanque <= 90) {
        nivel = "Diamante"
    } else if (saldoRanque >= 91 && saldoRanque <= 100) {
        nivel = "Lendário"
    } else if (saldoRanque >= 101) {
        nivel = "Imortal"
    }

    // Exibeção da mensagem
    console.log("O herói venceu " + vitorias + " e está no nível " + nivel)

    // Retorna o saldo de vitorias
    return saldoRanque
}
//chamando a função
let calculo = calcularNivel(94, 5)