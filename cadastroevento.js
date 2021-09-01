//atividade 2 da UC Lógica de Programação

/*inserir a data do evento*/
const dataDoEvento = new Date(2021, 09, 05)
var dataHoje = new Date();
if (dataDoEvento > dataHoje) {
    console.log("cadastro permitido")
} else {
    console.log("cadastro não permitido")
}


/*cadastro do participante*/
const listaDeParticipantes = ["Hyago", "Pedro", "Carla", "Joelma", "Cynthia", "Ismael", "Henrique", "Priscila", "Giovanna", "Andrea", "Breno"]
if (listaDeParticipantes.length > 100) {
    console.log("sala cheia")
} else {
    console.log("cadastro permitido")
}
let nome = ("Insira seu nome: ")

let idade = ("Insira sua idade: ")
if (idade.length >= 18) {
    console.log("continue o cadastro")
} else {
    console.log("cadastro não permitido")
}