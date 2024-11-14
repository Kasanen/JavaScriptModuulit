const number1 = document.getElementById('num1');
const number2 = document.getElementById('num2');
const value = document.getElementById('operation').value;
const button = document.getElementById('start');
const result = document.getElementById('result');

function count(num1, num2) {
    if (value == 'add'){
        return num1 + num2;
    } else if (value == 'sub'){
        return num1 - num2;
    } else if (value == 'multi'){
        return num1 * num2;
    } else if (value == 'div'){
        return num1 / num2;
    }
}


button.addEventListener('click', () => {
    result.innerHTML = count(parseInt(number1.value), parseInt(number2.value));
});