const numero = prompt("Insert number!");
let isPrime = true;

if (numero <= 1) {
    isPrime = false;
} else if (numero === 2) {
    isPrime = true;
} else if (numero % 2 === 0) {
    isPrime = false;
} else {
    for (let i = 3; i <= Math.sqrt(numero); i += 2) {
        if (numero % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    document.getElementById('vastaus').innerHTML = numero + " is prime number.";
} else {
    document.getElementById('vastaus').innerHTML = numero + " is not prime number.";
}