const dogs = [];

for (let i = 0; i < 6; i++){
    const name = prompt("Give the name of the dog");
    dogs.push(name);
    console.log(name);
}

console.log("-----------------");

dogs.sort();
dogs.reverse();

for (let i = 0; i < dogs.length; i++){
    const ul = document.createElement('ul');
    document.getElementById('vastaus').appendChild(ul).innerHTML = dogs[i];
}