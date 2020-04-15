function Compute(firstNumber, secondNumber, operation) {
    
    if (operation == "+") {
        return parseInt(firstNumber) + parseInt(secondNumber);
    }
}

$(document).ready(function() {
    var operand = 0;
    var firstNumber = 0;
    var secondNumber = 0;
    var operation = "";
    $(".num").click(function() {

        operand = operand + $(this).html();

        $("#currentValue").html(operand);
    });

    $(".orange").click(function() {
        operation = $(this).html();
        firstNumber = operand;
        operand = 0;
        $("#currentValue").html(0);
    });

    $(".equals").click(function() {
        secondNumber = operand;
        var total = Compute(firstNumber, secondNumber, operation);
        $("#globalAnswer").html(total);
        secondNumber = 0;
        operand = 0;
    });
});