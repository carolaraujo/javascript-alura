console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`,
);

const idadeComprador = 17;
const estaAcompanhada = false;
const tempassagemComprada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) { // || ou
    console.log("Boa Viagem !!!");
    listaDeDestinos.splice(2, 1); // Removendo item
} else {
    console.log("Comprador não é maior de idade e não posso vender");
}

console.log("Embarque: \n\n");
if (idadeComprador >= 18 && tempassagemComprada) { // && e
    console.log("Boa Viagem!")
} else {
    console.log("Você não pode embarcar")
};

console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1); // Removendo um item
// } else if (estaAcompanhada) {
//     console.log("Comprador está acompanhados");
//     listaDeDestinos.splice(1, 1); // Removendo um item
// } else {
//     console.log("Comprador não é maior de idade e não posso vender");
// }



















