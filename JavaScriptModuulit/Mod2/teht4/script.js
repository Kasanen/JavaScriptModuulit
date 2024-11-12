const numbers = [];
let number = prompt("Give a number");
console.log(number);    

while (number != 0){
    numbers.push(number);
    number = prompt("Give a number");
    console.log(number);
}

numbers.sort((a, b) => a - b);

console.log(numbers);