const vuosi = prompt('Anna vuosi');

if (vuosi % 4 === 0 && vuosi % 100 !== 0 || vuosi % 400 === 0) {
    document.getElementById('vastaus').innerHTML = vuosi + " on karkausvuosi";
}
else {
    document.getElementById('vastaus').innerHTML = vuosi + " ei ole karkausvuosi";
}
