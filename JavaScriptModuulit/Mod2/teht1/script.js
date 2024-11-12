const array = [];
const finalArray = [];

for (let i = 0; i < 5; i++){
    const number = prompt('Give a number');
    array.push(number);
    console.log(number);
}

console.log("-----------------");

let arrayNumber = 4;

for (let i = 0; i < array.length; i++){
    finalArray.push(array[arrayNumber]);
    arrayNumber--;

}

console.log(finalArray);