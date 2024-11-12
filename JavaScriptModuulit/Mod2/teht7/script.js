const max = prompt('Dice sides');
let number = 0;

function dice(max) {
    number = Math.floor(Math.random() * max) + 1;
}

while (number != max) {
    dice(max);
    const li = document.createElement('li');
    document.getElementById('vastaus').appendChild(li).innerHTML = number;
}