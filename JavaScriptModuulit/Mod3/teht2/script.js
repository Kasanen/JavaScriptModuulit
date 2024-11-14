const target = document.getElementById('target');

let li1 = document.createElement('li');
li1.innerHTML = "First item";
target.appendChild(li1);

let li2 = document.createElement('li');
li2.innerHTML = "Second item";
target.appendChild(li2);

let li3 = document.createElement('li');
li3.innerHTML = "Third item";
target.appendChild(li3);

const second = document.getElementsByTagName('li')[2];
second.classList.add('my-item');