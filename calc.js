const displayScreen = document.querySelector('.display');

const numbers = document.querySelectorAll('.key');

const operators = document.querySelectorAll('.key_operator')

let answer = "";


numbers.forEach(number => {
    number.addEventListener("click", displayKey);

    function displayKey(number) {
        answer += number.target.value;
        displayScreen.textContent = answer;
    }
})


operators.forEach(operator => {
    operator.addEventListener("click", operations);

    function operations(operator) {
        displayOperator = operator.target.value;

        if (displayOperator == "+") {
            answer += displayOperator;
            displayScreen.textContent = answer;
        } else if (displayOperator == "-") {
            answer += displayOperator;
            displayScreen.textContent = answer;
        } else if (displayOperator == "/") {
            answer += displayOperator;
            displayScreen.textContent = answer;
        } else if (displayOperator == "*") {
            answer += displayOperator;
            displayScreen.textContent = answer;
        }

        if (displayOperator == "=") {
            answer = eval(answer)
            displayScreen.textContent = answer;
        }

        if (displayOperator == "DEL") {
            answer = answer.slice(0, -1);
            displayScreen.textContent = answer;
        }

        if (displayOperator == "AC") {
            answer = ""
            displayScreen.textContent = answer;
        }
    }

})
