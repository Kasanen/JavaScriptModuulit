let number = 0;

function dice() {
    number = Math.floor(Math.random() * 6) + 1;
}

while (number != 6) {
    dice();
    const li = document.createElement('li');
    document.getElementById('vastaus').appendChild(li).innerHTML = number;
}