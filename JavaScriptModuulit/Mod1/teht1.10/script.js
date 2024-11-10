const diceNumber = parseInt(prompt("Give number of dices to throw!"));
const sumNumber = parseInt(prompt("Give sum number to be counted!"));
let isSame = 0;

for (let i = 0; i < 10000; i ++){
    let summary = 0;
    for (let j = 0; j < diceNumber; j++){
        const roll = Math.floor(Math.random() * 6) + 1;
        summary += roll;
    }

    if(summary === sumNumber){
        isSame += 1;
    }
}

document.getElementById('vastaus').innerHTML = "Probability to get sum " + sumNumber + " with " + diceNumber + " dice is " + ((isSame / 10000) * 100).toFixed(2) + "%";