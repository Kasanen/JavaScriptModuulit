const kysymys = confirm("Should I calculate the square root?");
if (kysymys) {
    const luku = prompt("Give a number:");
    const neliöjuuri = Math.sqrt(luku);
    document.getElementById('vastaus').innerHTML = "The square root of " + luku + " is " + neliöjuuri;
}
else {
    document.getElementById('vastaus').innerHTML = "The square root is not calculated.";
}