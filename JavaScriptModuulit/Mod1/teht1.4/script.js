const nimi = prompt('Anna nimesi');
const numero = Math.floor(Math.random() * 4) + 1;
const teksti = '';


switch (numero) { 
    case 1:
        document.getElementById('vastaus').innerHTML = nimi +  ", you are Gryffindor.";
        break;
    case 2:
        document.getElementById('vastaus').innerHTML = nimi + ", you are Hufflepuff.";
        break;
    case 3:
        document.getElementById('vastaus').innerHTML = nimi + ", you are Ravenclaw.";
        break;
    case 4:
        document.getElementById('vastaus').innerHTML = nimi + ", you are Slytherin.";
        break;
    default:
        console.log('Virheellinen numero');
}