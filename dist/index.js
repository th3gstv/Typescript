var Calculator = /** @class */ (function () {
    function Calculator(firstnumber, secondnumber) {
        this.Firstnumber = firstnumber;
        this.Secondnumber = secondnumber;
        //Tudo que está dentro do constructor não é acessível para as actions a seguir;
        //Por isso a criação das variáveis fora do constructor;
    }
    Calculator.prototype.sum = function () {
        return this.Firstnumber + this.Secondnumber;
    };
    Calculator.prototype.subtract = function () {
        return this.Firstnumber - this.Secondnumber;
    };
    Calculator.prototype.multiply = function () {
        return this.Firstnumber * this.Secondnumber;
    };
    Calculator.prototype.divide = function () {
        return this.Firstnumber / this.Secondnumber;
    };
    return Calculator;
}());
//Instanciando a minha classe
//Os números dentro do parênteses são enviados para o constructor   
var calculator = new Calculator(15, 54);
var resultsum = calculator.sum();
var resultsubtract = calculator.subtract();
var resultmult = calculator.multiply();
var resultdivide = calculator.divide();
console.log(resultsubtract);
