const listaDeDesejos = new Array(
    'Gravata',
    'Garanhuns',
    'Recife',
    'Maranguape'
);

const idadeComprador = 18;
const estaAcompanhado = true;
const destino = 'Garanhuns';
let cont = 0;


console.log("\n Exibir lista de destinos: ");
console.log(listaDeDesejos);

const podeComprar = (idadeComprador >= 18 || estaAcompanhado == true);

let destinoExiste = false;
while(cont < 4){

    if(listaDeDesejos[cont] == destino){
        console.log('Destino existe')
        destinoExiste = true;
        break;
    }
    cont += 1;
}

console.log('Destino existe: ', destinoExiste + " | o destino é: " + destino);

if(podeComprar && destinoExiste){
    console.log('Boa viagem !');
} else {
    console.log('Existe algum erro !')
}
