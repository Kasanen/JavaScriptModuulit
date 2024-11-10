const kertoja = prompt('Give a number of dices to roll');
let yhteensa = 0;

for (let i = 0; i < kertoja; i++) {
    const noppa = Math.floor(Math.random() * 6) + 1;
    console.log("Nopan lukema " + noppa);
    yhteensa += noppa;
}

document.getElementById('vastaus').innerHTML = "The sum of the dices is " + yhteensa;
