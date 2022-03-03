class Calculator{

  //Criação de variáveis para associar com as que estão dentro do constructor
  Firstnumber: number;
  Secondnumber: number;

  constructor(firstnumber: number, secondnumber: number){
    this.Firstnumber = firstnumber;
    this.Secondnumber = secondnumber;
    //Tudo que está dentro do constructor não é acessível para as actions a seguir;
      //Por isso a criação das variáveis fora do constructor;
  }

  sum(): number{
    return this.Firstnumber + this.Secondnumber;
  }

  subtract(): number{
    return this.Firstnumber - this.Secondnumber;

  }

  multiply(): number{
    return this.Firstnumber * this.Secondnumber;

  }

  divide(): number{
    return this.Firstnumber / this.Secondnumber;

  }
}
//Instanciando a minha classe
//Os números dentro do parênteses são enviados para o constructor   
const calculator = new Calculator(15, 54);
const resultsum = calculator.sum(); 
const resultsubtract = calculator.subtract();
const resultmult = calculator.multiply();
const resultdivide = calculator.divide();
console.log(resultsubtract)
