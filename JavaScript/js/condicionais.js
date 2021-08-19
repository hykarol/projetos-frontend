const listaDeDesejos = new Array(
    'Gravata',
    'Garanhuns',
    'Recife',
    'Maranguape'
);

const idadeComprador = 18;
const tiverPassagem = true;
const estaAcompanhado = true;

// listaDeDesejos.splice(3,1); remove elemento
console.log("Exibir lista de destinos: ");
console.log(listaDeDesejos);

if (idadeComprador >= 18 || estaAcompanhado == true) {
    console.log('Pode realizar a compra');
    listaDeDesejos.splice(3, 1);
} 
else {
    console.log('Nao pode realizar a compra');
}

console.log('Embarque: ');

if(idadeComprador >= 18 && tiverPassagem == true ){
    console.log('Pode embarcar. Boa viagem !');
} else {
    console.log('Nao pode embarcar !');
}