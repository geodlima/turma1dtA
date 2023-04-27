function somar(){

    //Entrada
    var numero1 = parseInt(document.getElementById('num1').value)
    var numero2 = parseInt(document.getElementById('num2').value)

    //processamento
    var soma = numero1 + numero2;

    //saída
    document.getElementById('resultado').innerHTML = 'Soma = ' + soma;
}