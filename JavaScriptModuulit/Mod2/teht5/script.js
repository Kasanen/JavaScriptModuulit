const numbers = [];
let number = prompt("Give a number");
let check = true;
console.log(number);    

while (check){
    numbers.push(number);
    number = prompt("Give a number");
    console.log(number);

    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] == number){
            check = false;
            console.log("The number has already been given");
            break;
        }
    }
}

numbers.sort((a, b) => a - b);

console.log(numbers);