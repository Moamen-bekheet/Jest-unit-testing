const Calculator = (function (){
    function add(operandOne, operandTwo){
        return operandOne +operandTwo;
    }
    function subract(operandOne, operandTwo){
        return operandOne - operandTwo;
    }
    function divide(operandOne, operandTwo){
        return operandOne / operandTwo;
    }
    function multiply(operandOne, operandTwo){
        return operandOne * operandTwo;
    }
    return{add,subract,divide,multiply}
})()
module.exports = Calculator;