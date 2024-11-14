const form = document.getElementById("source");
const first = document.querySelector("input[name=firstname]");
const last = document.querySelector("input[name=lastname]");
const target = document.getElementById("target");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let firstValue = first.value;
    let lastValue = last.value;

  target.innerHTML = `Your name is ` + firstValue + ` ` + lastValue;
});
