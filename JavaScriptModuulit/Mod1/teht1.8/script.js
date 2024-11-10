const alkuVuosi = prompt('Start year');
const loppuVuosi = prompt('End year');

for (let i = alkuVuosi; i <= loppuVuosi; i++){
    if (i % 4 === 0 && i % 100 !== 0 || i % 400 === 0) {
        const li = document.createElement('li')
        li.textContent = i;
        document.getElementById('vastaus').appendChild(li).innerHTML = i; 
    }
    else {
        console.log(i+'ei ole karkausvuosi');
    }
}