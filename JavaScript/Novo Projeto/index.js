import{ Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

//Cadastro clientes
const cliente1 = new Cliente('Luan',19985352118);


//Cadastro conta-corrente
const contaCorrenteLuan = new ContaCorrente(cliente1, 1001);

const contaPoupanca = new ContaPoupanca(1000, cliente1, 1001);

contaCorrenteLuan.depositar(500)

contaCorrenteLuan.sacar(100);
contaPoupanca.sacar(100);
console.log(contaCorrenteLuan);
console.log(contaPoupanca);
