const amount = prompt("Give the number of participants");
const participants = [];

for (let i = 0; i < amount; i++){
    const name = prompt("Give the name of the participant");
    participants.push(name);
    console.log(name);
}

console.log("-----------------");

participants.sort();

for (let i = 0; i < participants.length; i++){
    const ol = document.createElement('ol');
    ol.textContent = participants[i];
    document.getElementById('kohde').appendChild(ol).innerHTML = participants[i];
}