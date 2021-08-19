import{ Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js";

//Cadastro clientes
const cliente1 = new Cliente('Climaco',19985352118);
console.log(cliente1);

const cliente2 = new Cliente('Noemia', 15485652218);
console.log(cliente2);

//Cadastro conta-corrente
const contaCorrenteClimaco = new ContaCorrente(1001,cliente1);
contaCorrenteClimaco.depositar(1000);

const contaCorrenteNoemia = new ContaCorrente(1001, cliente2);
let valor = 500;
contaCorrenteClimaco.transferir(valor,contaCorrenteNoemia);

console.log(ContaCorrente.numeroDeContas);