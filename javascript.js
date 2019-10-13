function calculate() {
    var number1 = parseInt(document.getElementById('number1').value);
    var number2 = parseInt(document.getElementById('number2').value);
    var result = document.getElementById('result');
    var myResult = number1 + number2;
    result.value = myResult;
}
