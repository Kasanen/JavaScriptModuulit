const numbers = [2, 7, 4];

function even(){
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] % 2 == 0){
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}

console.log(numbers);
console.log(even(numbers));