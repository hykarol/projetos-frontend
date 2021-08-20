 // #saldo = 0; atributo privado - proposta em andamento: https://github.com/tc39/proposal-class-fields#private-fields. Por enquanto a convencao da comunidade e usar o ' _ '.
 import { Conta } from "./Conta.js"
export class ContaCorrente extends Conta{    

    static numeroDeContas = 0;  

//Construtor
      constructor(cliente, agencia){
          super(0,cliente,agencia)
        ContaCorrente.numeroDeContas += 1;
      }
      sacar(valor){
        let taxa = 1.05;   
            return this._sacar(valor, taxa);
        }       
}
