 // #saldo = 0; atributo privado - proposta em andamento: https://github.com/tc39/proposal-class-fields#private-fields. Por enquanto a convencao da comunidade e usar o ' _ '.
 import { Cliente } from "./Cliente.js";
export class ContaCorrente{    

    static numeroDeContas = 0;  
    agencia;
      
      _cliente;
      _saldo = 0;

//Getters e Setters

        set cliente(novoValor){
            if(novoValor instanceof Cliente)
            this._cliente = novoValor;           
        }
        
        get cliente(){
            return this._cliente;
        }
              
        get saldo(){
            return this._saldo;
        }

//Métodos e Construtores
  
          sacar(valor){
              if(this._saldo >= valor){
                      this._saldo -= valor;
                      return valor;
              }
          }
  
          depositar(valor){
              if(valor <= 0){
                  return;
              }
              this._saldo += valor;
          }

          transferir(valor, conta){
            const valorSacado = this.sacar(valor);
                conta.depositar(valorSacado);
          }

          constructor(agencia, cliente){
            this.agencia = agencia;
            this.cliente = cliente;
            
            //A cada vez que instanciar uma conta nova, vai somar +1 conta.
            ContaCorrente.numeroDeContas += 1;
          }
  }