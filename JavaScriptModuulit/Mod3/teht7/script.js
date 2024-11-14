const trigger = document.getElementById('trigger');
const image = document.getElementById('target');


trigger.addEventListener('mouseover', () => {
    image.setAttribute('src', 'img/picB.jpg');
});

trigger.addEventListener('mouseout', () => {
    image.setAttribute('src', 'img/picA.jpg');
});