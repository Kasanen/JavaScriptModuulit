const input = document.getElementById('calculation');
const button = document.getElementById('start');

function count(num1, num2, opp) {
    if (opp === '+') {
        return num1 + num2;
    } else if (opp === '-') {
        return num1 - num2;
    } else if (opp === '*') {
        return num1 * num2;
    } else if (opp === '/') {
        return num1 / num2;
    }
}

button.addEventListener('click', () => {
    let numbers = input.value.split(/(\+|\-|\*|\/)/);
    let number1 = numbers[0].trim();
    let operation = numbers[1];
    let number2 = numbers[2].trim();
    
    console.log(count(parseInt(number1), parseInt(number2), operation));
    console.log("button clicked");
});
