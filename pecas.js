const listadepecas = ["Peça de teste", "Motor", "Suspensão", "Amortecedor", "Ar condicionado"]

console.log(listadepecas)

if (listadepecas.length < 3) {
    console.log("É possível cadastrar mais peças")
} else {
    console.log("Não há mais espaço na lista")
}

var peso = 110;
if (peso >= 100) {
    console.log("Peso da peça está adequado")
} else {
    console.log("Peso insuficiente")
}

let nomePeca = "Disco de freio";

if (nomePeca.length > 3) {
    console.log("Adequado!!")
} else if (nomePeca == 0) {
    console.log("Nome não pode ser vazio")
}

switch (nomePeca length) {
    case 0:
        console.log("o nome não pode ser vazio")
        break;

    default:
        break;

}

// = -> atribuição de valor, recebe
// == -> verifica se o valor é igual
// === -> verifica se o valor, e o tipo de dado, são iguais